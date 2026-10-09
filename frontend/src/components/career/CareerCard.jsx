import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../common/StatusBadge';
import SaveCareerButton from './SaveCareerButton';
import SalaryDisplay from '../common/SalaryDisplay';
import { getBriefDescription } from '../../utils/textUtils';
import { ArrowRight } from 'lucide-react';

const CareerCard = ({ career, isSaved = false, onSaveToggle }) => {
  if (!career) return null;

  const { _id, title, slug, description, category, skills, salaryRange, jobOutlook } = career;
  const briefDescription = getBriefDescription(description, 2);

  return (
    <article
      className="editorial-card"
      style={{
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#ffffff',
        border: '1px solid var(--border-color, #e4e4e7)',
        borderRadius: 'var(--radius-md, 8px)',
      }}
    >
      {/* Category & Outlook */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '10px',
        }}
      >
        <span
          style={{
            fontSize: '0.75rem',
            color: 'var(--text-muted, #71717a)',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          {category?.name || 'General'}
        </span>
        <StatusBadge text={jobOutlook} />
      </div>

      {/* Title */}
      <h3
        style={{
          fontSize: '1.15rem',
          fontWeight: 700,
          color: 'var(--text-main, #18181b)',
          marginBottom: '6px',
          lineHeight: 1.3,
        }}
      >
        <Link
          to={`/careers/${slug || _id}`}
          style={{ color: 'inherit', textDecoration: 'none' }}
        >
          {title}
        </Link>
      </h3>

      {/* Concise Description */}
      <p
        style={{
          color: 'var(--text-muted, #71717a)',
          fontSize: '0.86rem',
          marginBottom: '14px',
          flex: 1,
          lineHeight: 1.5,
        }}
      >
        {briefDescription}
      </p>

      {/* Salary in ₹ */}
      <div style={{ marginBottom: '14px' }}>
        <SalaryDisplay salaryRange={salaryRange} compact={true} />
      </div>

      {/* Skills Badges (Compact) */}
      {skills && skills.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '16px',
          }}
        >
          {skills.slice(0, 3).map((skill) => (
            <span key={skill._id || skill} className="skill-tag">
              {skill.name || skill}
            </span>
          ))}
          {skills.length > 3 && (
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted, #71717a)',
                alignSelf: 'center',
              }}
            >
              +{skills.length - 3}
            </span>
          )}
        </div>
      )}

      {/* Card Actions */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '14px',
          borderTop: '1px solid var(--border-light, #f4f4f5)',
          marginTop: 'auto',
        }}
      >
        <SaveCareerButton
          careerId={_id}
          isInitiallySaved={isSaved}
          onSaveToggle={onSaveToggle}
        />

        <Link
          to={`/careers/${slug || _id}`}
          className="btn btn-secondary btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
        >
          <span>View</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
};

export default CareerCard;
