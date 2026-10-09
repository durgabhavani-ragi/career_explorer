import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import careerService from '../services/careerService';
import roadmapService from '../services/roadmapService';
import { useAuth } from '../context/AuthContext';
import SaveCareerButton from '../components/career/SaveCareerButton';
import StatusBadge from '../components/common/StatusBadge';
import RoadmapTimeline from '../components/roadmap/RoadmapTimeline';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { DollarSign, GraduationCap, Briefcase, TrendingUp, ArrowLeft, GitFork, BookOpen, Layers } from 'lucide-react';

const CareerDetailPage = () => {
  const { slug } = useParams();
  const { isAuthenticated } = useAuth();

  const [career, setCareer] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [altCareers, setAltCareers] = useState([]);
  const [userProgress, setUserProgress] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'overview' | 'alternatives'

  useEffect(() => {
    const fetchCareerDetails = async () => {
      setLoading(true);
      try {
        let careerRes;
        // Check if param is ObjectId (24 hex chars) or slug
        if (slug.match(/^[0-9a-fA-F]{24}$/)) {
          careerRes = await careerService.getCareerById(slug);
        } else {
          careerRes = await careerService.getCareerBySlug(slug);
        }

        if (careerRes.success && careerRes.data) {
          const fetchedCareer = careerRes.data;
          setCareer(fetchedCareer);

          // Fetch Roadmap for this career
          try {
            const roadmapRes = await roadmapService.getRoadmapByCareer(fetchedCareer._id);
            if (roadmapRes.success && roadmapRes.data) {
              setRoadmap(roadmapRes.data);

              // If logged in, fetch roadmap progress
              if (isAuthenticated) {
                const progressRes = await roadmapService.getProgressByRoadmap(roadmapRes.data._id);
                if (progressRes.success && progressRes.data) {
                  setUserProgress(progressRes.data);
                }
              }
            }
          } catch (e) {
            console.log('No roadmap found for career');
          }

          // Fetch Alternative Careers
          try {
            const altRes = await careerService.getAlternativeCareers(fetchedCareer._id);
            if (altRes.success && altRes.data) {
              setAltCareers(altRes.data);
            }
          } catch (e) {
            console.log('No alternative careers found');
          }

          // Check if saved by user
          if (isAuthenticated) {
            try {
              const savedRes = await roadmapService.getSavedCareers();
              if (savedRes.success && savedRes.data) {
                const found = savedRes.data.some((item) => (item.career?._id || item.career) === fetchedCareer._id);
                setIsSaved(found);
              }
            } catch (e) {
              console.log('Failed to check saved status');
            }
          }
        }
      } catch (err) {
        console.error('Failed to load career details:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCareerDetails();
  }, [slug, isAuthenticated]);

  if (loading) {
    return <LoadingSpinner message="Loading career details..." />;
  }

  if (!career) {
    return (
      <div className="container" style={{ padding: '60px 24px', textAlign: 'center' }}>
        <h2>Career Not Found</h2>
        <p style={{ color: '#94a3b8', margin: '16px 0' }}>The requested career path could not be found in MongoDB.</p>
        <Link to="/careers" className="btn btn-primary">
          Back to All Careers
        </Link>
      </div>
    );
  }

  const { _id, title, description, category, subjects, skills, salaryRange, jobOutlook, educationRequirements, workEnvironment } = career;

  const formatCurrency = (val) => (val ? val.toLocaleString() : '0');

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 24px' }}>
      {/* Back Link */}
      <Link to="/careers" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#94a3b8', marginBottom: '24px', fontSize: '0.9rem' }}>
        <ArrowLeft size={16} /> Back to Careers
      </Link>

      {/* Header Banner */}
      <div className="glass-card" style={{ padding: '32px', marginBottom: '32px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
          <div>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              {category?.name || 'Industry Category'}
            </span>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>{title}</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <StatusBadge text={jobOutlook} />
            <SaveCareerButton careerId={_id} isInitiallySaved={isSaved} />
          </div>
        </div>

        <p style={{ color: '#cbd5e1', fontSize: '1.05rem', lineHeight: 1.7, maxWidth: '900px' }}>
          {description}
        </p>

        {/* Quick Stats Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(16, 185, 129, 0.15)', padding: '10px', borderRadius: '10px', color: '#34d399' }}>
              <DollarSign size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Salary Range</span>
              <strong style={{ color: '#f8fafc', fontSize: '0.95rem' }}>
                {salaryRange ? `${salaryRange.currency || 'USD'} ${formatCurrency(salaryRange.min)} - ${formatCurrency(salaryRange.max)}` : 'N/A'}
              </strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(99, 102, 241, 0.15)', padding: '10px', borderRadius: '10px', color: '#818cf8' }}>
              <GraduationCap size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Education</span>
              <strong style={{ color: '#f8fafc', fontSize: '0.95rem' }}>{educationRequirements || 'Flexible'}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(139, 92, 246, 0.15)', padding: '10px', borderRadius: '10px', color: '#a78bfa' }}>
              <Briefcase size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Environment</span>
              <strong style={{ color: '#f8fafc', fontSize: '0.95rem' }}>{workEnvironment || 'Standard'}</strong>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ background: 'rgba(245, 158, 11, 0.15)', padding: '10px', borderRadius: '10px', color: '#fbbf24' }}>
              <TrendingUp size={20} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'block' }}>Job Outlook</span>
              <strong style={{ color: '#f8fafc', fontSize: '0.95rem' }}>{jobOutlook}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Header */}
      <div style={{ display: 'flex', gap: '12px', borderBottom: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '32px', paddingBottom: '12px' }}>
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`btn ${activeTab === 'roadmap' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
        >
          <Layers size={16} /> Learning Roadmap
        </button>
        <button
          onClick={() => setActiveTab('overview')}
          className={`btn ${activeTab === 'overview' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
        >
          <BookOpen size={16} /> Skills & Subjects
        </button>
        <button
          onClick={() => setActiveTab('alternatives')}
          className={`btn ${activeTab === 'alternatives' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
        >
          <GitFork size={16} /> Alternative Careers ({altCareers.length})
        </button>
      </div>

      {/* Tab 1: Interactive Roadmap */}
      {activeTab === 'roadmap' && (
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f8fafc' }}>
            {roadmap?.title || `${title} Learning Path`}
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '4px' }}>
            {roadmap?.description || 'Follow this structured timeline to master the skills needed for this career.'}
          </p>
          <RoadmapTimeline
            roadmap={roadmap}
            userProgress={userProgress}
            onProgressUpdate={(newProgress) => setUserProgress(newProgress)}
          />
        </div>
      )}

      {/* Tab 2: Skills & Subjects */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Required Skills Card */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Required Technical & Soft Skills
            </h4>
            {skills && skills.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {skills.map((skill) => (
                  <div key={skill._id || skill} style={{ padding: '12px', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ color: '#f8fafc', fontSize: '0.95rem' }}>{skill.name}</strong>
                      <StatusBadge text={skill.level || 'All Levels'} />
                    </div>
                    {skill.description && <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{skill.description}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>No specific skills linked to this career yet.</p>
            )}
          </div>

          {/* Academic Subjects Card */}
          <div className="glass-card" style={{ padding: '24px' }}>
            <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Relevant Academic & Domain Subjects
            </h4>
            {subjects && subjects.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {subjects.map((sub) => (
                  <div key={sub._id || sub} style={{ padding: '12px', background: 'rgba(30, 41, 59, 0.6)', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <strong style={{ color: '#f8fafc', fontSize: '0.95rem', display: 'block', marginBottom: '4px' }}>{sub.name}</strong>
                    {sub.description && <p style={{ color: '#94a3b8', fontSize: '0.85rem' }}>{sub.description}</p>}
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>No domain subjects linked to this career yet.</p>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Alternative Careers */}
      {activeTab === 'alternatives' && (
        <div>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
            Alternative & Related Career Paths
          </h3>
          <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '24px' }}>
            Careers sharing similar skillsets, education requirements, or industry domains.
          </p>

          {altCareers.length === 0 ? (
            <div className="glass-card" style={{ padding: '32px', textAlign: 'center', color: '#94a3b8' }}>
              No alternative career recommendations listed for this career path yet.
            </div>
          ) : (
            <div className="grid-2">
              {altCareers.map((item) => {
                const alt = item.alternativeCareer;
                if (!alt) return null;
                return (
                  <div key={item._id} className="glass-card" style={{ padding: '24px' }}>
                    <h4 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>
                      <Link to={`/careers/${alt.slug || alt._id}`} style={{ color: '#f8fafc' }}>
                        {alt.title}
                      </Link>
                    </h4>
                    {item.similarityNotes && (
                      <p style={{ color: '#818cf8', fontSize: '0.88rem', fontStyle: 'italic', marginBottom: '12px' }}>
                        "{item.similarityNotes}"
                      </p>
                    )}
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', marginBottom: '16px' }}>{alt.description}</p>
                    <Link to={`/careers/${alt.slug || alt._id}`} className="btn btn-secondary btn-sm">
                      Explore {alt.title}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CareerDetailPage;
