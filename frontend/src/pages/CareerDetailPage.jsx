import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import careerService from '../services/careerService';
import roadmapService from '../services/roadmapService';
import { useAuth } from '../context/AuthContext';
import SaveCareerButton from '../components/career/SaveCareerButton';
import StatusBadge from '../components/common/StatusBadge';
import SalaryDisplay from '../components/common/SalaryDisplay';
import RoadmapTimeline from '../components/roadmap/RoadmapTimeline';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { getBriefDescription } from '../utils/textUtils';
import {
  GraduationCap,
  Briefcase,
  TrendingUp,
  ArrowLeft,
  GitFork,
  BookOpen,
  Layers,
  IndianRupee,
  Compass,
} from 'lucide-react';

const CareerDetailPage = () => {
  const { slug } = useParams();
  const { isAuthenticated } = useAuth();

  const [career, setCareer] = useState(null);
  const [roadmap, setRoadmap] = useState(null);
  const [altCareers, setAltCareers] = useState([]);
  const [userProgress, setUserProgress] = useState(null);
  const [isSaved, setIsSaved] = useState(false);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('roadmap'); // 'roadmap' | 'skills' | 'alternatives'

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
                const found = savedRes.data.some(
                  (item) => (item.career?._id || item.career) === fetchedCareer._id
                );
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
    return <LoadingSpinner message="Loading career profile..." />;
  }

  if (!career) {
    return (
      <div className="container" style={{ padding: '64px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Career Profile Not Found</h2>
        <p style={{ color: 'var(--text-muted)', margin: '16px 0 24px 0' }}>
          The requested career path could not be located in the database.
        </p>
        <Link to="/careers" className="btn btn-primary">
          Back to Career Directory
        </Link>
      </div>
    );
  }

  const {
    _id,
    title,
    description,
    category,
    subjects,
    skills,
    salaryRange,
    jobOutlook,
    educationRequirements,
    workEnvironment,
  } = career;

  return (
    <div className="container animate-fade-in" style={{ padding: '36px 20px 64px 20px' }}>
      {/* Back Navigation Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <Link
          to="/careers"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--text-muted, #71717a)',
            fontSize: '0.88rem',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={14} /> Back to Career Directory
        </Link>
      </div>

      {/* Main Profile Header Card */}
      <header
        className="editorial-card"
        style={{
          padding: '36px 32px',
          backgroundColor: '#ffffff',
          marginBottom: '32px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '16px',
            marginBottom: '16px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--text-muted, #71717a)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
              }}
            >
              {category?.name || 'Industry Category'}
            </span>
            <h1
              style={{
                fontSize: '2.5rem',
                fontWeight: 800,
                color: 'var(--text-main, #18181b)',
                marginTop: '4px',
                letterSpacing: '-0.035em',
              }}
            >
              {title}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <StatusBadge text={jobOutlook} />
            <SaveCareerButton careerId={_id} isInitiallySaved={isSaved} />
          </div>
        </div>

        <p
          style={{
            color: 'var(--text-body, #3f3f46)',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            maxWidth: '820px',
            marginBottom: '28px',
          }}
        >
          {getBriefDescription(description, 3)}
        </p>

        {/* Career Metadata Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-color, #e4e4e7)',
          }}
        >
          {/* Salary */}
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted, #71717a)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Estimated Salary
            </span>
            <SalaryDisplay salaryRange={salaryRange} />
          </div>

          {/* Education Requirements */}
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted, #71717a)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Education Background
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <GraduationCap size={16} color="var(--text-muted)" />
              <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                {educationRequirements || 'Degree or Portfolio'}
              </strong>
            </div>
          </div>

          {/* Work Environment */}
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted, #71717a)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Work Environment
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Briefcase size={16} color="var(--text-muted)" />
              <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                {workEnvironment || 'Office / Remote Flexible'}
              </strong>
            </div>
          </div>

          {/* Job Outlook */}
          <div>
            <span
              style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--text-muted, #71717a)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                display: 'block',
                marginBottom: '6px',
              }}
            >
              Market Demand Outlook
            </span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <TrendingUp size={16} color="var(--text-muted)" />
              <strong style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>
                {jobOutlook || 'Stable Demand'}
              </strong>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs Navigation */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          borderBottom: '1px solid var(--border-color, #e4e4e7)',
          marginBottom: '28px',
          overflowX: 'auto',
          paddingBottom: '2px',
        }}
      >
        <button
          onClick={() => setActiveTab('roadmap')}
          className={`btn ${activeTab === 'roadmap' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          style={{ borderRadius: '6px 6px 0 0' }}
        >
          <Layers size={14} /> Learning Roadmap
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`btn ${activeTab === 'skills' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          style={{ borderRadius: '6px 6px 0 0' }}
        >
          <BookOpen size={14} /> Skills & Academic Subjects
        </button>
        <button
          onClick={() => setActiveTab('alternatives')}
          className={`btn ${activeTab === 'alternatives' ? 'btn-primary' : 'btn-secondary'} btn-sm`}
          style={{ borderRadius: '6px 6px 0 0' }}
        >
          <GitFork size={14} /> Alternative Careers ({altCareers.length})
        </button>
      </div>

      {/* TAB 1: Learning Roadmap */}
      {activeTab === 'roadmap' && (
        <section>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
              {roadmap?.title || `${title} Roadmap`}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
              {roadmap?.description || 'Follow this structured timeline to master skills required for this career.'}
            </p>
          </div>

          <RoadmapTimeline
            roadmap={roadmap}
            userProgress={userProgress}
            onProgressUpdate={(newProgress) => setUserProgress(newProgress)}
          />
        </section>
      )}

      {/* TAB 2: Skills & Domain Subjects */}
      {activeTab === 'skills' && (
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {/* Required Skills Card */}
          <div className="editorial-card" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '16px',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '10px',
              }}
            >
              Required Skills & Competencies
            </h4>
            {skills && skills.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {skills.map((skill) => (
                  <div
                    key={skill._id || skill}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-subtle, #f4f4f5)',
                      borderRadius: 'var(--radius-sm, 6px)',
                      border: '1px solid var(--border-light, #f4f4f5)',
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ color: 'var(--text-main)', fontSize: '0.92rem' }}>
                        {skill.name || skill}
                      </strong>
                      <StatusBadge text={skill.level || 'All Levels'} />
                    </div>
                    {skill.description && (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.45 }}>
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                No explicit skill requirements listed for this career profile.
              </p>
            )}
          </div>

          {/* Academic Domain Subjects Card */}
          <div className="editorial-card" style={{ padding: '28px', backgroundColor: '#ffffff' }}>
            <h4
              style={{
                fontSize: '1.15rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                marginBottom: '16px',
                borderBottom: '1px solid var(--border-color)',
                paddingBottom: '10px',
              }}
            >
              Relevant Academic Subjects
            </h4>
            {subjects && subjects.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {subjects.map((sub) => (
                  <div
                    key={sub._id || sub}
                    style={{
                      padding: '12px 14px',
                      backgroundColor: 'var(--bg-subtle, #f4f4f5)',
                      borderRadius: 'var(--radius-sm, 6px)',
                      border: '1px solid var(--border-light, #f4f4f5)',
                    }}
                  >
                    <strong style={{ color: 'var(--text-main)', fontSize: '0.92rem', display: 'block', marginBottom: '4px' }}>
                      {sub.name || sub}
                    </strong>
                    {sub.description && (
                      <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.45 }}>
                        {sub.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <p style={{ color: 'var(--text-muted)', fontStyle: 'italic', fontSize: '0.9rem' }}>
                No prerequisite academic subjects listed for this career profile.
              </p>
            )}
          </div>
        </section>
      )}

      {/* TAB 3: Alternative Careers */}
      {activeTab === 'alternatives' && (
        <section>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)' }}>
              Related & Alternative Career Paths
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '4px' }}>
              Careers that share foundational skillsets, academic subjects, or industry overlap.
            </p>
          </div>

          {altCareers.length === 0 ? (
            <div
              className="editorial-card"
              style={{
                padding: '40px 24px',
                textAlign: 'center',
                backgroundColor: '#ffffff',
                color: 'var(--text-muted)',
              }}
            >
              No direct alternative career mappings recorded for this profile yet.
            </div>
          ) : (
            <div className="grid-2">
              {altCareers.map((item) => {
                const alt = item.alternativeCareer;
                if (!alt) return null;
                return (
                  <div
                    key={item._id}
                    className="editorial-card"
                    style={{
                      padding: '24px',
                      backgroundColor: '#ffffff',
                      display: 'flex',
                      flexDirection: 'column',
                    }}
                  >
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '6px' }}>
                      <Link
                        to={`/careers/${alt.slug || alt._id}`}
                        style={{ color: 'var(--text-main)', textDecoration: 'none' }}
                      >
                        {alt.title}
                      </Link>
                    </h4>

                    {item.similarityNotes && (
                      <p
                        style={{
                          color: '#2563eb',
                          fontSize: '0.82rem',
                          fontStyle: 'italic',
                          marginBottom: '10px',
                          backgroundColor: '#eff6ff',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          width: 'fit-content',
                        }}
                      >
                        "{item.similarityNotes}"
                      </p>
                    )}

                    <p
                      style={{
                        color: 'var(--text-muted)',
                        fontSize: '0.86rem',
                        lineHeight: 1.5,
                        marginBottom: '14px',
                        flex: 1,
                      }}
                    >
                      {getBriefDescription(alt.description, 2)}
                    </p>

                    {/* Alternative career salary in INR if available */}
                    {alt.salaryRange && (
                      <div style={{ marginBottom: '16px' }}>
                        <SalaryDisplay salaryRange={alt.salaryRange} compact={true} />
                      </div>
                    )}

                    <div style={{ marginTop: 'auto', paddingTop: '12px', borderTop: '1px solid var(--border-light)' }}>
                      <Link
                        to={`/careers/${alt.slug || alt._id}`}
                        className="btn btn-secondary btn-sm"
                      >
                        Explore {alt.title}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default CareerDetailPage;
