import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import roadmapService from '../../services/roadmapService';
import { CheckCircle2, Circle, Clock, ExternalLink, BookOpen, Lock } from 'lucide-react';

const RoadmapTimeline = ({ roadmap, userProgress, onProgressUpdate }) => {
  const { isAuthenticated } = useAuth();
  const [completedSteps, setCompletedSteps] = useState(userProgress?.completedSteps || []);
  const [loadingStep, setLoadingStep] = useState(null);

  if (!roadmap || !roadmap.steps || roadmap.steps.length === 0) {
    return (
      <div style={{ color: '#94a3b8', fontStyle: 'italic', padding: '20px 0' }}>
        No detailed roadmap steps available for this career yet.
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
    <div style={{ marginTop: '24px' }}>
      {/* Overall Progress Header */}
      {isAuthenticated && (
        <div className="glass-card" style={{ padding: '20px', marginBottom: '32px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <span style={{ fontWeight: 600, color: '#f8fafc', fontSize: '0.95rem' }}>Your Learning Progress</span>
            <span style={{ fontWeight: 700, color: '#818cf8', fontSize: '1.1rem' }}>
              {progressPercentage}% ({completedCount}/{totalSteps} Steps)
            </span>
          </div>
          <div style={{ width: '100%', height: '8px', background: 'rgba(51, 65, 85, 0.6)', borderRadius: '4px', overflow: 'hidden' }}>
            <div
              style={{
                width: `${progressPercentage}%`,
                height: '100%',
                background: 'linear-gradient(90deg, #6366f1 0%, #10b981 100%)',
                transition: 'width 0.4s ease',
              }}
            />
          </div>
        </div>
      )}

      {/* Step Items Timeline */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
        {roadmap.steps.map((step) => {
          const isDone = completedSteps.includes(step.stepNumber);

          return (
            <div
              key={step._id || step.stepNumber}
              className="glass-card"
              style={{
                padding: '24px',
                borderColor: isDone ? 'rgba(16, 185, 129, 0.4)' : 'var(--border-color)',
                background: isDone ? 'rgba(16, 185, 129, 0.05)' : 'var(--bg-glass)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                {/* Step Toggle Checkbox / Icon */}
                <button
                  onClick={() => handleToggleStep(step.stepNumber)}
                  disabled={!isAuthenticated || loadingStep === step.stepNumber}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: isAuthenticated ? 'pointer' : 'default',
                    color: isDone ? '#10b981' : '#64748b',
                    padding: '2px',
                    flexShrink: 0,
                  }}
                  title={isAuthenticated ? (isDone ? 'Mark as incomplete' : 'Mark step completed') : 'Log in to track progress'}
                >
                  {isDone ? (
                    <CheckCircle2 size={26} color="#10b981" />
                  ) : (
                    <Circle size={26} color="#64748b" />
                  )}
                </button>

                <div style={{ flex: 1 }}>
                  {/* Step Title & Time */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px', marginBottom: '8px' }}>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: isDone ? '#e2e8f0' : '#f8fafc' }}>
                      Step {step.stepNumber}: {step.title}
                    </h4>
                    {step.estimatedTime && (
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: '#94a3b8' }}>
                        <Clock size={14} /> {step.estimatedTime}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  {step.description && (
                    <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '16px', lineHeight: 1.6 }}>
                      {step.description}
                    </p>
                  )}

                  {/* Resources list */}
                  {step.resources && step.resources.length > 0 && (
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
                      <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'block', marginBottom: '8px' }}>
                        Recommended Learning Resources:
                      </span>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
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
                              background: 'rgba(30, 41, 59, 0.8)',
                              border: '1px solid rgba(255, 255, 255, 0.1)',
                              padding: '6px 12px',
                              borderRadius: '6px',
                              fontSize: '0.82rem',
                              color: '#cbd5e1',
                            }}
                          >
                            <BookOpen size={14} color="#a78bfa" />
                            <span>{res.title}</span>
                            {res.url && <ExternalLink size={12} color="#64748b" />}
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
