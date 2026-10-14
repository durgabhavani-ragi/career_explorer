import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import careerService from '../services/careerService';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import {
  Folder,
  ArrowRight,
  Code,
  HeartPulse,
  Wrench,
  Landmark,
  Calculator,
  Palette,
  GraduationCap,
  Microscope,
  Briefcase,
  Compass,
  AlertCircle,
  RefreshCw,
} from 'lucide-react';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [careerCounts, setCareerCounts] = useState({});
  const [totalCareers, setTotalCareers] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCategoryData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [catRes, carRes] = await Promise.allSettled([
        careerService.getCategories(),
        careerService.getCareers(),
      ]);

      if (catRes.status === 'fulfilled' && catRes.value?.success) {
        const catList = Array.isArray(catRes.value.data)
          ? catRes.value.data
          : Array.isArray(catRes.value.data?.data)
          ? catRes.value.data.data
          : [];
        setCategories(catList);
      } else {
        throw new Error('Failed to load categories list.');
      }

      if (carRes.status === 'fulfilled' && carRes.value?.success) {
        const careers = Array.isArray(carRes.value.data)
          ? carRes.value.data
          : Array.isArray(carRes.value.data?.data)
          ? carRes.value.data.data
          : [];

        setTotalCareers(careers.length);
        const counts = {};
        careers.forEach((c) => {
          if (!c) return;
          const catId = c.category?._id || c.category;
          if (catId) {
            const key = String(catId);
            counts[key] = (counts[key] || 0) + 1;
          }
        });
        setCareerCounts(counts);
      }
    } catch (err) {
      console.error('Failed to load categories:', err.message);
      setError(err.message || 'Unable to fetch category records from the database.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCategoryData();
  }, [fetchCategoryData]);

  // Icon assignment based on category name
  const getCategoryIcon = (name = '') => {
    const lower = name.toLowerCase();
    if (lower.includes('tech') || lower.includes('software')) return <Code size={22} />;
    if (lower.includes('health') || lower.includes('medic')) return <HeartPulse size={22} />;
    if (lower.includes('engineer')) return <Wrench size={22} />;
    if (lower.includes('gov') || lower.includes('public')) return <Landmark size={22} />;
    if (lower.includes('business') || lower.includes('finance')) return <Calculator size={22} />;
    if (lower.includes('art') || lower.includes('design')) return <Palette size={22} />;
    if (lower.includes('education') || lower.includes('teach')) return <GraduationCap size={22} />;
    if (lower.includes('science') || lower.includes('research')) return <Microscope size={22} />;
    return <Briefcase size={22} />;
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px 64px 20px' }}>
      {/* Editorial Header */}
      <div
        className="editorial-card"
        style={{
          padding: '36px 32px',
          marginBottom: '32px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
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
                marginBottom: '10px',
                border: '1px solid var(--accent-border)',
              }}
            >
              <Compass size={13} />
              Industry Directory
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
              Explore by Industry Sector
            </h1>

            <p
              style={{
                color: 'var(--text-muted)',
                fontSize: '0.96rem',
                maxWidth: '740px',
                lineHeight: 1.6,
              }}
            >
              Discover career paths organized across key economic sectors in India. Explore structured milestones, required qualifications, and in-demand skills.
            </p>
          </div>

          <div
            style={{
              padding: '12px 20px',
              backgroundColor: 'var(--bg-subtle)',
              borderRadius: 'var(--radius-md, 8px)',
              border: '1px solid var(--border-color)',
              textAlign: 'center',
            }}
          >
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>
              Directory
            </span>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent)' }}>
              Explore Careers
            </div>
          </div>
        </div>
      </div>

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
            onClick={fetchCategoryData}
            className="btn btn-secondary btn-sm"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            <RefreshCw size={13} />
            <span>Retry</span>
          </button>
        </div>
      )}

      {loading ? (
        <LoadingSpinner message="Loading industry sectors..." />
      ) : categories.length === 0 ? (
        <EmptyState
          title="No Categories Available"
          description="There are currently no categories stored in the database."
        />
      ) : (
        <div className="grid-3">
          {categories.map((cat) => {
            const count = careerCounts[String(cat._id)] || 0;

            return (
              <div
                key={cat._id}
                className="editorial-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-lg, 12px)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px',
                  }}
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      backgroundColor: 'var(--accent-subtle)',
                      color: 'var(--accent)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--accent-border)',
                    }}
                  >
                    {getCategoryIcon(cat.name)}
                  </div>

                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '4px 10px',
                      borderRadius: 'var(--radius-full)',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    Career Opportunities
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '8px',
                  }}
                >
                  <Link
                    to={`/careers?category=${cat._id}`}
                    style={{ color: 'inherit', textDecoration: 'none' }}
                  >
                    {cat.name}
                  </Link>
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted)',
                    fontSize: '0.88rem',
                    marginBottom: '24px',
                    flex: 1,
                    lineHeight: 1.55,
                  }}
                >
                  {cat.description || 'Explore specialized career profiles and skill roadmaps within this industry sector.'}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                  <Link
                    to={`/careers?category=${cat._id}`}
                    className="btn btn-primary btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>Explore Careers</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
