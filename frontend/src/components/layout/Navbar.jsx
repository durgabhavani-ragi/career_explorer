import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Compass, Bookmark, CheckSquare, Shield, LogOut, User as UserIcon, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(15, 23, 42, 0.85)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        padding: '16px 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '1.35rem', color: '#fff' }}>
          <div style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)', padding: '8px', borderRadius: '10px', display: 'flex' }}>
            <Compass size={24} color="#fff" />
          </div>
          <span>Career<span className="gradient-text">Explorer</span></span>
        </Link>

        {/* Desktop Navigation Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <Link to="/careers" style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '0.95rem' }}>
            Explore Careers
          </Link>
          <Link to="/categories" style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '0.95rem' }}>
            Categories
          </Link>

          {isAuthenticated && (
            <>
              <Link to="/saved" style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Bookmark size={16} /> Saved
              </Link>
              <Link to="/progress" style={{ color: '#cbd5e1', fontWeight: 500, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <CheckSquare size={16} /> My Progress
              </Link>
            </>
          )}

          {isAdmin && (
            <Link to="/admin" style={{ color: '#a78bfa', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={16} /> Admin Portal
            </Link>
          )}
        </div>

        {/* User / Auth Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {isAuthenticated ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link
                to="/profile"
                className="btn btn-secondary btn-sm"
                style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
              >
                <UserIcon size={16} /> {user.name}
              </Link>
              <button onClick={handleLogout} className="btn btn-danger btn-sm" title="Log Out">
                <LogOut size={16} />
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Link to="/login" className="btn btn-secondary btn-sm">
                Log In
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
