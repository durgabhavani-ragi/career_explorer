import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import careerService from '../services/careerService';
import CareerCard from '../components/career/CareerCard';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Search, ArrowRight, Folder, Compass, Layers, TrendingUp, Briefcase } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [categories, setCategories] = useState([]);
  const [featuredCareers, setFeaturedCareers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const [catRes, carRes] = await Promise.allSettled([
          careerService.getCategories(),
          careerService.getCareers(),
        ]);

        if (catRes.status === 'fulfilled' && catRes.value.success) {
          setCategories(catRes.value.data || []);
        }
        if (carRes.status === 'fulfilled' && carRes.value.success) {
          setFeaturedCareers((carRes.value.data || []).slice(0, 6));
        }
      } catch (err) {
        console.error('Failed to load homepage data:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchHomeData();
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/careers?search=${encodeURIComponent(searchTerm.trim())}`);
    } else {
      navigate('/careers');
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section
        style={{
          padding: '56px 20px 48px 20px',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: '#ffffff',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '780px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--bg-subtle, #f4f4f5)',
              color: 'var(--text-muted, #71717a)',
              fontSize: '0.78rem',
              fontWeight: 600,
              marginBottom: '16px',
              letterSpacing: '0.02em',
            }}
          >
            <Compass size={13} /> Career Guidance & Learning Roadmaps
          </div>

          <h1
            style={{
              fontSize: 'clamp(1.9rem, 4.5vw, 2.75rem)',
              fontWeight: 800,
              color: 'var(--text-main, #18181b)',
              lineHeight: 1.2,
              marginBottom: '14px',
              letterSpacing: '-0.035em',
            }}
          >
            Discover your next career path
          </h1>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-muted, #71717a)',
              lineHeight: 1.6,
              marginBottom: '28px',
              maxWidth: '620px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Explore career profiles, salary ranges, required competencies, and step-by-step learning roadmaps.
          </p>

          {/* Search Bar Form */}
          <form
            onSubmit={handleSearchSubmit}
            style={{
              display: 'flex',
              maxWidth: '500px',
              margin: '0 auto 20px auto',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <div style={{ flex: '1 1 260px', position: 'relative' }}>
              <Search
                size={16}
                color="var(--text-muted, #71717a)"
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                }}
              />
              <input
                type="text"
                className="form-input"
                placeholder="Search careers e.g. Software Developer, Data Analyst..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  paddingLeft: '38px',
                  height: '42px',
                  fontSize: '0.9rem',
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ height: '42px', padding: '0 18px' }}
            >
              <span>Search</span>
            </button>
          </form>

          {/* Quick Category Badges */}
          {categories.length > 0 && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                flexWrap: 'wrap',
                fontSize: '0.8rem',
                color: 'var(--text-muted, #71717a)',
              }}
            >
              <span style={{ fontWeight: 600 }}>Explore:</span>
              {categories.slice(0, 4).map((cat) => (
                <Link
                  key={cat._id}
                  to={`/careers?category=${cat._id}`}
                  style={{
                    color: 'var(--text-body, #3f3f46)',
                    background: 'var(--bg-subtle, #f4f4f5)',
                    padding: '2px 9px',
                    borderRadius: 'var(--radius-sm)',
                    textDecoration: 'none',
                  }}
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 3 Core Highlights */}
      <section
        style={{
          padding: '36px 20px',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-page, #fafaf9)',
        }}
      >
        <div className="container">
          <div className="grid-3">
            <div
              className="editorial-card"
              style={{ padding: '20px', backgroundColor: '#ffffff' }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}
              >
                <Briefcase size={16} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
                Authentic Career Profiles
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Clear responsibilities, academic background, and core technical and analytical skills.
              </p>
            </div>

            <div
              className="editorial-card"
              style={{ padding: '20px', backgroundColor: '#ffffff' }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}
              >
                <Layers size={16} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
                Learning Roadmaps
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Follow structured milestones and curated study materials to develop in-demand abilities.
              </p>
            </div>

            <div
              className="editorial-card"
              style={{ padding: '20px', backgroundColor: '#ffffff' }}
            >
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '6px',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-main)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px',
                }}
              >
                <TrendingUp size={16} />
              </div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '4px' }}>
                Market Expectations
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                Realistic salary ranges and market growth outlook to plan your professional development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Career Paths */}
      <section style={{ padding: '48px 20px' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Directory Preview
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
                Featured Career Paths
              </h2>
            </div>
            <Link
              to="/careers"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              <span>View All Careers</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {loading ? (
            <LoadingSpinner message="Loading careers..." />
          ) : featuredCareers.length === 0 ? (
            <EmptyState
              title="No Careers Available"
              description="No career records are currently registered in the database."
            />
          ) : (
            <div className="grid-3">
              {featuredCareers.map((career) => (
                <CareerCard key={career._id} career={career} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Industry Categories */}
      <section
        style={{
          padding: '40px 20px 56px 20px',
          borderTop: '1px solid var(--border-color)',
          backgroundColor: '#ffffff',
        }}
      >
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              marginBottom: '24px',
              flexWrap: 'wrap',
              gap: '12px',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.04em',
                }}
              >
                Categories
              </span>
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginTop: '2px' }}>
                Browse by Industry
              </h2>
            </div>
            <Link
              to="/categories"
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}
            >
              <span>All Categories</span>
              <ArrowRight size={13} />
            </Link>
          </div>

          {categories.length > 0 && (
            <div className="grid-3">
              {categories.slice(0, 6).map((cat) => (
                <Link
                  key={cat._id}
                  to={`/careers?category=${cat._id}`}
                  className="editorial-card"
                  style={{
                    padding: '18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '6px',
                      backgroundColor: 'var(--bg-subtle)',
                      color: 'var(--text-main)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Folder size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>
                      {cat.name}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
