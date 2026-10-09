import React from 'react';
import { Compass } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        background: '#0b1120',
        padding: '40px 0 24px 0',
        marginTop: '80px',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontWeight: 800, fontSize: '1.2rem', color: '#fff' }}>
          <Compass size={20} color="#6366f1" />
          <span>CareerExplorer</span>
        </div>
        <p style={{ color: '#64748b', fontSize: '0.9rem', maxWidth: '500px' }}>
          Empowering your professional journey with structured roadmaps, skill insights, and personalized progress tracking.
        </p>
        <p style={{ color: '#475569', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Career Explorer. Powered by MongoDB Atlas & Express.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
