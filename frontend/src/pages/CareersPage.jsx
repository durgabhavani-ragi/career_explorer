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
  const initialSearch = searchParams.get('search') || '';

  const { isAuthenticated } = useAuth();
  const [careers, setCareers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [savedCareerIds, setSavedCareerIds] = useState(new Set());
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [loading, setLoading] = useState(true);

  // Sync state if URL query parameters change (e.g. from homepage search or category link)
  useEffect(() => {
    const urlCat = searchParams.get('category') || '';
    const urlSearch = searchParams.get('search') || '';
    if (urlCat !== selectedCategory) setSelectedCategory(urlCat);
    if (urlSearch !== search) setSearch(urlSearch);
  }, [searchParams]);

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
        console.error('Failed to load initial data:', err.message);
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
    }, 250);

    return () => clearTimeout(timer);
  }, [search, selectedCategory]);

  const handleReset = () => {
    setSearch('');
    setSelectedCategory('');
    setSearchParams({});
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    const newParams = {};
    if (catId) newParams.category = catId;
    if (search) newParams.search = search;
    setSearchParams(newParams);
  };

  const handleSearchChange = (term) => {
    setSearch(term);
    const newParams = {};
    if (selectedCategory) newParams.category = selectedCategory;
    if (term) newParams.search = term;
    setSearchParams(newParams);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 64px 20px' }}>
      {/* Editorial Header */}
      <div style={{ marginBottom: '28px' }}>
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--text-muted, #71717a)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Career Directory
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
          Explore Professional Careers
        </h1>
        <p
          style={{
            color: 'var(--text-muted, #71717a)',
            fontSize: '0.95rem',
            marginTop: '6px',
            maxWidth: '680px',
          }}
        >
          Browse career profiles, essential competencies, domain subjects, and structured learning roadmaps.
        </p>
      </div>

      {/* Filter Component */}
      <CareerFilter
        search={search}
        setSearch={handleSearchChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        categories={categories}
        onReset={handleReset}
      />

      {/* Career Results Counter */}
      {!loading && careers.length > 0 && (
        <div
          style={{
            marginBottom: '18px',
            fontSize: '0.85rem',
            color: 'var(--text-muted, #71717a)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span>Showing <strong>{careers.length}</strong> {careers.length === 1 ? 'career profile' : 'career profiles'}</span>
          {(search || selectedCategory) && (
            <span style={{ fontStyle: 'italic' }}>Filtered view</span>
          )}
        </div>
      )}

      {/* Content Grid */}
      {loading ? (
        <LoadingSpinner message="Searching career records..." />
      ) : careers.length === 0 ? (
        <EmptyState
          title="No Careers Found"
          description={
            search || selectedCategory
              ? 'No career profiles match the active search or category filters. Try clearing your search or selecting another category.'
              : 'The database currently contains no career records.'
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
