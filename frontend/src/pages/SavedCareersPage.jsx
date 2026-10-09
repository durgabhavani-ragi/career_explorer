import React, { useState, useEffect } from 'react';
import roadmapService from '../services/roadmapService';
import CareerCard from '../components/career/CareerCard';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Bookmark } from 'lucide-react';

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
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '10px', borderRadius: '12px', color: '#818cf8' }}>
          <Bookmark size={28} />
        </div>
        <div>
          <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc' }}>
            Saved <span className="gradient-text">Careers</span>
          </h1>
          <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '2px' }}>
            Your bookmarked career paths stored securely in your MongoDB profile.
          </p>
        </div>
      </div>

      {loading ? (
        <LoadingSpinner message="Fetching your saved careers..." />
      ) : savedItems.length === 0 ? (
        <EmptyState
          title="No Saved Careers Yet"
          description="You haven't bookmarked any careers. Browse the Career Explorer directory and click 'Save' on any career path you're interested in!"
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
