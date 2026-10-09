import React from 'react';

const StatusBadge = ({ text, className = '' }) => {
  if (!text) return null;

  let badgeClass = 'badge-default';
  const lower = text.toLowerCase();

  if (lower.includes('high') || lower.includes('advanced')) {
    badgeClass = 'badge-emerald';
  } else if (lower.includes('admin')) {
    badgeClass = 'badge-purple';
  } else if (lower.includes('stable') || lower.includes('intermediate') || lower.includes('user')) {
    badgeClass = 'badge-blue';
  } else if (lower.includes('declin') || lower.includes('beginner')) {
    badgeClass = 'badge-amber';
  }

  return <span className={`badge ${badgeClass} ${className}`}>{text}</span>;
};

export default StatusBadge;
