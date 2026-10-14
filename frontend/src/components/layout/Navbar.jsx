import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from '../common/ThemeToggle';
import { Compass, Bookmark, CheckSquare, Shield, LogOut, User as UserIcon, Menu, X, Sparkles } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/login', { replace: true });
  };

  const closeMobile = () => setMobileMenuOpen(false);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--primary)' : 'var(--text-muted)',
    fontWeight: isActive ? 600 : 500,
    fontSize: '0.88rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    borderRadius: 'var(--radius-full)',
    background: isActive ? 'var(--primary-subtle)' : 'transparent',
    border: isActive ? '1px solid var(--primary-border)' : '1px solid transparent',
    transition: 'all 0.15s ease',
  });

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-color)',
        boxShadow: 'var(--shadow-xs)',
        transition: 'background-color 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '64px',
        }}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          onClick={closeMobile}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: 'var(--text-main)',
            fontWeight: 700,
            fontSize: '1.18rem',
            letterSpacing: '-0.025em',
            textDecoration: 'none',
          }}
        >
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(13, 148, 136, 0.35)',
            }}
          >
            <Compass size={20} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ lineHeight: 1.15, fontWeight: 800 }}>Career Explorer</span>
            <span style={{ fontSize: '0.68rem', color: 'var(--secondary-accent)', fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              Top Careers in India
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '8px',
          }}
          className="desktop-nav"
        >
          {isAuthenticated && (
            <>
              <NavLink to="/careers" style={navLinkStyle}>
                Explore Careers
              </NavLink>
              <NavLink to="/categories" style={navLinkStyle}>
                Categories
              </NavLink>
              <NavLink to="/saved" style={navLinkStyle}>
                <Bookmark size={14} /> Saved
              </NavLink>
              <NavLink to="/progress" style={navLinkStyle}>
                <CheckSquare size={14} /> My Progress
              </NavLink>
            </>
          )}

          {isAdmin && (
            <NavLink
              to="/admin"
              style={({ isActive }) => ({
                ...navLinkStyle({ isActive }),
                color: 'var(--secondary-accent)',
                background: isActive ? 'var(--secondary-accent-subtle)' : 'transparent',
                borderColor: isActive ? 'var(--secondary-accent-border)' : 'transparent',
                fontWeight: 600,
              })}
            >
              <Shield size={14} /> Admin
            </NavLink>
          )}
        </div>

        {/* Desktop Controls: Theme Switcher & Auth Actions */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '12px',
          }}
          className="desktop-auth"
        >
          {/* Working Theme Switcher */}
          <ThemeToggle />

          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link
                to="/profile"
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                title="Account Settings"
              >
                <UserIcon size={14} />
                <span>{typeof user?.name === 'string' ? user.name.split(' ')[0] : 'Profile'}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-secondary btn-sm"
                title="Sign Out"
                style={{ color: 'var(--text-muted)' }}
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link to="/login" className="btn btn-secondary btn-sm">
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Get Started
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Controls (Theme Toggle & Hamburger) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="mobile-header-actions">
          <ThemeToggle className="mobile-theme-btn" />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              cursor: 'pointer',
              padding: '6px',
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-secondary)',
            borderTop: '1px solid var(--border-color)',
            padding: '16px 20px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
          className="mobile-drawer"
        >
          {isAuthenticated ? (
            <>
              <NavLink to="/careers" style={navLinkStyle} onClick={closeMobile}>
                Explore Careers
              </NavLink>
              <NavLink to="/categories" style={navLinkStyle} onClick={closeMobile}>
                Categories
              </NavLink>
              <NavLink to="/saved" style={navLinkStyle} onClick={closeMobile}>
                <Bookmark size={15} /> Saved Careers
              </NavLink>
              <NavLink to="/progress" style={navLinkStyle} onClick={closeMobile}>
                <CheckSquare size={15} /> My Progress
              </NavLink>
              <NavLink to="/profile" style={navLinkStyle} onClick={closeMobile}>
                <UserIcon size={15} /> Profile ({user?.name})
              </NavLink>
              {isAdmin && (
                <NavLink
                  to="/admin"
                  style={({ isActive }) => ({
                    ...navLinkStyle({ isActive }),
                    color: 'var(--accent)',
                    fontWeight: 600,
                  })}
                  onClick={closeMobile}
                >
                  <Shield size={15} /> Admin Portal
                </NavLink>
              )}
              <div style={{ paddingTop: '10px', borderTop: '1px solid var(--border-color)' }}>
                <button
                  onClick={handleLogout}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <LogOut size={14} /> Sign Out
                </button>
              </div>
            </>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <Link to="/login" className="btn btn-secondary btn-sm" style={{ justifyContent: 'center' }} onClick={closeMobile}>
                Sign In
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm" style={{ justifyContent: 'center' }} onClick={closeMobile}>
                Get Started
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Responsive media rules for Navbar */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .desktop-auth {
            display: flex !important;
          }
          .mobile-header-actions {
            display: none !important;
          }
          .mobile-toggle {
            display: none !important;
          }
          .mobile-drawer {
            display: none !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
