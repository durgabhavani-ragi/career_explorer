import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import careerService from '../services/careerService';
import roadmapService from '../services/roadmapService';
import { useAuth } from '../context/AuthContext';
import CareerCard from '../components/career/CareerCard';
import CareerFilter from '../components/career/CareerFilter';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Compass, Sparkles, Folder, ArrowRight, Bookmark, Filter, Layers, AlertCircle, RefreshCw } from 'lucide-react';

const CareersPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';

  const { isAuthenticated, user } = useAuth();
  const [careers, setCareers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [savedCareerIds, setSavedCareerIds] = useState(new Set());
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [selectedDemand, setSelectedDemand] = useState('');
  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'featured'
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Sync state if URL query parameters change
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
        const catList = Array.isArray(catRes?.data)
          ? catRes.data
          : Array.isArray(catRes?.data?.data)
          ? catRes.data.data
          : Array.isArray(catRes)
          ? catRes
          : [];
        setCategories(catList);

        if (isAuthenticated) {
          try {
            const savedRes = await roadmapService.getSavedCareers();
            const savedList = Array.isArray(savedRes?.data) ? savedRes.data : [];
            const ids = new Set(
              savedList
                .filter((item) => item && (item.career?._id || item.career))
                .map((item) => item.career?._id || item.career)
            );
            setSavedCareerIds(ids);
          } catch (e) {
            console.warn('Failed to load saved careers:', e.message);
          }
        }
      } catch (err) {
        console.error('Failed to load initial data:', err.message);
      }
    };

    fetchInitialData();
  }, [isAuthenticated]);

  // Fetch Careers
  const fetchCareers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await careerService.getCareers({
        search,
        category: selectedCategory,
      });

      const careerList = Array.isArray(res?.data)
        ? res.data
        : Array.isArray(res?.data?.data)
        ? res.data.data
        : Array.isArray(res)
        ? res
        : [];

      setCareers(careerList);
    } catch (err) {
      console.error('Failed to fetch careers:', err.message);
      setError(err.message || 'Unable to load careers from the server. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }, [search, selectedCategory]);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchCareers();
    }, 200);

    return () => clearTimeout(timer);
  }, [fetchCareers]);

  const handleReset = () => {
    setSearch('');
    setSelectedCategory('');
    setSelectedDemand('');
    setActiveTab('all');
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

  // Editorially selected featured careers representing cross-industry breadth
  const featuredSlugs = useMemo(
    () => new Set([
      'software-developer',
      'doctor',
      'civil-services-officer',
      'chartered-accountant',
      'renewable-energy-engineer',
      'data-scientist',
    ]),
    []
  );

  // Filter careers by demand and tab
  const displayedCareers = useMemo(() => {
    let list = Array.isArray(careers) ? careers : [];
    if (selectedDemand) {
      list = list.filter((c) =>
        (c?.marketDemand || c?.jobOutlook || '').toLowerCase().includes(selectedDemand.toLowerCase())
      );
    }
    if (activeTab === 'featured') {
      list = list.filter((c) => featuredSlugs.has(c?.slug));
    }
    return list;
  }, [careers, selectedDemand, activeTab, featuredSlugs]);

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px 64px 20px' }}>
      {/* Welcoming Platform Header */}
      <header
        className="editorial-card"
        style={{
          padding: '36px 32px',
          marginBottom: '28px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
          background: 'linear-gradient(135deg, var(--bg-surface) 0%, var(--bg-secondary) 100%)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '3px 10px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--accent-subtle)',
                color: 'var(--accent)',
                fontSize: '0.75rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '12px',
                border: '1px solid var(--accent-border)',
              }}
            >
              <Compass size={13} />
              Career Discovery Dashboard • Explore Career Opportunities
            </div>

            <h1
              style={{
                fontSize: 'clamp(1.85rem, 3.5vw, 2.5rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                letterSpacing: '-0.03em',
                lineHeight: 1.2,
                marginBottom: '8px',
              }}
            >
              Explore Important Careers in India
            </h1>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.96rem',
                maxWidth: '780px',
                lineHeight: 1.6,
              }}
            >
              Discover career pathways spanning software & AI, core engineering, healthcare, government services, banking & finance, creative design, and green energy. Includes realistic Indian salary breakdowns, verified eligibility criteria, and step-by-step roadmaps.
            </p>
          </div>

          {/* Quick Access Badges */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            <Link
              to="/categories"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <Folder size={14} color="var(--accent)" />
              <span>Browse Categories</span>
            </Link>
            {isAuthenticated && (
              <Link
                to="/saved"
                className="btn btn-secondary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <Bookmark size={14} color="var(--accent)" />
                <span>Saved ({savedCareerIds.size})</span>
              </Link>
            )}
          </div>
        </div>

        {/* Quick Category Badges Bar */}
        {categories.length > 0 && (
          <div
            style={{
              marginTop: '24px',
              paddingTop: '20px',
              borderTop: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              Quick Categories:
            </span>
            <button
              onClick={() => handleCategoryChange('')}
              style={{
                padding: '4px 10px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 600,
                backgroundColor: selectedCategory === '' ? 'var(--primary)' : 'var(--bg-subtle)',
                color: selectedCategory === '' ? '#ffffff' : 'var(--text-main)',
                border: '1px solid var(--border-color)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              Explore All Careers
            </button>
            {categories.map((cat) => (
              <button
                key={cat._id}
                onClick={() => handleCategoryChange(cat._id)}
                style={{
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  backgroundColor: selectedCategory === cat._id ? 'var(--primary)' : 'var(--bg-subtle)',
                  color: selectedCategory === cat._id ? '#ffffff' : 'var(--text-main)',
                  border: '1px solid var(--border-color)',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat.name}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* Filter Component */}
      <CareerFilter
        search={search}
        setSearch={handleSearchChange}
        selectedCategory={selectedCategory}
        setSelectedCategory={handleCategoryChange}
        selectedDemand={selectedDemand}
        setSelectedDemand={setSelectedDemand}
        categories={categories}
        onReset={handleReset}
      />

      {/* Tabs: Explore All Careers vs. Popular Careers */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex', gap: '8px' }}>
          <button
            onClick={() => setActiveTab('all')}
            className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          >
            Explore All Careers
          </button>
          <button
            onClick={() => setActiveTab('featured')}
            className={`btn ${activeTab === 'featured' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
          >
            <Sparkles size={13} />
            <span>Popular Careers</span>
          </button>
        </div>

        {/* Counter */}
        {!loading && !error && (
          <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
            Showing active career paths
            {(search || selectedCategory || selectedDemand) && (
              <span style={{ fontStyle: 'italic', marginLeft: '6px' }}>— active filter</span>
            )}
          </div>
        )}
      </div>

      {/* Featured Careers Editorial Notice */}
      {activeTab === 'featured' && (
        <div
          className="alert-success"
          style={{
            marginBottom: '20px',
            backgroundColor: 'var(--accent-subtle)',
            borderColor: 'var(--accent-border)',
            color: 'var(--text-main)',
            fontSize: '0.84rem',
            lineHeight: 1.5,
          }}
        >
          <Sparkles size={15} color="var(--accent)" style={{ flexShrink: 0 }} />
          <span>
            <strong>Editorial Selection:</strong> These highlighted careers represent prominent pathways across technology, public administration, medicine, finance, and engineering with robust opportunities in India.
          </span>
        </div>
      )}

      {/* Error state with Retry button */}
      {error && (
        <div
          className="alert-error"
          style={{
            marginBottom: '24px',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <AlertCircle size={18} style={{ flexShrink: 0 }} />
            <span>{error}</span>
          </div>
          <button
            onClick={fetchCareers}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <RefreshCw size={13} />
            <span>Retry</span>
          </button>
        </div>
      )}

      {/* Content Grid */}
      {loading ? (
        <LoadingSpinner message="Searching verified career records..." />
      ) : displayedCareers.length === 0 ? (
        <EmptyState
          title="No Matching Careers"
          description={
            search || selectedCategory || selectedDemand
              ? 'No career records matched your query or filters. Clear your filters to explore all careers.'
              : 'No active career records were found in the database.'
          }
          actionText="Explore All Careers"
          onAction={handleReset}
        />
      ) : (
        <div className="grid-3">
          {displayedCareers.map((career) => (
            <CareerCard
              key={career?._id || Math.random()}
              career={career}
              isSaved={savedCareerIds.has(career?._id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CareersPage;
