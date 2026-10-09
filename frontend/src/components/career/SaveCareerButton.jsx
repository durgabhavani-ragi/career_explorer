import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import roadmapService from '../../services/roadmapService';
import { Bookmark } from 'lucide-react';

const SaveCareerButton = ({ careerId, isInitiallySaved = false, onSaveToggle }) => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [isSaved, setIsSaved] = useState(isInitiallySaved);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsSaved(isInitiallySaved);
  }, [isInitiallySaved]);

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
        gap: '5px',
        padding: '5px 10px',
        fontSize: '0.8rem',
      }}
      title={isSaved ? 'Remove from Saved' : 'Save Career'}
      aria-label={isSaved ? 'Remove from Saved' : 'Save Career'}
    >
      <Bookmark
        size={14}
        fill={isSaved ? 'currentColor' : 'none'}
        stroke="currentColor"
      />
      <span>{isSaved ? 'Saved' : 'Save'}</span>
    </button>
  );
};

export default SaveCareerButton;
