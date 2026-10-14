import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import roadmapService from '../services/roadmapService';
import CareerCard from '../components/career/CareerCard';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Bookmark, Compass } from 'lucide-react';

const SavedCareersPage = () => {
  const [savedItems, setSavedItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchSavedCareers = async () => {
    setLoading(true);
    try {
      const res = await roadmapService.getSavedCareers();
      if (res.success) {
        setSavedItems(res.data || []);
      }
    } catch (err) {
      console.error('Failed to fetch saved careers:', err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSavedCareers();
  }, []);

  const handleSaveToggle = (careerId) => {
    setSavedItems((prev) => prev.filter((item) => (item.career?._id || item.career) !== careerId));
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 64px 20px' }}>
      {/* Editorial Header */}
      <div style={{ marginBottom: '32px' }}>
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          User Dashboard
        </span>
        <h1
          style={{
            fontSize: '2.25rem',
            fontWeight: 800,
            color: 'var(--text-main)',
            marginTop: '4px',
            letterSpacing: '-0.03em',
          }}
        >
          Bookmarked Careers
        </h1>
        <p
          style={{
            color: 'var(--text-muted)',
            fontSize: '0.95rem',
            marginTop: '6px',
            maxWidth: '680px',
          }}
        >
          Review your bookmarked career profiles and learning pathways.
        </p>
      </div>

      {loading ? (
        <LoadingSpinner message="Fetching your saved careers..." />
      ) : savedItems.length === 0 ? (
        <EmptyState
          title="No Bookmarked Careers"
          description="You haven't bookmarked any careers yet. Browse the career directory and click 'Save' on any career profile to build your personalized reference list."
          actionText="Browse Career Directory"
          onAction={() => window.location.assign('/careers')}
        />
      ) : (
        <div className="grid-3">
          {savedItems.map((item) => {
            const career = item.career;
            if (!career) return null;
            return (
              <CareerCard
                key={item._id}
                career={career}
                isSaved={true}
                onSaveToggle={() => handleSaveToggle(career._id)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SavedCareersPage;
