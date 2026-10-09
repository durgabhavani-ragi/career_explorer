import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import roadmapService from '../../services/roadmapService';
import { Bookmark } from 'lucide-react';

const SaveCareerButton = ({ careerId, isInitiallySaved = false, onSaveToggle }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(isInitiallySaved);
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isAuthenticated) {
      navigate('/login');
      return;
    }

    setLoading(true);
    try {
      if (isSaved) {
        await roadmapService.removeSavedCareer(careerId);
        setIsSaved(false);
      } else {
        await roadmapService.saveCareer(careerId);
        setIsSaved(true);
      }
      if (onSaveToggle) {
        onSaveToggle(!isSaved);
      }
    } catch (err) {
      console.error('Failed to toggle saved career:', err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className={`btn ${isSaved ? 'btn-primary' : 'btn-secondary'} btn-sm`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        borderRadius: '8px',
      }}
      title={isSaved ? 'Remove from Saved' : 'Save Career'}
    >
      <Bookmark size={16} fill={isSaved ? '#fff' : 'none'} />
      <span>{isSaved ? 'Saved' : 'Save'}</span>
    </button>
  );
};

export default SaveCareerButton;
