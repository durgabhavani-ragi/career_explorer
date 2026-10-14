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
          padding: '64px 20px 52px 20px',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-secondary)',
          textAlign: 'center',
        }}
      >
        <div className="container" style={{ maxWidth: '820px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '5px 14px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'var(--primary-subtle)',
              color: 'var(--primary)',
              border: '1px solid var(--primary-border)',
              fontSize: '0.8rem',
              fontWeight: 700,
              marginBottom: '18px',
              letterSpacing: '0.02em',
            }}
          >
            <Compass size={14} /> Career Guidance & Learning Roadmaps
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.1rem, 4.8vw, 3rem)',
              fontWeight: 800,
              color: 'var(--text-main)',
              lineHeight: 1.18,
              marginBottom: '16px',
              letterSpacing: '-0.035em',
            }}
          >
            Discover your next career path
          </h1>

          <p
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '640px',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Explore verified career profiles, realistic Indian salary benchmarks, required competencies, and step-by-step learning roadmaps.
          </p>

          {/* Unified Modern Search Bar */}
          <form
            onSubmit={handleSearchSubmit}
            style={{
              display: 'flex',
              maxWidth: '560px',
              margin: '0 auto 22px auto',
              backgroundColor: 'var(--bg-surface)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-lg)',
              padding: '6px 6px 6px 14px',
              boxShadow: 'var(--shadow-card)',
              transition: 'border-color var(--transition-fast), box-shadow var(--transition-fast)',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            <div style={{ flex: '1 1 auto', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Search
                size={18}
                color="var(--primary)"
                style={{ flexShrink: 0 }}
              />
              <input
                type="text"
                placeholder="Search careers e.g. Software Developer, Data Analyst..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  border: 'none',
                  backgroundColor: 'transparent',
                  outline: 'none',
                  fontSize: '0.94rem',
                  color: 'var(--text-main)',
                  fontFamily: 'inherit',
                  padding: '8px 0',
                }}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              style={{
                height: '42px',
                padding: '0 20px',
                borderRadius: 'var(--radius-md)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontWeight: 600,
                flexShrink: 0,
              }}
            >
              <span>Search</span>
              <ArrowRight size={14} />
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
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
              }}
            >
              <span style={{ fontWeight: 600, color: 'var(--text-muted)' }}>Explore:</span>
              {categories.slice(0, 5).map((cat) => (
                <Link
                  key={cat._id}
                  to={`/careers?category=${cat._id}`}
                  style={{
                    color: 'var(--text-body)',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-color)',
                    padding: '3px 12px',
                    borderRadius: 'var(--radius-full)',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '0.8rem',
                    transition: 'all var(--transition-fast)',
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
          padding: '40px 20px',
          borderBottom: '1px solid var(--border-color)',
          backgroundColor: 'var(--bg-page)',
        }}
      >
        <div className="container">
          <div className="grid-3">
            <div
              className="editorial-card"
              style={{ padding: '24px' }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--primary-subtle)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                  border: '1px solid var(--primary-border)',
                }}
              >
                <Briefcase size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                Authentic Career Profiles
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Clear responsibilities, academic background, and core technical and analytical skills.
              </p>
            </div>

            <div
              className="editorial-card"
              style={{ padding: '24px' }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'var(--secondary-accent-subtle)',
                  color: 'var(--secondary-accent)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                  border: '1px solid var(--secondary-accent-border)',
                }}
              >
                <Layers size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                Learning Roadmaps
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                Follow structured milestones and curated study materials to develop in-demand abilities.
              </p>
            </div>

            <div
              className="editorial-card"
              style={{ padding: '24px' }}
            >
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: 'rgba(14, 165, 233, 0.1)',
                  color: '#0284C7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px',
                  border: '1px solid rgba(14, 165, 233, 0.22)',
                }}
              >
                <TrendingUp size={18} />
              </div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px', color: 'var(--text-main)' }}>
                Market Expectations
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
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
          backgroundColor: 'var(--bg-secondary)',
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
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--secondary-accent-subtle)',
                      color: 'var(--secondary-accent)',
                      border: '1px solid var(--secondary-accent-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Folder size={17} />
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
