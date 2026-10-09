import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import roadmapService from '../../services/roadmapService';
import { CheckCircle2, Circle, Clock, ExternalLink, BookOpen } from 'lucide-react';

const RoadmapTimeline = ({ roadmap, userProgress, onProgressUpdate }) => {
  const { isAuthenticated } = useAuth();
  const [completedSteps, setCompletedSteps] = useState(userProgress?.completedSteps || []);
  const [loadingStep, setLoadingStep] = useState(null);

  if (!roadmap || !roadmap.steps || roadmap.steps.length === 0) {
    return (
      <div
        className="editorial-card"
        style={{
          padding: '32px 24px',
          textAlign: 'center',
          color: 'var(--text-muted, #71717a)',
          backgroundColor: '#ffffff',
          marginTop: '16px',
        }}
      >
        <p style={{ margin: 0, fontSize: '0.92rem' }}>
          No structured roadmap milestones have been published for this career path yet.
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

  return (
    <div style={{ marginTop: '20px' }}>
      {/* Overall Progress Banner for Authenticated User */}
      {isAuthenticated && (
        <div
          className="editorial-card"
          style={{
            padding: '20px 24px',
            marginBottom: '28px',
            backgroundColor: '#ffffff',
            border: '1px solid var(--border-color)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <div>
              <span
                style={{
                  fontWeight: 700,
                  color: 'var(--text-main, #18181b)',
                  fontSize: '0.95rem',
                }}
              >
                Your Learning Progress
              </span>
              <span
                style={{
                  display: 'block',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted, #71717a)',
                }}
              >
                Click step icons below to record completed milestones
              </span>
            </div>
            <span
              style={{
                fontWeight: 700,
                color: 'var(--text-main, #18181b)',
                fontSize: '1rem',
                fontVariantNumeric: 'tabular-nums',
              }}
            >
              {progressPercentage}% ({completedCount}/{totalSteps})
            </span>
          </div>

          <div
            style={{
              width: '100%',
              height: '6px',
              backgroundColor: 'var(--bg-subtle, #f4f4f5)',
              borderRadius: '3px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progressPercentage}%`,
                height: '100%',
                backgroundColor: 'var(--primary, #18181b)',
                transition: 'width 0.3s ease',
              }}
            />
          </div>
        </div>
      )}

      {/* Step Items Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {roadmap.steps.map((step) => {
          const isDone = completedSteps.includes(step.stepNumber);

          return (
            <div
              key={step._id || step.stepNumber}
              className="editorial-card"
              style={{
                padding: '24px',
                backgroundColor: isDone ? 'var(--bg-page, #fafaf9)' : '#ffffff',
                border: isDone ? '1px solid var(--border-dark, #d4d4d8)' : '1px solid var(--border-color, #e4e4e7)',
                transition: 'all 0.15s ease',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                {/* Step Toggle Action */}
                <button
                  onClick={() => handleToggleStep(step.stepNumber)}
                  disabled={!isAuthenticated || loadingStep === step.stepNumber}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: isAuthenticated ? 'pointer' : 'default',
                    color: isDone ? 'var(--success-text, #166534)' : 'var(--text-muted, #71717a)',
                    padding: '2px',
                    flexShrink: 0,
                    marginTop: '2px',
                  }}
                  title={
                    isAuthenticated
                      ? isDone
                        ? 'Mark as incomplete'
                        : 'Mark step completed'
                      : 'Log in to track milestone progress'
                  }
                  aria-label={`Step ${step.stepNumber}: ${step.title}`}
                >
                  {isDone ? (
                    <CheckCircle2 size={24} color="#166534" />
                  ) : (
                    <Circle size={24} color="#a1a1aa" />
                  )}
                </button>

                <div style={{ flex: 1 }}>
                  {/* Step Title & Time Estimate */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '8px',
                      marginBottom: '8px',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        color: isDone ? 'var(--text-body, #3f3f46)' : 'var(--text-main, #18181b)',
                        textDecoration: isDone ? 'line-through' : 'none',
                      }}
                    >
                      Step {step.stepNumber}: {step.title}
                    </h4>
                    {step.estimatedTime && (
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.78rem',
                          color: 'var(--text-muted, #71717a)',
                          backgroundColor: 'var(--bg-subtle, #f4f4f5)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                        }}
                      >
                        <Clock size={12} /> {step.estimatedTime}
                      </span>
                    )}
                  </div>

                  {/* Step Description */}
                  {step.description && (
                    <p
                      style={{
                        color: 'var(--text-body, #3f3f46)',
                        fontSize: '0.9rem',
                        marginBottom: '16px',
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </p>
                  )}

                  {/* Curated Resources */}
                  {step.resources && step.resources.length > 0 && (
                    <div
                      style={{
                        marginTop: '12px',
                        paddingTop: '12px',
                        borderTop: '1px solid var(--border-light, #f4f4f5)',
                      }}
                    >
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--text-muted, #71717a)',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em',
                          display: 'block',
                          marginBottom: '8px',
                        }}
                      >
                        Curated Learning Resources:
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
                              backgroundColor: '#ffffff',
                              border: '1px solid var(--border-color, #e4e4e7)',
                              padding: '5px 10px',
                              borderRadius: '6px',
                              fontSize: '0.8rem',
                              color: 'var(--text-main, #18181b)',
                              fontWeight: 500,
                            }}
                          >
                            <BookOpen size={13} color="var(--text-muted)" />
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
