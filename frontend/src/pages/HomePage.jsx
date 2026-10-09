import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import careerService from '../services/careerService';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Compass, Target, Map, Award, ArrowRight, Folder } from 'lucide-react';

const HomePage = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await careerService.getCategories();
        if (res.success) {
          setCategories(res.data || []);
        }
      } catch (err) {
        console.error('Failed to load categories:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="animate-fade-in">
      {/* Hero Banner Section */}
      <section
        style={{
          textAlign: 'center',
          padding: '80px 20px 60px 20px',
          background: 'radial-gradient(circle at 50% 30%, rgba(99, 102, 241, 0.15) 0%, rgba(15, 23, 42, 0) 70%)',
        }}
      >
        <div className="container" style={{ maxWidth: '850px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              background: 'rgba(99, 102, 241, 0.15)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              color: '#818cf8',
              fontSize: '0.875rem',
              fontWeight: 600,
              marginBottom: '24px',
            }}
          >
            <Compass size={16} /> Empower Your Future Career
          </div>

          <h1 style={{ fontSize: '3rem', fontWeight: 800, lineHeight: 1.2, marginBottom: '20px', letterSpacing: '-0.5px' }}>
            Discover Your Career Path with <span className="gradient-text">Real Insights</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#94a3b8', marginBottom: '36px', lineHeight: 1.6 }}>
            Explore verified career profiles, industry salaries, required skills, interactive step-by-step learning roadmaps, and personalized milestone tracking.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/careers" className="btn btn-primary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
              <span>Explore All Careers</span>
              <ArrowRight size={18} />
            </Link>
            <Link to="/categories" className="btn btn-secondary" style={{ padding: '14px 28px', fontSize: '1rem' }}>
              <span>Browse Categories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="container" style={{ padding: '40px 24px' }}>
        <div className="grid-3">
          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ background: 'rgba(99, 102, 241, 0.15)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#818cf8' }}>
              <Target size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', color: '#f8fafc' }}>
              Targeted Career Insights
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Get detailed breakdown of salary ranges, job market outlook, work environment, and required education for every career.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ background: 'rgba(139, 92, 246, 0.15)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#a78bfa' }}>
              <Map size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', color: '#f8fafc' }}>
              Interactive Roadmaps
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Follow structured step-by-step milestones with curated articles, videos, and courses for each career path.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', color: '#34d399' }}>
              <Award size={24} />
            </div>
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '10px', color: '#f8fafc' }}>
              Personal Progress Tracker
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.6 }}>
              Log in to bookmark favorite careers and track your step-by-step learning progress directly in real time.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Categories Section */}
      <section className="container" style={{ padding: '40px 24px 80px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '32px' }}>
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Explore By Field
            </span>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#f8fafc', marginTop: '4px' }}>
              Career Categories
            </h2>
          </div>
          <Link to="/categories" style={{ color: '#818cf8', fontWeight: 600, fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            View All <ArrowRight size={16} />
          </Link>
        </div>

        {loading ? (
          <LoadingSpinner message="Fetching categories from database..." />
        ) : categories.length === 0 ? (
          <EmptyState
            title="No Categories Available"
            description="The database currently contains no categories. Log in as an Admin to add categories and careers."
          />
        ) : (
          <div className="grid-3">
            {categories.slice(0, 6).map((cat) => (
              <Link
                key={cat._id}
                to={`/careers?category=${cat._id}`}
                className="glass-card"
                style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}
              >
                <div style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '12px', borderRadius: '12px', color: '#818cf8' }}>
                  <Folder size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#f8fafc' }}>{cat.name}</h4>
                  <p style={{ color: '#94a3b8', fontSize: '0.85rem', marginTop: '2px' }}>
                    {cat.description ? (cat.description.length > 50 ? `${cat.description.substring(0, 50)}...` : cat.description) : 'Explore careers in this category'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomePage;
