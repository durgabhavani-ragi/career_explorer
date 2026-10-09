import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, ArrowRight } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div
      className="container animate-fade-in"
      style={{
        padding: '96px 20px',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '12px',
          backgroundColor: 'var(--bg-subtle, #f4f4f5)',
          color: 'var(--text-main, #18181b)',
          border: '1px solid var(--border-color, #e4e4e7)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}
      >
        <Compass size={28} />
      </div>

      <span
        style={{
          fontSize: '0.8rem',
          fontWeight: 700,
          color: 'var(--text-muted, #71717a)',
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
          marginBottom: '8px',
        }}
      >
        Error 404
      </span>

      <h1
        style={{
          fontSize: '2.25rem',
          fontWeight: 800,
          color: 'var(--text-main, #18181b)',
          marginBottom: '12px',
          letterSpacing: '-0.03em',
        }}
      >
        Page Not Located
      </h1>

      <p
        style={{
          color: 'var(--text-muted, #71717a)',
          fontSize: '0.95rem',
          maxWidth: '440px',
          marginBottom: '32px',
          lineHeight: 1.6,
        }}
      >
        The career resource or page you requested could not be found. It may have been moved or the URL might be mistyped.
      </p>

      <div style={{ display: 'flex', gap: '12px' }}>
        <Link
          to="/"
          className="btn btn-primary"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <span>Return Home</span>
          <ArrowRight size={14} />
        </Link>
        <Link to="/careers" className="btn btn-secondary">
          Career Directory
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
