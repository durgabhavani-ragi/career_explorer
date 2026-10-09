import React from 'react';

const StatusBadge = ({ text, type = 'blue' }) => {
  if (!text) return null;

  let badgeClass = 'badge-blue';
  const lower = text.toLowerCase();

  if (lower.includes('high') || lower.includes('admin') || lower.includes('advanced')) {
    badgeClass = 'badge-purple';
  } else if (lower.includes('stable') || lower.includes('intermediate') || lower.includes('user')) {
    badgeClass = 'badge-emerald';
  } else if (lower.includes('declin') || lower.includes('beginner')) {
    badgeClass = 'badge-amber';
  }

  return <span className={`badge ${badgeClass}`}>{text}</span>;
};

export default StatusBadge;
