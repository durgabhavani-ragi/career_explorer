import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = ({ className = '', style = {}, showLabel = false }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`btn-theme-toggle ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '6px',
        padding: showLabel ? '6px 12px' : '7px',
        borderRadius: 'var(--radius-md, 8px)',
        backgroundColor: 'var(--bg-subtle)',
        border: '1px solid var(--border-color)',
        color: 'var(--text-main)',
        cursor: 'pointer',
        transition: 'all 0.15s ease',
        fontSize: '0.82rem',
        fontWeight: 600,
        ...style,
      }}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun size={16} color="var(--primary)" />
      ) : (
        <Moon size={16} color="var(--primary)" />
      )}
      {showLabel && <span>{isDark ? 'Light' : 'Dark'}</span>}
    </button>
  );
};

export default ThemeToggle;
