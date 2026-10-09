import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div
      className="container animate-fade-in"
      style={{
        padding: '80px 24px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: 'rgba(99, 102, 241, 0.15)',
          padding: '20px',
          borderRadius: '20px',
          color: '#818cf8',
          marginBottom: '24px',
        }}
      >
        <Compass size={48} />
      </div>
      <h1 style={{ fontSize: '3rem', fontWeight: 800, color: '#f8fafc', marginBottom: '12px' }}>
        404 - Page Not Found
      </h1>
      <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '500px', marginBottom: '32px', lineHeight: 1.6 }}>
        The career page or resource you are looking for does not exist or may have been moved.
      </p>
      <Link to="/" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
        <Home size={18} /> Return to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
