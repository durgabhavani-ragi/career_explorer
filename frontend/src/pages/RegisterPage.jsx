import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, Lock, Eye, EyeOff, AlertCircle, Compass, CheckCircle2 } from 'lucide-react';

const RegisterPage = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (loading) return; // Prevent duplicate submissions
    setError('');

    const trimmedName = name.trim();
    const trimmedEmail = email.trim();

    if (!trimmedName || !trimmedEmail || !password) {
      setError('Please fill in all required fields.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return;
    }

    setLoading(true);
    try {
      const res = await register(trimmedName, trimmedEmail, password);
      if (res.success) {
        navigate('/');
      } else {
        setError(res.message || 'Registration failed.');
      }
    } catch (err) {
      setError(err.message || 'Registration failed. Email address may already be in use.');
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
        {/* Left Panel: Branded Welcome */}
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
              Build your personal learning roadmap.
            </h2>
            <p
              style={{
                fontSize: '0.88rem',
                color: 'var(--text-muted, #71717a)',
                lineHeight: 1.55,
                marginBottom: '24px',
              }}
            >
              Create an account to mark milestone progress and save career profiles for future reference.
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
                viewBox="0 0 280 100"
                style={{ width: '100%', height: 'auto', display: 'block' }}
                aria-hidden="true"
              >
                <line x1="20" y1="50" x2="260" y2="50" stroke="#e4e4e7" strokeWidth="2" />
                <circle cx="50" cy="50" r="12" fill="#18181b" />
                <path d="M 46 50 L 49 53 L 55 47" fill="none" stroke="#ffffff" strokeWidth="2" />
                <text x="50" y="76" fontSize="9" fontWeight="600" fill="#71717a" textAnchor="middle">
                  Profile
                </text>

                <circle cx="140" cy="50" r="12" fill="#ffffff" stroke="#18181b" strokeWidth="2" />
                <circle cx="140" cy="50" r="4" fill="#18181b" />
                <text x="140" y="76" fontSize="9" fontWeight="600" fill="#71717a" textAnchor="middle">
                  Skills
                </text>

                <circle cx="230" cy="50" r="12" fill="#ffffff" stroke="#d4d4d8" strokeWidth="2" />
                <text x="230" y="76" fontSize="9" fontWeight="600" fill="#a1a1aa" textAnchor="middle">
                  Milestone
                </text>
              </svg>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)' }}>
              <CheckCircle2 size={14} color="#166534" />
              <span>Free, non-commercial educational resource</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-body)' }}>
              <CheckCircle2 size={14} color="#166534" />
              <span>Full access to all roadmaps and profiles</span>
            </div>
          </div>
        </div>

        {/* Right Panel: Clean Registration Form */}
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
              Create account
            </h1>
            <p style={{ color: 'var(--text-muted, #71717a)', fontSize: '0.88rem' }}>
              Fill in your details to start exploring.
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
              <label className="form-label" htmlFor="register-name">
                Full Name
              </label>
              <div style={{ position: 'relative' }}>
                <User
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
                  id="register-name"
                  type="text"
                  className="form-input"
                  placeholder="First and last name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  style={{ paddingLeft: '36px', height: '40px' }}
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="register-email">
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
                  id="register-email"
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
              <label className="form-label" htmlFor="register-password">
                Password (min 6 characters)
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
                  id="register-password"
                  type={showPassword ? 'text' : 'password'}
                  className="form-input"
                  placeholder="At least 6 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                  autoComplete="new-password"
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
              {loading ? 'Creating Account...' : 'Register'}
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
            Already have an account?{' '}
            <Link
              to="/login"
              style={{
                color: 'var(--text-main, #18181b)',
                fontWeight: 600,
                textDecoration: 'underline',
              }}
            >
              Sign in
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

export default RegisterPage;
