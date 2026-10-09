import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import careerService from '../services/careerService';
import EmptyState from '../components/common/EmptyState';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { Folder, ArrowRight } from 'lucide-react';

const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [careerCounts, setCareerCounts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const [catRes, carRes] = await Promise.allSettled([
          careerService.getCategories(),
          careerService.getCareers(),
        ]);

        if (catRes.status === 'fulfilled' && catRes.value.success) {
          setCategories(catRes.value.data || []);
        }

        if (carRes.status === 'fulfilled' && carRes.value.success) {
          const careers = carRes.value.data || [];
          const counts = {};
          careers.forEach((c) => {
            const catId = c.category?._id || c.category;
            if (catId) {
              counts[catId] = (counts[catId] || 0) + 1;
            }
          });
          setCareerCounts(counts);
        }
      } catch (err) {
        console.error('Failed to load categories:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategoryData();
  }, []);

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 20px 64px 20px' }}>
      {/* Editorial Header */}
      <div style={{ marginBottom: '32px' }}>
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            color: 'var(--text-muted, #71717a)',
            textTransform: 'uppercase',
            letterSpacing: '0.04em',
          }}
        >
          Domain Directory
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
          Industry Categories
        </h1>
        <p
          style={{
            color: 'var(--text-muted, #71717a)',
            fontSize: '0.95rem',
            marginTop: '6px',
            maxWidth: '680px',
          }}
        >
          Browse specialized career pathways organized by academic disciplines, engineering branches, and industrial sectors.
        </p>
      </div>

      {loading ? (
        <LoadingSpinner message="Loading categories from MongoDB..." />
      ) : categories.length === 0 ? (
        <EmptyState
          title="No Categories Available"
          description="There are currently no categories stored in the database."
        />
      ) : (
        <div className="grid-3">
          {categories.map((cat) => {
            const count = careerCounts[cat._id];

            return (
              <div
                key={cat._id}
                className="editorial-card"
                style={{
                  padding: '28px',
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: '#ffffff',
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
                      width: '40px',
                      height: '40px',
                      borderRadius: '8px',
                      backgroundColor: 'var(--bg-subtle, #f4f4f5)',
                      color: 'var(--text-main, #18181b)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Folder size={20} />
                  </div>

                  {count !== undefined && (
                    <span
                      style={{
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        color: 'var(--text-muted, #71717a)',
                        backgroundColor: 'var(--bg-subtle, #f4f4f5)',
                        padding: '3px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {count} {count === 1 ? 'Career' : 'Careers'}
                    </span>
                  )}
                </div>

                <h3
                  style={{
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    color: 'var(--text-main, #18181b)',
                    marginBottom: '8px',
                  }}
                >
                  {cat.name}
                </h3>

                <p
                  style={{
                    color: 'var(--text-muted, #71717a)',
                    fontSize: '0.88rem',
                    marginBottom: '24px',
                    flex: 1,
                    lineHeight: 1.55,
                  }}
                >
                  {cat.description || 'Explore specialized career profiles and skill roadmaps within this field.'}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--border-light, #f4f4f5)' }}>
                  <Link
                    to={`/careers?category=${cat._id}`}
                    className="btn btn-secondary btn-sm"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                  >
                    <span>View Careers</span>
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
