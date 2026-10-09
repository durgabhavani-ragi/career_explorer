import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Compass, Bookmark, CheckSquare, Shield, LogOut, User as UserIcon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setMobileMenuOpen(false);
    navigate('/');
  };

  const closeMobile = () => setMobileMenuOpen(false);

  const navLinkStyle = ({ isActive }) => ({
    color: isActive ? 'var(--text-main, #18181b)' : 'var(--text-muted, #71717a)',
    fontWeight: isActive ? 600 : 500,
    fontSize: '0.9rem',
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 8px',
    borderRadius: '6px',
    background: isActive ? 'var(--bg-subtle, #f4f4f5)' : 'transparent',
    transition: 'all 0.15s ease',
  });

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid var(--border-color, #e4e4e7)',
        boxShadow: 'var(--shadow-xs, 0 1px 2px 0 rgba(0,0,0,0.04))',
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
            color: 'var(--text-main, #18181b)',
            fontWeight: 700,
            fontSize: '1.2rem',
            letterSpacing: '-0.025em',
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: 'var(--primary, #18181b)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Compass size={18} />
          </div>
          <span>Career Explorer</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '16px',
          }}
          className="desktop-nav"
        >
          <NavLink to="/careers" style={navLinkStyle}>
            Explore Careers
          </NavLink>
          <NavLink to="/categories" style={navLinkStyle}>
            Categories
          </NavLink>

          {isAuthenticated && (
            <>
              <NavLink to="/saved" style={navLinkStyle}>
                <Bookmark size={15} /> Saved
              </NavLink>
              <NavLink to="/progress" style={navLinkStyle}>
                <CheckSquare size={15} /> My Progress
              </NavLink>
            </>
          )}

          {isAdmin && (
            <NavLink
              to="/admin"
              style={({ isActive }) => ({
                ...navLinkStyle({ isActive }),
                color: isActive ? '#1e3a8a' : '#2563eb',
                background: isActive ? '#eff6ff' : 'transparent',
                fontWeight: 600,
              })}
            >
              <Shield size={15} /> Admin Portal
            </NavLink>
          )}
        </div>

        {/* Desktop Auth / User Controls */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '10px',
          }}
          className="desktop-auth"
        >
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link
                to="/profile"
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <UserIcon size={14} />
                <span>{user?.name || 'My Profile'}</span>
              </Link>
              <button
                onClick={handleLogout}
                className="btn btn-secondary btn-sm"
                title="Log Out"
                style={{ color: 'var(--text-muted)' }}
              >
                <LogOut size={14} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Link to="/login" className="btn btn-secondary btn-sm">
                Log In
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'none',
            border: 'none',
            color: 'var(--text-main, #18181b)',
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-toggle"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: '#ffffff',
            borderTop: '1px solid var(--border-color)',
            padding: '16px 20px 24px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
          className="mobile-drawer"
        >
          <NavLink to="/careers" style={navLinkStyle} onClick={closeMobile}>
            Explore Careers
          </NavLink>
          <NavLink to="/categories" style={navLinkStyle} onClick={closeMobile}>
            Categories
          </NavLink>

          {isAuthenticated && (
            <>
              <NavLink to="/saved" style={navLinkStyle} onClick={closeMobile}>
                <Bookmark size={16} /> Saved Careers
              </NavLink>
              <NavLink to="/progress" style={navLinkStyle} onClick={closeMobile}>
                <CheckSquare size={16} /> My Progress
              </NavLink>
              <NavLink to="/profile" style={navLinkStyle} onClick={closeMobile}>
                <UserIcon size={16} /> Profile ({user?.name})
              </NavLink>
            </>
          )}

          {isAdmin && (
            <NavLink
              to="/admin"
              style={({ isActive }) => ({
                ...navLinkStyle({ isActive }),
                color: '#2563eb',
                fontWeight: 600,
              })}
              onClick={closeMobile}
            >
              <Shield size={16} /> Admin Portal
            </NavLink>
          )}

          <div style={{ paddingTop: '12px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '8px' }}>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="btn btn-secondary btn-sm"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <LogOut size={14} /> Log Out
              </button>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary btn-sm" style={{ flex: 1 }} onClick={closeMobile}>
                  Log In
                </Link>
                <Link to="/register" className="btn btn-primary btn-sm" style={{ flex: 1 }} onClick={closeMobile}>
                  Register
                </Link>
              </>
            )}
          </div>
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
