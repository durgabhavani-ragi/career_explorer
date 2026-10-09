import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Mail, Lock, Eye, EyeOff, AlertCircle, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submissions
    setError('');

    const trimmedEmail = email.trim();
    if (!trimmedEmail || !password) {
      setError('Please provide both your email address and password.');
      return;
    }

    setLoading(true);
    try {
      const res = await login(trimmedEmail, password);
      if (res.success) {
        navigate(from, { replace: true });
      } else {
        setError(res.message || 'Invalid email address or password.');
      }
    } catch (err) {
      setError(err.message || 'Authentication failed. Please verify your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="container animate-fade-in"
      style={{
        padding: '48px 20px',
        minHeight: 'calc(100vh - 180px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Split-Screen Container Card */}
      <div
        className="editorial-card split-auth-container"
        style={{
          width: '100%',
          maxWidth: '880px',
          backgroundColor: '#ffffff',
          borderRadius: 'var(--radius-lg, 12px)',
          overflow: 'hidden',
          display: 'grid',
          gridTemplateColumns: '1fr 1.15fr',
          border: '1px solid var(--border-color, #e4e4e7)',
          boxShadow: 'var(--shadow-sm, 0 1px 3px 0 rgba(0,0,0,0.05))',
        }}
      >
        {/* Left Panel: Branded Career Discovery Section */}
        <div
          className="auth-branded-panel"
          style={{
            backgroundColor: 'var(--bg-subtle, #f4f4f5)',
            borderRight: '1px solid var(--border-color, #e4e4e7)',
            padding: '44px 36px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          {/* Brand & Headline */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '28px',
              }}
            >
              <div
                style={{
                  width: '30px',
                  height: '30px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--primary, #18181b)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Compass size={17} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-main)' }}>
                Career Explorer
              </span>
            </div>

            <h2
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-main, #18181b)',
                lineHeight: 1.25,
                marginBottom: '10px',
                letterSpacing: '-0.025em',
              }}
            >
              Clarity for your professional journey.
            </h2>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted, #71717a)',
                lineHeight: 1.55,
                marginBottom: '24px',
              }}
            >
              Explore structured roadmaps, track skill milestones, and bookmark career profiles.
            </p>

            {/* Subtle Career Discovery Illustration */}
            <div
              className="auth-visual-element"
              style={{
                margin: '20px 0',
                padding: '20px',
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                border: '1px solid var(--border-color, #e4e4e7)',
              }}
            >
              <svg
                viewBox="0 0 280 120"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                aria-hidden="true"
              >
                {/* Connecting Path */}
                <path
                  d="M 30 90 Q 90 20, 150 70 T 250 30"
                  fill="none"
                  stroke="#d4d4d8"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                {/* Node 1 */}
                <circle cx="30" cy="90" r="10" fill="#ffffff" stroke="#18181b" strokeWidth="2.5" />
                <circle cx="30" cy="90" r="4" fill="#18181b" />
                <text x="30" y="112" fontSize="9" fontWeight="600" fill="#71717a" textAnchor="middle">
                  Explore
                </text>

                {/* Node 2 */}
                <circle cx="150" cy="70" r="10" fill="#ffffff" stroke="#18181b" strokeWidth="2.5" />
                <circle cx="150" cy="70" r="4" fill="#18181b" />
                <text x="150" y="92" fontSize="9" fontWeight="600" fill="#71717a" textAnchor="middle">
                  Roadmap
                </text>

                {/* Node 3 */}
                <circle cx="250" cy="30" r="12" fill="#18181b" stroke="#18181b" strokeWidth="2" />
                <path d="M 246 30 L 249 33 L 255 27" fill="none" stroke="#ffffff" strokeWidth="2" />
                <text x="250" y="54" fontSize="9" fontWeight="600" fill="#18181b" textAnchor="middle">
                  Mastery
                </text>
              </svg>
            </div>
          </div>

          {/* Value Points */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)' }}>
              <CheckCircle2 size={14} color="#166534" />
              <span>Personalized career bookmarking</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)' }}>
              <CheckCircle2 size={14} color="#166534" />
              <span>Interactive learning milestone tracker</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Clean Login Form */}
        <div
          className="auth-form-panel"
          style={{
            padding: '44px 38px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <div style={{ marginBottom: '24px' }}>
            <h1
              style={{
                fontSize: '1.5rem',
                fontWeight: 800,
                color: 'var(--text-main, #18181b)',
                letterSpacing: '-0.025em',
                marginBottom: '4px',
              }}
            >
              Sign in
            </h1>
            <p style={{ color: 'var(--text-muted, #71717a)', fontSize: '0.88rem' }}>
              Enter your credentials to access your account.
            </p>
          </div>

          {error && (
            <div className="alert-error" style={{ marginBottom: '18px' }}>
              <AlertCircle size={15} style={{ flexShrink: 0 }} />
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label className="form-label" htmlFor="login-email">
                Email Address
              </label>
              <div style={{ position: 'relative' }}>
                <Mail
                  size={15}
                  color="var(--text-muted, #71717a)"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  id="login-email"
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  style={{ paddingLeft: '36px', height: '40px' }}
                />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label className="form-label" htmlFor="login-password">
                Password
              </label>
              <div style={{ position: 'relative' }}>
                <Lock
                  size={15}
                  color="var(--text-muted, #71717a)"
                  style={{
                    position: 'absolute',
                    left: '12px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    pointerEvents: 'none',
                  }}
                />
                <input
                  id="login-password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                  style={{ paddingLeft: '36px', paddingRight: '36px', height: '40px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: 'var(--text-muted, #71717a)',
                    cursor: 'pointer',
                    padding: '2px',
                    display: 'flex',
                    alignItems: 'center',
                  }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={loading}
              style={{ width: '100%', height: '42px', fontSize: '0.9rem' }}
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <p
            style={{
              textAlign: 'center',
              marginTop: '20px',
              color: 'var(--text-muted, #71717a)',
              fontSize: '0.85rem',
            }}
          >
            Don't have an account?{' '}
            <Link
              to="/register"
              style={{
                color: 'var(--text-main, #18181b)',
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              Create an account
            </Link>
          </p>
        </div>
      </div>

      {/* Responsive media styling for Split-Screen */}
      <style>{`
        @media (max-width: 768px) {
          .split-auth-container {
            grid-template-columns: 1fr !important;
          }
          .auth-branded-panel {
            border-right: none !important;
            border-bottom: 1px solid var(--border-color, #e4e4e7) !important;
            padding: 24px 20px !important;
          }
          .auth-form-panel {
            padding: 28px 20px !important;
          }
          .auth-visual-element {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
