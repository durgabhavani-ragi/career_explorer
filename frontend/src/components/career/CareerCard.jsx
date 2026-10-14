import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../common/StatusBadge';
import SaveCareerButton from './SaveCareerButton';
import SalaryDisplay from '../common/SalaryDisplay';
import { getBriefDescription, getTimelineDurationText } from '../../utils/textUtils';
import { getSalaryByExperienceDisplay } from '../../utils/formatSalary';
import { ArrowRight, IndianRupee, Layers } from 'lucide-react';

const CareerCard = ({ career, isSaved = false, onSaveToggle }) => {
  if (!career || typeof career !== 'object') return null;

  const {
    _id,
    title = 'Untitled Career',
    slug,
    description = '',
    category,
    skills = [],
    salaryRange,
    salaryByExperience,
    jobOutlook,
    marketDemand,
    timelineOverview,
  } = career;

  const briefDescription = getBriefDescription(description, 2);

  // Safely get Indian salary string in LPA or Rupee range
  const salaryDisplayObj = getSalaryByExperienceDisplay(salaryByExperience, salaryRange);

  // Safely extract timeline text without crashing on object vs string
  const timelineDuration = getTimelineDurationText(timelineOverview);
  const displayTimeline = timelineDuration
    ? timelineDuration.split('+')[0]?.trim() || timelineDuration
    : null;

  return (
    <article
      className="editorial-card"
      style={{
        padding: '22px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--border-color)',
        borderRadius: 'var(--radius-lg, 14px)',
        position: 'relative',
      }}
    >
      {/* Category Tag & Demand Outlook */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '12px',
        }}
      >
        <span
          style={{
            fontSize: '0.74rem',
            color: 'var(--accent)',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
            backgroundColor: 'var(--accent-subtle)',
            padding: '2px 8px',
            borderRadius: 'var(--radius-sm, 6px)',
            border: '1px solid var(--accent-border)',
          }}
        >
          {category?.name || 'General'}
        </span>
        <StatusBadge text={marketDemand ? `${marketDemand} Demand` : jobOutlook} />
      </div>

      {/* Career Title */}
      <h3
        style={{
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          marginBottom: '8px',
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
          color: 'var(--text-muted)',
          fontSize: '0.86rem',
          marginBottom: '16px',
          flex: 1,
          lineHeight: 1.55,
        }}
      >
        {briefDescription}
      </p>

      {/* Salary & Timeline Badge */}
      <div
        style={{
          marginBottom: '14px',
          padding: '10px 12px',
          backgroundColor: 'var(--bg-subtle)',
          borderRadius: 'var(--radius-sm, 6px)',
          border: '1px solid var(--border-light)',
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 600 }}>
            Estimated Indian CTC
          </span>
          {displayTimeline && (
            <span style={{ fontSize: '0.72rem', color: 'var(--text-subtle)' }} title={timelineDuration}>
              {displayTimeline}
            </span>
          )}
        </div>
        <div>
          {salaryDisplayObj.hasValidSalary ? (
            <span style={{ fontWeight: 700, fontSize: '0.98rem', color: 'var(--text-main)' }}>
              {salaryDisplayObj.formattedText}
            </span>
          ) : (
            <SalaryDisplay salaryRange={salaryRange} compact={true} />
          )}
        </div>
      </div>

      {/* Key Skills Badges */}
      {Array.isArray(skills) && skills.length > 0 && (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '16px',
          }}
        >
          {skills.slice(0, 3).map((skill) => (
            <span key={skill?._id || skill} className="skill-tag">
              {skill?.name || (typeof skill === 'string' ? skill : 'Skill')}
            </span>
          ))}
          {skills.length > 3 && (
            <span
              style={{
                fontSize: '0.72rem',
                color: 'var(--text-muted)',
                alignSelf: 'center',
                padding: '2px 4px',
              }}
            >
              +{skills.length - 3} more
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
          borderTop: '1px solid var(--border-light)',
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
          className="btn btn-primary btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
        >
          <span>View Roadmap</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </article>
  );
};

export default CareerCard;
