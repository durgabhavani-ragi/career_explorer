import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import roadmapService from '../services/roadmapService';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { CheckSquare, ArrowRight, Award } from 'lucide-react';

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
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '10px', borderRadius: '12px', color: '#34d399' }}>
          <CheckSquare size={28} />
        </div>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc' }}>
            My Learning <span className="gradient-text-emerald">Progress</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2px' }}>
            Track your step-by-step milestone completions across career roadmaps.
          </p>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner message="Fetching your roadmap progress..." />
      ) : progressList.length === 0 ? (
        <EmptyState
          title="No Active Roadmap Progress"
          description="You haven't checked off any steps in career roadmaps yet. Visit any career detail page and click step checkboxes in the Learning Roadmap tab to track your milestone progress!"
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
              <div key={item._id} className="glass-card" style={{ padding: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: '#34d399', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {item.isCompleted ? 'Roadmap Completed!' : 'In Progress'}
                    </span>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc', marginTop: '4px' }}>
                      {career?.title || roadmap?.title || 'Career Roadmap'}
                    </h3>
                  </div>
                  {item.isCompleted && (
                    <Award size={28} color="#fbbf24" title="Completed" />
                  )}
                </div>

                {/* Progress Bar */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.88rem', marginBottom: '6px' }}>
                    <span style={{ color: '#94a3b8' }}>Milestones Completed</span>
                    <strong style={{ color: '#818cf8' }}>{percentage}% ({completedCount}/{totalSteps})</strong>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: 'rgba(51, 65, 85, 0.6)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div
                      style={{
                        width: `${percentage}%`,
                        height: '100%',
                        background: item.isCompleted ? '#10b981' : 'linear-gradient(90deg, #6366f1 0%, #34d399 100%)',
                        transition: 'width 0.4s ease',
                      }}
                    />
                  </div>
                </div>

                {career?.slug && (
                  <Link
                    to={`/careers/${career.slug}`}
                    className="btn btn-secondary btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Continue Roadmap</span>
                    <ArrowRight size={14} />
                  </Link>
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
