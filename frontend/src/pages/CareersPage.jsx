import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import careerService from '../services/careerService';
import roadmapService from '../services/roadmapService';
import { useAuth } from '../context/AuthContext';
import CareerCard from '../components/career/CareerCard';
import CareerFilter from '../components/career/CareerFilter';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';

const CareersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';

  const { isAuthenticated } = useAuth();
  const [careers, setCareers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [savedCareerIds, setSavedCareerIds] = useState(new Set());
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(true);

  // Fetch Categories & Saved Careers on mount
  useEffect(() => {
    const fetchInitialData = async () => {
      try {
        const catRes = await careerService.getCategories();
        if (catRes.success) {
          setCategories(catRes.data || []);
        }

        if (isAuthenticated) {
          const savedRes = await roadmapService.getSavedCareers();
          if (savedRes.success && savedRes.data) {
            const ids = new Set(savedRes.data.map((item) => item.career?._id || item.career));
            setSavedCareerIds(ids);
          }
        }
      } catch (err) {
        console.error('Failed to load filter dependencies:', err.message);
      }
    };

    fetchInitialData();
  }, [isAuthenticated]);

  // Fetch Careers whenever search or selectedCategory changes
  useEffect(() => {
    const fetchCareers = async () => {
      setLoading(true);
      try {
        const res = await careerService.getCareers({
          search,
          category: selectedCategory,
        });
        if (res.success) {
          setCareers(res.data || []);
        }
      } catch (err) {
        console.error('Failed to fetch careers:', err.message);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search query
    const timer = setTimeout(() => {
      fetchCareers();
    }, 300);

    return () => clearTimeout(timer);
  }, [search, selectedCategory]);

  const handleReset = () => {
    setSearch('');
    setSelectedCategory('');
    setSearchParams({});
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc' }}>
          Explore <span className="gradient-text">Careers</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '6px' }}>
          Discover career paths, compare salary expectations, and find step-by-step learning roadmaps.
        </p>
      </div>

      {/* Filter Component */}
      <CareerFilter
        search={search}
        setSearch={setSearch}
        selectedCategory={selectedCategory}
        setSelectedCategory={(catId) => {
          setSelectedCategory(catId);
          if (catId) setSearchParams({ category: catId });
          else setSearchParams({});
        }}
        categories={categories}
        onReset={handleReset}
      />

      {/* Content Grid */}
      {loading ? (
        <LoadingSpinner message="Fetching careers from database..." />
      ) : careers.length === 0 ? (
        <EmptyState
          title="No Careers Found"
          description={
            search || selectedCategory
              ? 'No career paths match your filter criteria. Try resetting your search or category selection.'
              : 'The database currently contains no career records. Log in as an Admin to add careers.'
          }
          actionText={search || selectedCategory ? 'Reset Filters' : null}
          onAction={search || selectedCategory ? handleReset : null}
        />
      ) : (
        <div className="grid-3">
          {careers.map((career) => (
            <CareerCard
              key={career._id}
              career={career}
              isSaved={savedCareerIds.has(career._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CareersPage;
