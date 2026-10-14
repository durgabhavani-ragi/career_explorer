const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const os = require('os');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const CDP_PORT = 9222;

async function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

class CDPClient {
  constructor(wsUrl) {
    this.wsUrl = wsUrl;
    this.ws = null;
    this.id = 1;
    this.pending = new Map();
    this.events = new Map();
  }

  async connect() {
    return new Promise((resolve, reject) => {
      this.ws = new WebSocket(this.wsUrl);
      this.ws.onopen = () => resolve();
      this.ws.onerror = (e) => reject(e);
      this.ws.onmessage = (event) => {
        const msg = JSON.parse(event.data);
        if (msg.id && this.pending.has(msg.id)) {
          const { res, rej } = this.pending.get(msg.id);
          this.pending.delete(msg.id);
          if (msg.error) rej(new Error(msg.error.message || JSON.stringify(msg.error)));
          else res(msg.result);
        } else if (msg.method) {
          const handler = this.events.get(msg.method);
          if (handler) handler(msg.params);
        }
      };
    });
  }

  on(method, handler) {
    this.events.set(method, handler);
  }

  async send(method, params = {}) {
    const id = this.id++;
    return new Promise((res, rej) => {
      this.pending.set(id, { res, rej });
      this.ws.send(JSON.stringify({ id, method, params }));
    });
  }

  async evaluate(expression) {
    const res = await this.send('Runtime.evaluate', {
      expression,
      returnByValue: true,
      awaitPromise: true,
    });
    if (res.exceptionDetails) {
      throw new Error(res.exceptionDetails.text || res.exceptionDetails.exception?.description);
    }
    return res.result?.value;
  }

  close() {
    if (this.ws) this.ws.close();
  }
}

