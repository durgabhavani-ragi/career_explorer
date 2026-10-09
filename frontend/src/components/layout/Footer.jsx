import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color, #e4e4e7)',
        backgroundColor: '#ffffff',
        padding: '40px 0 28px 0',
        marginTop: '64px',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '32px',
            marginBottom: '32px',
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: '340px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--text-main, #18181b)',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '5px',
                  backgroundColor: 'var(--primary, #18181b)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Compass size={14} />
              </div>
              <span>Career Explorer</span>
            </div>
            <p style={{ color: 'var(--text-muted, #71717a)', fontSize: '0.86rem', lineHeight: 1.55 }}>
              A career guidance platform providing clear role overviews, essential competencies, and step-by-step learning roadmaps.
            </p>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-main, #18181b)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                }}
              >
                Explore
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <Link to="/careers" style={{ fontSize: '0.86rem', color: 'var(--text-muted, #71717a)' }}>
                    Career Directory
                  </Link>
                </li>
                <li>
                  <Link to="/categories" style={{ fontSize: '0.86rem', color: 'var(--text-muted, #71717a)' }}>
                    Categories
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-main, #18181b)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                }}
              >
                Account
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <Link to="/login" style={{ fontSize: '0.86rem', color: 'var(--text-muted, #71717a)' }}>
                    Log In
                  </Link>
                </li>
                <li>
                  <Link to="/register" style={{ fontSize: '0.86rem', color: 'var(--text-muted, #71717a)' }}>
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-color, #e4e4e7)',
            paddingTop: '20px',
            fontSize: '0.8rem',
            color: 'var(--text-muted, #71717a)',
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Career Explorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
