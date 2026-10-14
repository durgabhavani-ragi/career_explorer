import React from 'react';
import { FolderOpen } from 'lucide-react';

const EmptyState = ({
  title = 'No items found',
  description = 'No records match the current criteria in the database.',
  actionText,
  onAction,
}) => {
  return (
    <div
      className="editorial-card"
      style={{
        textAlign: 'center',
        padding: '56px 24px',
        maxWidth: '480px',
        margin: '32px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '10px',
          backgroundColor: 'var(--bg-subtle)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '16px',
          color: 'var(--text-muted)',
        }}
      >
        <FolderOpen size={24} />
      </div>
      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          marginBottom: '8px',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: 'var(--text-muted)',
          fontSize: '0.9rem',
          marginBottom: actionText && onAction ? '20px' : '0',
          lineHeight: 1.5,
          maxWidth: '380px',
        }}
      >
        {description}
      </p>
      {actionText && onAction && (
        <button onClick={onAction} className="btn btn-secondary btn-sm">
          {actionText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;
