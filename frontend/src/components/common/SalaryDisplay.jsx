import React from 'react';
import { formatSalaryRange } from '../../utils/formatSalary';

const SalaryDisplay = ({
  salaryRange,
  compact = false,
  className = '',
  style = {},
}) => {
  const { formattedText, hasValidSalary } = formatSalaryRange(salaryRange);

  if (!hasValidSalary) {
    return (
      <span
        className={`salary-display salary-undisclosed ${className}`}
        style={{
          color: 'var(--text-muted, #71717a)',
          fontSize: compact ? '0.85rem' : '0.95rem',
          fontStyle: 'italic',
          ...style,
        }}
      >
        Salary undisclosed
      </span>
    );
  }

  return (
    <span
      className={`salary-display ${className}`}
      style={{
        fontWeight: compact ? 600 : 700,
        fontSize: compact ? '0.88rem' : '1.1rem',
        color: 'var(--text-main, #18181b)',
        fontVariantNumeric: 'tabular-nums',
        letterSpacing: compact ? 'normal' : '-0.02em',
        display: 'inline-block',
        ...style,
      }}
    >
      {formattedText}
    </span>
  );
};

export default SalaryDisplay;
