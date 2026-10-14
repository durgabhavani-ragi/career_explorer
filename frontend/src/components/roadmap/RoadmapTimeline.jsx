import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import roadmapService from '../../services/roadmapService';
import { 
  CheckCircle2, 
  Circle, 
  Clock, 
  ExternalLink, 
  BookOpen, 
  Layers, 
  Check, 
  Award, 
  ListChecks,
  AlertCircle
} from 'lucide-react';

const RoadmapTimeline = ({ roadmap, userProgress, onProgressUpdate }) => {
  const { isAuthenticated } = useAuth();
  const [completedSteps, setCompletedSteps] = useState(userProgress?.completedSteps || []);
  const [loadingStep, setLoadingStep] = useState(null);

  if (!roadmap || !roadmap.steps || roadmap.steps.length === 0) {
    return (
      <div
        className="editorial-card"
        style={{
          padding: '36px 24px',
          textAlign: 'center',
          color: 'var(--text-muted)',
          backgroundColor: 'var(--bg-surface)',
          marginTop: '16px',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
        }}
      >
        <AlertCircle size={28} style={{ color: 'var(--warning-text)', margin: '0 auto 12px auto' }} />
        <h4 style={{ color: 'var(--text-main)', fontSize: '1rem', fontWeight: 600, marginBottom: '6px' }}>
          Roadmap In Preparation
        </h4>
        <p style={{ margin: 0, fontSize: '0.88rem' }}>
          The structured job-preparation roadmap for this career is currently being reviewed for curriculum accuracy.
        </p>
      </div>
    );
  }

  const handleToggleStep = async (stepNumber) => {
    if (!isAuthenticated) return;

    setLoadingStep(stepNumber);
    try {
      const res = await roadmapService.toggleStepProgress(roadmap._id, stepNumber);
      if (res.success && res.data) {
        setCompletedSteps(res.data.completedSteps || []);
        if (onProgressUpdate) {
          onProgressUpdate(res.data);
        }
      }
    } catch (err) {
      console.error('Failed to update step progress:', err.message);
    } finally {
      setLoadingStep(null);
    }
  };

  const totalSteps = roadmap.steps.length;
  const completedCount = completedSteps.length;
  const progressPercentage = Math.round((completedCount / totalSteps) * 100);

  // Format step duration strictly in months
  const formatStepDuration = (step) => {
    if (step.durationMonths && typeof step.durationMonths === 'number') {
      return `${step.durationMonths} ${step.durationMonths === 1 ? 'month' : 'months'}`;
    }
    if (step.durationText && !step.durationText.toLowerCase().includes('year')) {
      return step.durationText;
    }
    if (step.estimatedTime && !step.estimatedTime.toLowerCase().includes('year')) {
      return step.estimatedTime;
    }
    return '1–2 months';
  };

  // Format total roadmap duration in months
  const totalDurationDisplay = roadmap.totalDurationFormatted && !roadmap.totalDurationFormatted.toLowerCase().includes('year')
    ? roadmap.totalDurationFormatted
    : roadmap.totalDurationMonths
      ? `${roadmap.totalDurationMonths} ${roadmap.totalDurationMonths === 1 ? 'month' : 'months'}`
      : '3–6 months';

  const getCategoryLabel = (category, stageType) => {
    const cat = (category || stageType || '').toLowerCase();
    if (cat.includes('fund') || cat.includes('found')) return 'Fundamentals';
    if (cat.includes('exam')) return 'Examination Prep';
    if (cat.includes('pract') || cat.includes('train')) return 'Hands-On Practice';
    if (cat.includes('port') || cat.includes('proj')) return 'Portfolio Building';
    if (cat.includes('inter') || cat.includes('job') || cat.includes('recruit')) return 'Job & Interview Prep';
    if (cat.includes('cert') || cat.includes('licen')) return 'Certification Prep';
    return 'Skill Development';
  };

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Duration & Progress Card */}
      <div
        className="editorial-card"
        style={{
          padding: '24px 28px',
          marginBottom: '28px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '14px',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
              <Layers size={18} color="var(--primary)" />
              <span
                style={{
                  fontWeight: 700,
                  color: 'var(--text-main)',
                  fontSize: '1.05rem',
                }}
              >
                Practical Job Preparation Plan
              </span>
            </div>
            <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)' }}>
              Total Preparation Duration: <strong style={{ color: 'var(--secondary-accent)' }}>{totalDurationDisplay}</strong> (Post-Qualification)
            </span>
          </div>

          {isAuthenticated ? (
            <span
              style={{
                fontWeight: 700,
                color: progressPercentage === 100 ? 'var(--success-text)' : 'var(--text-main)',
                fontSize: '0.92rem',
                fontVariantNumeric: 'tabular-nums',
                backgroundColor: 'var(--bg-subtle)',
                padding: '5px 14px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {progressPercentage === 100 ? <Check size={14} color="var(--success-text)" /> : null}
              {progressPercentage}% Completed ({completedCount}/{totalSteps} steps)
            </span>
          ) : (
            <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
              Sign in to record step completion
            </span>
          )}
        </div>

        {/* Progress bar */}
        {isAuthenticated && (
          <div
            style={{
              width: '100%',
              height: '8px',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: '4px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPercentage}%`,
                height: '100%',
                backgroundColor: progressPercentage === 100 ? 'var(--success-text)' : 'var(--primary)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        )}
      </div>

      {/* Step Items Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
        {roadmap.steps.map((step) => {
          const isDone = completedSteps.includes(step.stepNumber);
          const stepTasks = Array.isArray(step.tasks) && step.tasks.length > 0 
            ? step.tasks 
            : (Array.isArray(step.activities) ? step.activities : []);
          const stepMilestone = step.milestone || step.completionCriteria;
          const stepPrereqs = Array.isArray(step.prerequisites) && step.prerequisites.length > 0
            ? step.prerequisites
            : (step.dependencies ? [step.dependencies] : []);

          return (
            <div
              key={step._id || step.stepNumber}
              className="editorial-card"
              style={{
                padding: '24px 28px',
                backgroundColor: isDone ? 'var(--bg-subtle)' : 'var(--bg-surface)',
                border: isDone ? '1px solid var(--success-border)' : '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg, 12px)',
                transition: 'all 0.15s ease',
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '18px' }}>
                {/* Step Toggle Action */}
                <button
                  onClick={() => handleToggleStep(step.stepNumber)}
                  disabled={!isAuthenticated || loadingStep === step.stepNumber}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: isAuthenticated ? 'pointer' : 'default',
                    color: isDone ? 'var(--success-text)' : 'var(--text-subtle)',
                    padding: '2px',
                    flexShrink: 0,
                    marginTop: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                  title={
                    isAuthenticated
                      ? isDone
                        ? 'Mark step incomplete'
                        : 'Mark step completed'
                      : 'Sign in to record milestone progress'
                  }
                  aria-label={`Step ${step.stepNumber}: ${step.title}`}
                >
                  {isDone ? (
                    <CheckCircle2 size={26} color="var(--success-text)" />
                  ) : (
                    <Circle size={26} color="var(--border-dark)" />
                  )}
                </button>

                <div style={{ flex: 1 }}>
                  {/* Step Meta (Step Number, Category Tag, Duration) */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      marginBottom: '10px',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          color: 'var(--primary)',
                          backgroundColor: 'var(--primary-subtle)',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          border: '1px solid var(--primary-border)',
                        }}
                      >
                        Step {step.stepNumber}
                      </span>
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 600,
                          color: 'var(--secondary-accent)',
                          backgroundColor: 'var(--secondary-accent-subtle)',
                          padding: '3px 10px',
                          borderRadius: '6px',
                          border: '1px solid var(--secondary-accent-border)',
                        }}
                      >
                        {getCategoryLabel(step.category, step.stageType)}
                      </span>
                    </div>

                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--text-main)',
                        backgroundColor: 'var(--bg-subtle)',
                        padding: '3px 10px',
                        borderRadius: '6px',
                        border: '1px solid var(--border-color)',
                      }}
                    >
                      <Clock size={13} color="var(--secondary-accent)" /> {formatStepDuration(step)}
                    </span>
                  </div>

                  {/* Title */}
                  <h4
                    style={{
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: isDone ? 'var(--text-body)' : 'var(--text-main)',
                      textDecoration: isDone ? 'line-through' : 'none',
                      marginBottom: '8px',
                      lineHeight: 1.35,
                    }}
                  >
                    {step.title}
                  </h4>

                  {/* Description */}
                  {step.description && (
                    <p
                      style={{
                        color: 'var(--text-body)',
                        fontSize: '0.92rem',
                        marginBottom: '16px',
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </p>
                  )}

                  {/* Practical Tasks Checklist */}
                  {stepTasks.length > 0 && (
                    <div style={{ marginBottom: '16px' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '0.78rem',
                          fontWeight: 700,
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          marginBottom: '8px',
                        }}
                      >
                        <ListChecks size={14} color="var(--secondary-accent)" />
                        <span>Practical Learning Activities:</span>
                      </div>
                      <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {stepTasks.map((task, taskIdx) => (
                          <li
                            key={taskIdx}
                            style={{
                              fontSize: '0.88rem',
                              color: 'var(--text-body)',
                              lineHeight: 1.5,
                            }}
                          >
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Completion Milestone */}
                  {stepMilestone && (
                    <div
                      style={{
                        marginBottom: '16px',
                        padding: '12px 16px',
                        backgroundColor: 'var(--bg-subtle)',
                        borderRadius: 'var(--radius-sm, 8px)',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                      }}
                    >
                      <Award size={18} color="var(--success-text)" style={{ flexShrink: 0, marginTop: '2px' }} />
                      <div>
                        <strong style={{ color: 'var(--text-main)', display: 'block', fontSize: '0.85rem', marginBottom: '2px' }}>
                          Completion Milestone:
                        </strong>
                        <span style={{ color: 'var(--text-body)', fontSize: '0.86rem', lineHeight: 1.5 }}>
                          {stepMilestone}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Prerequisites */}
                  {stepPrereqs.length > 0 && stepPrereqs.some(p => p && p.trim()) && (
                    <div
                      style={{
                        marginBottom: '14px',
                        fontSize: '0.82rem',
                        color: 'var(--text-muted)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <strong style={{ color: 'var(--warning-text)' }}>Prerequisite:</strong>
                      <span>{stepPrereqs.filter(Boolean).join(', ')}</span>
                    </div>
                  )}

                  {/* Curated Resources */}
                  {step.resources && step.resources.length > 0 && (
                    <div
                      style={{
                        marginTop: '14px',
                        paddingTop: '14px',
                        borderTop: '1px solid var(--border-light)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          color: 'var(--text-muted)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          display: 'block',
                          marginBottom: '8px',
                        }}
                      >
                        Verified Learning & Reference Resources:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {step.resources.map((res, idx) => (
                          <a
                            key={idx}
                            href={res.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '6px',
                              backgroundColor: 'var(--bg-subtle)',
                              border: '1px solid var(--border-color)',
                              padding: '6px 12px',
                              borderRadius: '6px',
                              fontSize: '0.82rem',
                              color: 'var(--text-main)',
                              fontWeight: 500,
                              textDecoration: 'none',
                              transition: 'all 0.15s ease',
                            }}
                          >
                            <BookOpen size={13} color="var(--primary)" />
                            <span>{res.title}</span>
                            {res.url && <ExternalLink size={11} color="var(--text-muted)" />}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