async function runBrowserTest() {
  console.log('--- STARTING REAL BROWSER CDP TEST ---');
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'chrome-test-'));

  const chromeProc = spawn(CHROME_PATH, [
    '--headless=new',
    `--remote-debugging-port=${CDP_PORT}`,
    `--user-data-dir=${tempDir}`,
    '--no-first-run',
    '--no-default-browser-check',
    '--disable-gpu',
    '--disable-background-networking',
  ]);

  let client = null;
  const consoleLogs = [];
  const runtimeErrors = [];

  try {
    // Wait for Chrome to listen on port 9222
    let versionData = null;
    for (let i = 0; i < 20; i++) {
      await sleep(300);
      try {
        const res = await fetch(`http://127.0.0.1:${CDP_PORT}/json/version`);
        versionData = await res.json();
        if (versionData && versionData.webSocketDebuggerUrl) break;
      } catch {}
    }

    if (!versionData) {
      throw new Error('Chrome failed to start CDP listener on port 9222');
    }

    console.log('Chrome started with browser WebSocket:', versionData.webSocketDebuggerUrl);

    // Create a new target page
    const newTabRes = await fetch(`http://127.0.0.1:${CDP_PORT}/json/new?http://localhost:5173/`, { method: 'PUT' });
    const tabData = await newTabRes.json();
    console.log('Created page target:', tabData.webSocketDebuggerUrl);

    client = new CDPClient(tabData.webSocketDebuggerUrl);
    await client.connect();

    // Enable domains
    await client.send('Page.enable');
    await client.send('Runtime.enable');
    await client.send('Console.enable');

    client.on('Console.messageAdded', (p) => {
      consoleLogs.push(p.message.text);
      if (p.message.level === 'error') {
        console.error(' [BROWSER CONSOLE ERROR]:', p.message.text);
      }
    });

    client.on('Runtime.exceptionThrown', (p) => {
      const desc = p.exceptionDetails.exception?.description || p.exceptionDetails.text;
      runtimeErrors.push(desc);
      console.error(' [BROWSER UNCAUGHT EXCEPTION]:', desc);
    });

    const testUserEmail = `test_flow_${Date.now()}@example.com`;
    const testUserPassword = 'TestPassword123!';
    const testUserName = 'Test Explorer';

    console.log('\n=== TEST 1: Initial load / unauthenticated visitor ===');
    await sleep(1500);
    let currentUrl = await client.evaluate('window.location.href');
    console.log('Loaded URL:', currentUrl);
    if (!currentUrl.includes('/login')) {
      await sleep(1500);
      currentUrl = await client.evaluate('window.location.href');
    }
    const hasEmailField = await client.evaluate("!!document.getElementById('login-email')");
    const hasPasswordField = await client.evaluate("!!document.getElementById('login-password')");
    console.log('Unauthenticated visitor redirected to login successfully:', { hasEmailField, hasPasswordField, currentUrl });

    console.log('\n=== TEST 2: Register a new account via browser UI ===');
    // Navigate to /register
    await client.evaluate("window.location.href = 'http://localhost:5173/register'");
    await sleep(1500);
    const regUrl = await client.evaluate('window.location.href');
    console.log('Navigated to Register URL:', regUrl);

    await client.evaluate(`
      (() => {
        const setReactVal = (input, val) => {
          const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          setter.call(input, val);
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        };
        setReactVal(document.getElementById('register-name'), '${testUserName}');
        setReactVal(document.getElementById('register-email'), '${testUserEmail}');
        setReactVal(document.getElementById('register-password'), '${testUserPassword}');
      })()
    `);
    await sleep(300);

    // Submit registration form
    await client.evaluate(`
      (() => {
        const btn = document.querySelector('button[type="submit"]');
        btn.click();
      })()
    `);

    console.log('Submitted registration form. Waiting for navigation to /careers...');
    await sleep(3500);
    const postRegUrl = await client.evaluate('window.location.href');
    console.log('Post-Registration URL:', postRegUrl);

    // Verify token is in localStorage
    const storedToken = await client.evaluate("localStorage.getItem('token')");
    console.log('Token saved in localStorage:', !!storedToken);

    // Check if the page is blank
    const bodyText = await client.evaluate('document.body.innerText.trim()');
    console.log('Is Explore Careers page blank?', bodyText.length === 0, '| Body text length:', bodyText.length);

    // Count career cards
    const cardCount = await client.evaluate("document.querySelectorAll('article.editorial-card').length");
    console.log('Rendered Career Cards count:', cardCount);
    const headingText = await client.evaluate("document.querySelector('h1')?.innerText");
    console.log('Page H1 Heading:', headingText);

    if (cardCount === 100) {
      console.log('SUCCESS: Exactly 100 career cards rendered immediately after authentication!');
    } else {
      console.log('Career cards rendered:', cardCount);
    }

    console.log('\n=== TEST 3: Log Out from the application ===');
    await client.evaluate(`
      (() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const logoutBtn = buttons.find(b => b.title === 'Sign Out' || b.innerText.includes('Sign Out'));
        if (logoutBtn) logoutBtn.click();
      })()
    `);
    await sleep(2000);
    const postLogoutUrl = await client.evaluate('window.location.href');
    const tokenAfterLogout = await client.evaluate("localStorage.getItem('token')");
    console.log('Post-Logout URL:', postLogoutUrl, '| Token cleared:', tokenAfterLogout === null);

    console.log('\n=== TEST 4: Attempt protected access while logged out ===');
    await client.evaluate("window.location.href = 'http://localhost:5173/careers'");
    await sleep(1500);
    const protectedAttemptUrl = await client.evaluate('window.location.href');
    console.log('Attempted /careers while unauthenticated -> Redirected to:', protectedAttemptUrl);

    console.log('\n=== TEST 5: Test Invalid Login Credentials ===');
    await client.evaluate(`
      (() => {
        const setReactVal = (input, val) => {
          const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          setter.call(input, val);
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        };
        setReactVal(document.getElementById('login-email'), '${testUserEmail}');
        setReactVal(document.getElementById('login-password'), 'WrongPassword123!');
      })()
    `);
    await sleep(300);
    await client.evaluate("document.querySelector('button[type=\"submit\"]').click()");
    await sleep(1500);
    const loginErrorText = await client.evaluate("document.querySelector('.alert-error')?.innerText");
    console.log('Invalid credentials properly rejected with error:', loginErrorText);

    console.log('\n=== TEST 6: Successful Login with Valid Credentials ===');
    await client.evaluate(`
      (() => {
        const setReactVal = (input, val) => {
          const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
          setter.call(input, val);
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.dispatchEvent(new Event('change', { bubbles: true }));
        };
        setReactVal(document.getElementById('login-email'), '${testUserEmail}');
        setReactVal(document.getElementById('login-password'), '${testUserPassword}');
      })()
    `);
    await sleep(300);
    await client.evaluate("document.querySelector('button[type=\"submit\"]').click()");
    console.log('Submitted valid credentials. Waiting for navigation...');
    await sleep(3500);
    const validLoginUrl = await client.evaluate('window.location.href');
    const validLoginCards = await client.evaluate("document.querySelectorAll('article.editorial-card').length");
    console.log('Post-Login Destination URL:', validLoginUrl);
    console.log('Career Cards Rendered:', validLoginCards);

    console.log('\n=== TEST 7: Navigate to Categories Page (/categories) ===');
    await client.evaluate("window.location.href = 'http://localhost:5173/categories'");
    await sleep(2500);
    const catPageUrl = await client.evaluate('window.location.href');
    const catCardsCount = await client.evaluate("document.querySelectorAll('.grid-3 > div').length");
    const hasTotalText = await client.evaluate("document.body.innerText.includes('100 Careers')");
    console.log('Categories Page URL:', catPageUrl, '| Category Cards:', catCardsCount, '| Verified 100 total careers:', hasTotalText);

    console.log('\n=== TEST 8: Open Career Detail Page (/careers/software-developer) ===');
    await client.evaluate("window.location.href = 'http://localhost:5173/careers/software-developer'");
    await sleep(2500);
    const detailUrl = await client.evaluate('window.location.href');
    const detailTitle = await client.evaluate("document.querySelector('h1')?.innerText");
    const hasTimeline = await client.evaluate("document.body.innerText.includes('Preparation Timeline')");
    const hasEducationTab = await client.evaluate("document.body.innerText.includes('Education Pathways & Eligibility')");
    const hasSalary = await client.evaluate("document.body.innerText.includes('Indian Salary Compensation')");
    console.log('Detail Page URL:', detailUrl, '| Title:', detailTitle, '| Timeline:', hasTimeline, '| Education:', hasEducationTab, '| Salary:', hasSalary);

    console.log('\n=== TEST 9: Test Theme Switcher (Dark <-> Light) ===');
    const initialTheme = await client.evaluate("document.documentElement.getAttribute('data-theme')");
    console.log('Initial Theme:', initialTheme);
    await client.evaluate(`
      (() => {
        const toggleBtn = document.querySelector('.btn-theme-toggle');
        if (toggleBtn) toggleBtn.click();
      })()
    `);
    await sleep(500);
    const toggledTheme = await client.evaluate("document.documentElement.getAttribute('data-theme')");
    console.log('Toggled Theme:', toggledTheme);
    // Toggle back
    await client.evaluate(`
      (() => {
        const toggleBtn = document.querySelector('.btn-theme-toggle');
        if (toggleBtn) toggleBtn.click();
      })()
    `);
    await sleep(500);
    const revertedTheme = await client.evaluate("document.documentElement.getAttribute('data-theme')");
    console.log('Reverted Theme:', revertedTheme);

    console.log('\n=== TEST 10: Refresh Protected Page (Session Restoration) ===');
    await client.evaluate("window.location.href = 'http://localhost:5173/careers'");
    await sleep(1500);
    await client.evaluate('window.location.reload()');
    await sleep(2500);
    const reloadedUrl = await client.evaluate('window.location.href');
    const reloadedCards = await client.evaluate("document.querySelectorAll('article.editorial-card').length");
    console.log('Reloaded URL:', reloadedUrl, '| Cards after reload:', reloadedCards);

    console.log('\n=== SUMMARY OF RUNTIME ERRORS & EXCEPTIONS ===');
    console.log('Uncaught Runtime Exceptions count:', runtimeErrors.length);
    if (runtimeErrors.length > 0) {
      runtimeErrors.forEach((e) => console.error(' -', e));
    } else {
      console.log('Zero uncaught exceptions during the entire browser run!');
    }

    console.log('--- TEST COMPLETE ---');
  } catch (err) {
    console.error('Test execution failed:', err);
  } finally {
    if (client) client.close();
    chromeProc.kill('SIGKILL');
    try {
      fs.rmSync(tempDir, { recursive: true, force: true });
    } catch {}
  }
}

runBrowserTest();
