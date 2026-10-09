import React from 'react';
import { Link } from 'react-router-dom';
import StatusBadge from '../common/StatusBadge';
import SaveCareerButton from './SaveCareerButton';
import { DollarSign, ArrowRight, BookOpen } from 'lucide-react';

const CareerCard = ({ career, isSaved = false, onSaveToggle }) => {
  const { _id, title, slug, description, category, skills, salaryRange, jobOutlook } = career;

  const formatCurrency = (val) => {
    if (!val) return '0';
    return val.toLocaleString();
  };

  return (
    <div className="glass-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', height: '100%' }}>
      {/* Category & Outlook header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <span style={{ fontSize: '0.8rem', color: '#818cf8', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
          {category?.name || 'General'}
        </span>
        <StatusBadge text={jobOutlook} />
      </div>

      {/* Title */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
        <Link to={`/careers/${slug || _id}`} style={{ color: '#f8fafc' }}>
          {title}
        </Link>
      </h3>

      {/* Description preview */}
      <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '20px', flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden', lineHeight: 1.5 }}>
        {description}
      </p>

      {/* Salary Range */}
      {salaryRange && (salaryRange.min > 0 || salaryRange.max > 0) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#34d399', fontSize: '0.9rem', fontWeight: 600, marginBottom: '16px' }}>
          <DollarSign size={16} />
          <span>
            {salaryRange.currency || 'USD'} {formatCurrency(salaryRange.min)} - {formatCurrency(salaryRange.max)} / yr
          </span>
        </div>
      )}

      {/* Skills Badges */}
      {skills && skills.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
          {skills.slice(0, 4).map((skill) => (
            <span
              key={skill._id || skill}
              style={{
                background: 'rgba(51, 65, 85, 0.6)',
                color: '#cbd5e1',
                padding: '3px 8px',
                borderRadius: '6px',
                fontSize: '0.75rem',
              }}
            >
              {skill.name || 'Skill'}
            </span>
          ))}
          {skills.length > 4 && (
            <span style={{ color: '#64748b', fontSize: '0.75rem', alignSelf: 'center' }}>
              +{skills.length - 4} more
            </span>
          )}
        </div>
      )}

      {/* Card Actions */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
        <SaveCareerButton careerId={_id} isInitiallySaved={isSaved} onSaveToggle={onSaveToggle} />
        
        <Link
          to={`/careers/${slug || _id}`}
          className="btn btn-secondary btn-sm"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
        >
          <span>View Details</span>
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;
