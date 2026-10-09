import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import careerService from '../services/careerService';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Folder, ArrowRight } from 'lucide-react';

const CategoriesPage = () => {
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
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      <div style={{ marginBottom: '32px' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, color: '#f8fafc' }}>
          Industry <span className="gradient-text">Categories</span>
        </h1>
        <p style={{ color: '#94a3b8', fontSize: '1rem', marginTop: '6px' }}>
          Browse careers grouped by academic domains, industries, and technical fields.
        </p>
      </div>

      {loading ? (
        <LoadingSpinner message="Loading categories from MongoDB..." />
      ) : categories.length === 0 ? (
        <EmptyState
          title="No Categories Found"
          description="There are currently no categories stored in the database. Log in as an Admin to add categories."
        />
      ) : (
        <div className="grid-3">
          {categories.map((cat) => (
            <div key={cat._id} className="glass-card" style={{ padding: '28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <div style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '12px', borderRadius: '12px', color: '#818cf8' }}>
                  <Folder size={24} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>{cat.name}</h3>
              </div>

              <p style={{ color: '#94a3b8', fontSize: '0.92rem', marginBottom: '24px', flex: 1, lineHeight: 1.6 }}>
                {cat.description || 'Explore specialized career paths and skill roadmaps within this industry field.'}
              </p>

              <Link
                to={`/careers?category=${cat._id}`}
                className="btn btn-primary btn-sm"
                style={{ alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              >
                <span>View Careers</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoriesPage;
