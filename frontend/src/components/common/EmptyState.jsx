import React from 'react';
import { FolderOpen } from 'lucide-react';

const EmptyState = ({ title = 'No items found', description = 'The database collection is currently empty.', actionText, onAction }) => {
  return (
    <div
      className="glass-card"
      style={{
        textAlign: 'center',
        padding: '48px 24px',
        maxWidth: '500px',
        margin: '32px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'rgba(99, 102, 241, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          color: '#818cf8',
        }}
      >
        <FolderOpen size={32} />
      </div>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc', marginBottom: '8px' }}>
        {title}
      </h3>
      <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '24px', lineHeight: 1.5 }}>
        {description}
      </p>
      {actionText && onAction && (
        <button onClick={onAction} className="btn btn-primary btn-sm">
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
