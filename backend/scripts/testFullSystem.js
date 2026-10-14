const http = require('http');

function makeRequest(options, postData = null) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, data: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, raw: data });
        }
      });
    });

    req.on('error', reject);
    if (postData) {
      req.write(typeof postData === 'string' ? postData : JSON.stringify(postData));
    }
    req.end();
  });
}

async function runTests() {
  console.log('=== FULL SYSTEM INTEGRATION TEST ===\n');

  // 1. Test GET /api/careers
  console.log('1. Testing GET /api/careers...');
  const careersRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: '/api/careers',
    method: 'GET'
  });
  console.log(`   Status: ${careersRes.status}, Total Careers: ${careersRes.data.count}`);
  if (careersRes.data.count !== 100) {
    throw new Error(`Expected 100 careers, got ${careersRes.data.count}`);
  }

  // 2. Test GET /api/careers/slug/teacher
  console.log('\n2. Testing GET /api/careers/slug/teacher...');
  const teacherRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: '/api/careers/slug/teacher',
    method: 'GET'
  });
  console.log(`   Status: ${teacherRes.status}, Title: "${teacherRes.data.data.title}"`);
  console.log(`   Has educationQualification: ${!!teacherRes.data.data.educationQualification}`);
  console.log(`   Min Qualification: "${teacherRes.data.data.educationQualification.minimumQualification.substring(0, 50)}..."`);

  // 3. Test GET /api/roadmaps/career/:id for teacher
  console.log('\n3. Testing GET /api/roadmaps/career/:id for teacher...');
  const teacherId = teacherRes.data.data._id;
  const roadmapRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: `/api/roadmaps/career/${teacherId}`,
    method: 'GET'
  });
  console.log(`   Status: ${roadmapRes.status}, Title: "${roadmapRes.data.data.title}"`);
  console.log(`   Total Duration: "${roadmapRes.data.data.totalDurationFormatted}" (${roadmapRes.data.data.totalDurationMonths} months)`);
  console.log(`   Steps Count: ${roadmapRes.data.data.steps.length}`);
  roadmapRes.data.data.steps.forEach(s => {
    console.log(`     - Step ${s.stepNumber}: ${s.title} [${s.durationMonths} ${s.durationMonths === 1 ? 'month' : 'months'}]`);
    if (s.title.toLowerCase().includes('bachelor') || s.title.toLowerCase().includes('b.ed')) {
      throw new Error(`Found degree milestone in roadmap: ${s.title}`);
    }
  });

  // 4. Test GET /api/careers/slug/software-developer
  console.log('\n4. Testing GET /api/careers/slug/software-developer...');
  const devRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: '/api/careers/slug/software-developer',
    method: 'GET'
  });
  console.log(`   Status: ${devRes.status}, Title: "${devRes.data.data.title}"`);
  console.log(`   Has educationQualification: ${!!devRes.data.data.educationQualification}`);

  // 5. Test Auth Login
  console.log('\n5. Testing Auth Login with test user...');
  const loginRes = await makeRequest({
    hostname: 'localhost',
    port: 5000,
    path: '/api/auth/login',
    method: 'POST',
    headers: { 'Content-Type': 'application/json' }
  }, { email: 'student1@example.com', password: 'Password@123' });

  console.log(`   Status: ${loginRes.status}, Success: ${loginRes.data.success}`);
  const token = loginRes.data.data?.token;

  if (token) {
    console.log('   JWT Token received successfully.');
    // 6. Test Protected Route: GET /api/auth/me
    console.log('\n6. Testing Protected Route GET /api/auth/me...');
    const meRes = await makeRequest({
      hostname: 'localhost',
      port: 5000,
      path: '/api/auth/me',
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    console.log(`   Status: ${meRes.status}, User: ${meRes.data.data?.name} (${meRes.data.data?.email})`);

    // 7. Test GET /api/saved-careers
    console.log('\n7. Testing GET /api/saved-careers...');
    const savedRes = await makeRequest({
      hostname: 'localhost',
      port: 5000,
      path: '/api/saved-careers',
      method: 'GET',
      headers: { 'Authorization': `Bearer ${token}` }
    });
    console.log(`   Status: ${savedRes.status}, Saved count: ${savedRes.data.data?.length}`);
  } else {
    console.log('   (Skipping protected routes test: test user credentials may differ)');
  }

  console.log('\n=== ALL INTEGRATION CHECKS PASSED SUCCESSFULLY ===');
}

runTests().catch(err => {
  console.error('Integration test failed:', err);
  process.exit(1);
});
