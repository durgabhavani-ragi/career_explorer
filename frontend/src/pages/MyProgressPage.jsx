import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import roadmapService from '../services/roadmapService';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { CheckSquare, ArrowRight, Award, Layers } from 'lucide-react';

const MyProgressPage = () => {
  const [progressList, setProgressList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProgress = async () => {
      try {
        const res = await roadmapService.getUserProgress();
        if (res.success) {
          setProgressList(res.data || []);
        }
      } catch (err) {
        console.error('Failed to load roadmap progress:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProgress();
  }, []);

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 64px 20px' }}>
      {/* Editorial Header */}
      <div style={{ marginBottom: '32px' }}>
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--text-muted, #71717a)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Learning Tracker
        </span>
        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: 'var(--text-main, #18181b)',
            marginTop: '4px',
            letterSpacing: '-0.03em',
          }}
        >
          My Roadmap Progress
        </h1>
        <p
          style={{
            color: 'var(--text-muted, #71717a)',
            fontSize: '0.95rem',
            marginTop: '6px',
            maxWidth: '680px',
          }}
        >
          Review your step-by-step milestone completions across career learning roadmaps.
        </p>
      </div>

      {loading ? (
        <LoadingSpinner message="Fetching your roadmap progress..." />
      ) : progressList.length === 0 ? (
        <EmptyState
          title="No Active Roadmap Progress"
          description="You haven't checked off any steps in career roadmaps yet. Visit any career detail page, open the Learning Roadmap tab, and mark completed steps to track your milestones."
          actionText="Explore Careers"
          onAction={() => window.location.assign('/careers')}
        />
      ) : (
        <div className="grid-2">
          {progressList.map((item) => {
            const roadmap = item.roadmap;
            const career = roadmap?.career;
            const totalSteps = roadmap?.steps?.length || 0;
            const completedCount = item.completedSteps?.length || 0;
            const percentage = totalSteps > 0 ? Math.round((completedCount / totalSteps) * 100) : 0;

            return (
              <div
                key={item._id}
                className="editorial-card"
                style={{
                  padding: '28px',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    marginBottom: '16px',
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: '0.78rem',
                        color: item.isCompleted ? 'var(--success-text, #166534)' : 'var(--text-muted, #71717a)',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {item.isCompleted ? 'Roadmap Completed' : 'In Progress'}
                    </span>
                    <h3
                      style={{
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        color: 'var(--text-main, #18181b)',
                        marginTop: '4px',
                      }}
                    >
                      {career?.title || roadmap?.title || 'Career Roadmap'}
                    </h3>
                  </div>

                  {item.isCompleted && (
                    <Award size={24} color="#166534" title="Roadmap Completed" />
                  )}
                </div>

                {/* Progress Bar & Counter */}
                <div style={{ marginBottom: '24px' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      marginBottom: '6px',
                    }}
                  >
                    <span style={{ color: 'var(--text-muted, #71717a)' }}>Milestones Completed</span>
                    <strong style={{ color: 'var(--text-main, #18181b)' }}>
                      {percentage}% ({completedCount}/{totalSteps})
                    </strong>
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
                        width: `${percentage}%`,
                        height: '100%',
                        backgroundColor: item.isCompleted ? 'var(--success-text, #166534)' : 'var(--primary, #18181b)',
                        transition: 'width 0.3s ease',
                      }}
                    />
                  </div>
                </div>

                {career?.slug && (
                  <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-light, #f4f4f5)' }}>
                    <Link
                      to={`/careers/${career.slug}`}
                      className="btn btn-secondary btn-sm"
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                    >
                      <span>Continue Roadmap</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyProgressPage;
