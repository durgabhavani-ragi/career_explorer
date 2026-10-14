import React from 'react';
import { Link } from 'react-router-dom';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border-color)',
        backgroundColor: 'var(--bg-secondary)',
        padding: '40px 0 28px 0',
        marginTop: '64px',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
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
          {/* Brand & Purpose */}
          <div style={{ maxWidth: '380px' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--text-main)',
                marginBottom: '10px',
              }}
            >
              <div
                style={{
                  width: '26px',
                  height: '26px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--primary)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Compass size={15} />
              </div>
              <span>Career Explorer</span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.86rem', lineHeight: 1.6 }}>
              A specialized career discovery platform highlighting top careers in the Indian job market with authentic salaries, non-generic pathways, and verified roadmaps.
            </p>
          </div>

          {/* Directory Links */}
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap' }}>
            <div>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px',
                }}
              >
                Directory
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <Link to="/careers" style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    Top Careers
                  </Link>
                </li>
                <li>
                  <Link to="/categories" style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    Industry Categories
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
                  color: 'var(--text-main)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '12px',
                }}
              >
                Account
              </span>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <li>
                  <Link to="/login" style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    Sign In
                  </Link>
                </li>
                <li>
                  <Link to="/register" style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
                    Create Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: '1px solid var(--border-light)',
            paddingTop: '20px',
            fontSize: '0.8rem',
            color: 'var(--text-muted)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          <p style={{ margin: 0 }}>
            © {new Date().getFullYear()} Career Explorer India. Educational & career planning resource.
          </p>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-subtle)' }}>
            Curated Careers • Authentic Indian Salaries
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
