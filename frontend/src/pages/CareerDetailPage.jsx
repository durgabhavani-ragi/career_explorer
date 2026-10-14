import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import careerService from '../services/careerService';
import roadmapService from '../services/roadmapService';
import { useAuth } from '../context/AuthContext';
import SaveCareerButton from '../components/career/SaveCareerButton';
import StatusBadge from '../components/common/StatusBadge';
import RoadmapTimeline from '../components/roadmap/RoadmapTimeline';
import LoadingSpinner from '../components/common/LoadingSpinner';
import { formatLpa } from '../utils/formatSalary';
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
  CheckCircle2,
  ExternalLink,
  ShieldCheck,
  Clock,
  Award,
  AlertCircle,
  FileCheck2,
  Info,
  Check,
  Building2,
  Users
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

  useEffect(() => {
    const fetchCareerDetails = async () => {
      setLoading(true);
      try {
        let careerRes;
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

          // Check if saved
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
    return <LoadingSpinner message="Loading verified career profile..." />;
  }

  if (!career) {
    return (
      <div className="container" style={{ padding: '64px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>Career Profile Not Found</h2>
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
    subjects = [],
    skills = [],
    salaryRange,
    salaryByExperience,
    salarySource,
    jobOutlook,
    marketDemand,
    educationQualification,
    educationRequirements,
    educationPathways = [],
    eligibilityRequirements,
    certificationsAndExams = [],
    workEnvironment,
    careerProgression = [],
    employmentSectors,
    sources = [],
  } = career;

  // Education Qualification details
  const minQual = educationQualification?.minimumQualification || educationRequirements || 'Bachelor degree or equivalent in a relevant discipline';
  const prefDegree = educationQualification?.preferredDegree || (educationPathways.length > 0 ? educationPathways.join(' or ') : 'Relevant degree program');
  const reqLicense = educationQualification?.requiredProfessionalDegreeOrLicense || 'No statutory government license required for corporate roles';
  const mandatoryReqs = educationQualification?.mandatoryRequirements?.length > 0 
    ? educationQualification.mandatoryRequirements 
    : (educationRequirements ? [educationRequirements] : ['Standard recognized undergraduate qualification']);
  const prefQualifications = educationQualification?.preferredQualifications?.length > 0
    ? educationQualification.preferredQualifications
    : (certificationsAndExams.length > 0 ? certificationsAndExams : ['Relevant practical projects or technical certifications']);
  const eligibilityCriteria = educationQualification?.eligibilityCriteria || eligibilityRequirements || 'Candidates must meet institutional and recruiter eligibility benchmarks.';
  const regulatoryNotes = educationQualification?.regulatoryNotes || 'Recruitment standards depend on specific notifications, service commissions, or applicable statutory regulations.';

  // Salary by experience tiers (LPA)
  const entryMin = salaryByExperience?.entryLevel?.min || salaryByExperience?.entry?.min;
  const entryMax = salaryByExperience?.entryLevel?.max || salaryByExperience?.entry?.max;
  const earlyMin = salaryByExperience?.earlyCareer?.min || salaryByExperience?.early?.min;
  const earlyMax = salaryByExperience?.earlyCareer?.max || salaryByExperience?.early?.max;
  const expMin = salaryByExperience?.experienced?.min;
  const expMax = salaryByExperience?.experienced?.max;
  const salaryNote = salaryByExperience?.salaryNote || salarySource || 'Compensation figures reflect Indian market aggregates across public and private employers.';

  // Gather consolidated learning resources from roadmap steps
  const consolidatedResources = [];
  if (roadmap && Array.isArray(roadmap.steps)) {
    roadmap.steps.forEach(step => {
      if (Array.isArray(step.resources)) {
        step.resources.forEach(r => {
          if (r.title && !consolidatedResources.some(cr => cr.title === r.title)) {
            consolidatedResources.push(r);
          }
        });
      }
    });
  }
  if (Array.isArray(sources)) {
    sources.forEach(s => {
      if (s.title && !consolidatedResources.some(cr => cr.title === s.title)) {
        consolidatedResources.push({
          title: s.title,
          url: s.url,
          type: s.sourceAuthority || 'Official Source',
          isFree: true
        });
      }
    });
  }

  // Quick jump navigation items
  const navSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'education', label: 'Education Qualification' },
    { id: 'skills', label: 'Skills' },
    { id: 'roadmap', label: 'Job Roadmap' },
    { id: 'resources', label: 'Resources' },
    { id: 'salary', label: 'Salary in India' },
    { id: 'opportunities', label: 'Opportunities' },
    { id: 'related', label: 'Related Careers' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '32px 20px 80px 20px' }}>
      {/* Back Breadcrumb */}
      <div style={{ marginBottom: '20px' }}>
        <Link
          to="/careers"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            color: 'var(--text-muted)',
            fontSize: '0.88rem',
            textDecoration: 'none',
          }}
        >
          <ArrowLeft size={15} /> Back to Career Directory
        </Link>
      </div>

      {/* Quick Jump Navigation Bar */}
      <nav
        aria-label="Section navigation"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          overflowX: 'auto',
          padding: '10px 14px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
          marginBottom: '28px',
          position: 'sticky',
          top: '72px',
          zIndex: 20,
          backdropFilter: 'blur(8px)',
        }}
      >
        <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', marginRight: '6px', whiteSpace: 'nowrap' }}>
          Jump To:
        </span>
        {navSections.map(s => (
          <button
            key={s.id}
            onClick={() => scrollToSection(s.id)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-main)',
              fontSize: '0.82rem',
              fontWeight: 500,
              padding: '4px 10px',
              borderRadius: '6px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              transition: 'all 0.15s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
              e.currentTarget.style.color = 'var(--primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--text-main)';
            }}
          >
            {s.label}
          </button>
        ))}
      </nav>

      {/* =========================================================================
          SECTION 1: CAREER OVERVIEW
          ========================================================================= */}
      <section
        id="overview"
        className="editorial-card"
        style={{
          padding: '36px 32px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
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
            marginBottom: '18px',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--primary)',
                backgroundColor: 'var(--accent-subtle)',
                border: '1px solid var(--accent-border)',
                padding: '3px 12px',
                borderRadius: 'var(--radius-sm, 6px)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'inline-block',
                marginBottom: '10px',
              }}
            >
              {category?.name || 'Professional Career'}
            </span>
            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 2.7rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                letterSpacing: '-0.035em',
                lineHeight: 1.2,
              }}
            >
              {title}
            </h1>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <StatusBadge text={marketDemand ? `${marketDemand} Demand` : jobOutlook} />
            <SaveCareerButton careerId={_id} isInitiallySaved={isSaved} />
          </div>
        </div>

        <p
          style={{
            color: 'var(--text-body)',
            fontSize: '1.05rem',
            lineHeight: 1.7,
            maxWidth: '920px',
            marginBottom: '28px',
          }}
        >
          {description}
        </p>

        {/* Quick Fast Facts Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            padding: '20px 24px',
            backgroundColor: 'var(--bg-subtle)',
            border: '1px solid var(--border-color)',
            borderRadius: 'var(--radius-md, 10px)',
          }}
        >
          <div>
            <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' }}>
              Minimum Qualification
            </span>
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {minQual.length > 55 ? `${minQual.substring(0, 52)}...` : minQual}
            </span>
          </div>

          <div>
            <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' }}>
              Job Preparation Time
            </span>
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--secondary-accent)' }}>
              {roadmap?.totalDurationFormatted || `${roadmap?.totalDurationMonths || '3–6'} months`} (Post-Degree)
            </span>
          </div>

          <div>
            <span style={{ fontSize: '0.76rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '4px' }}>
              Entry Salary Tier
            </span>
            <span style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)' }}>
              {entryMin && entryMax ? `₹${formatLpa(entryMin)} – ₹${formatLpa(entryMax)} LPA` : 'Competitive In India'}
            </span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2: EDUCATION QUALIFICATION (VISUALLY SEPARATE FROM ROADMAP)
          ========================================================================= */}
      <section
        id="education"
        style={{
          padding: '36px 32px',
          backgroundColor: 'var(--bg-surface)',
          border: '2px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 14px)',
          marginBottom: '36px',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--accent-subtle)',
              border: '1px solid var(--accent-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <GraduationCap size={20} color="var(--primary)" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              Section 1: Education Qualification & Legal Eligibility
            </h2>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '20px' }}>
          Mandatory degrees, diplomas, entrance examinations, and statutory licensing credentials required prior to job application in India.
        </p>

        {/* Informational Callout */}
        <div
          style={{
            padding: '14px 18px',
            backgroundColor: 'var(--bg-subtle)',
            borderLeft: '4px solid var(--secondary-accent)',
            borderRadius: '4px',
            marginBottom: '26px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '12px',
          }}
        >
          <Info size={18} color="var(--secondary-accent)" style={{ flexShrink: 0, marginTop: '2px' }} />
          <span style={{ fontSize: '0.86rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
            <strong>Distinct From Job Roadmap:</strong> Completing multi-year academic degrees (B.Tech, MBBS, B.Ed, LL.B, B.Arch) is a prerequisite condition. Short-term preparation courses cannot substitute legally mandated professional qualifications or statutory registrations.
          </span>
        </div>

        {/* Qualification Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
            marginBottom: '26px',
          }}
        >
          {/* Card 1: Minimum Educational Qualification */}
          <div
            style={{
              padding: '22px 24px',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md, 10px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <GraduationCap size={16} color="var(--primary)" />
              <h3 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                Minimum Educational Qualification
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {minQual}
            </p>
          </div>

          {/* Card 2: Preferred Degree / Background */}
          <div
            style={{
              padding: '22px 24px',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md, 10px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <Award size={16} color="var(--secondary-accent)" />
              <h3 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                Preferred Degree / Discipline
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {prefDegree}
            </p>
          </div>

          {/* Card 3: Statutory Professional Degree or License */}
          <div
            style={{
              padding: '22px 24px',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md, 10px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <ShieldCheck size={16} color="var(--success-text)" />
              <h3 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                Professional Degree / Statutory License
              </h3>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {reqLicense}
            </p>
          </div>
        </div>

        {/* Detailed Criteria: Mandatory vs Preferred vs Eligibility */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
          }}
        >
          {/* Mandatory Requirements Checklist */}
          <div>
            <h4
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <FileCheck2 size={15} color="var(--success-text)" />
              <span>Mandatory Requirements (Must Have)</span>
            </h4>
            <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {mandatoryReqs.map((req, idx) => (
                <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                  {req}
                </li>
              ))}
            </ul>
          </div>

          {/* Preferred Qualifications */}
          <div>
            <h4
              style={{
                fontSize: '0.88rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                textTransform: 'uppercase',
                letterSpacing: '0.04em',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <Award size={15} color="var(--primary)" />
              <span>Preferred Qualifications & Portfolio</span>
            </h4>
            <ul style={{ margin: 0, paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {prefQualifications.map((pref, idx) => (
                <li key={idx} style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                  {pref}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Eligibility Criteria & Regulatory Guidelines Notes */}
        <div
          style={{
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-color)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px',
          }}
        >
          <div>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
              Eligibility Criteria & Entrance Exams:
            </span>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {eligibilityCriteria}
            </p>
          </div>

          <div>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
              Employer & Regulatory Regulations:
            </span>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {regulatoryNotes}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3: SKILLS REQUIRED
          ========================================================================= */}
      <section
        id="skills"
        className="editorial-card"
        style={{
          padding: '32px 32px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
          marginBottom: '36px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <Layers size={20} color="var(--primary)" />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
            Skills Required
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '22px' }}>
          Technical capabilities, analytical competencies, and foundational knowledge evaluated by employers.
        </p>

        {skills && skills.length > 0 ? (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '24px' }}>
            {skills.map((skill) => (
              <div
                key={skill._id || skill.name}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md, 8px)',
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.9rem' }}>
                  {skill.name}
                </span>
                {skill.level && (
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: 'var(--secondary-accent)',
                      backgroundColor: 'var(--secondary-accent-subtle)',
                      padding: '2px 6px',
                      borderRadius: '4px',
                    }}
                  >
                    {skill.level}
                  </span>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', fontStyle: 'italic', marginBottom: '20px' }}>
            Domain-specific competencies listed in the job preparation steps below.
          </p>
        )}

        {/* Academic Subject Foundations */}
        {subjects && subjects.length > 0 && (
          <div style={{ paddingTop: '18px', borderTop: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.76rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '10px' }}>
              Academic Subject Foundations:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {subjects.map((sub) => (
                <span
                  key={sub._id || sub.name}
                  style={{
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    color: 'var(--text-body)',
                    backgroundColor: 'var(--bg-subtle)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-color)',
                  }}
                >
                  {sub.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 4: JOB PREPARATION ROADMAP
          ========================================================================= */}
      <section
        id="roadmap"
        style={{
          marginBottom: '36px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              backgroundColor: 'var(--accent-subtle)',
              border: '1px solid var(--accent-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Clock size={20} color="var(--primary)" />
          </div>
          <div>
            <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
              Section 2: Job Preparation Roadmap
            </h2>
          </div>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '4px' }}>
          Practical learning, exam preparation, portfolio development, and interview readiness. Individual step durations are between 1 and 6 months.
        </p>

        {/* Render Roadmap Timeline Component */}
        <RoadmapTimeline
          roadmap={roadmap}
          userProgress={userProgress}
          onProgressUpdate={(newProg) => setUserProgress(newProg)}
        />
      </section>

      {/* =========================================================================
          SECTION 5: LEARNING RESOURCES
          ========================================================================= */}
      <section
        id="resources"
        className="editorial-card"
        style={{
          padding: '32px 32px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
          marginBottom: '36px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <BookOpen size={20} color="var(--primary)" />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
            Learning Resources & Portals
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '22px' }}>
          Official government portals, exam testing authorities, and recognized learning platforms relevant to this career.
        </p>

        {consolidatedResources.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '14px',
            }}
          >
            {consolidatedResources.map((res, idx) => (
              <a
                key={idx}
                href={res.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '14px 18px',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md, 8px)',
                  textDecoration: 'none',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <BookOpen size={16} color="var(--primary)" />
                  <div>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-main)', display: 'block' }}>
                      {res.title}
                    </span>
                    {res.type && (
                      <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', textTransform: 'capitalize' }}>
                        {res.type}
                      </span>
                    )}
                  </div>
                </div>
                <ExternalLink size={14} color="var(--text-muted)" />
              </a>
            ))}
          </div>
        ) : (
          <div style={{ padding: '20px', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
            Official documentation and resource links are attached to individual roadmap steps above.
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 6: SALARY IN INDIA
          ========================================================================= */}
      <section
        id="salary"
        className="editorial-card"
        style={{
          padding: '32px 32px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
          marginBottom: '36px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <IndianRupee size={20} color="var(--primary)" />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
            Salary in India (LPA)
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '22px' }}>
          Authentic Indian compensation figures in Lakhs Per Annum (LPA) across major experience tiers.
        </p>

        {/* 3 Experience Tiers */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '20px',
          }}
        >
          {/* Entry Level */}
          <div
            style={{
              padding: '20px 22px',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md, 10px)',
            }}
          >
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
              Entry Level (0–2 yrs)
            </span>
            <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--text-main)', display: 'block', marginBottom: '4px' }}>
              {entryMin && entryMax ? `₹${formatLpa(entryMin)} – ₹${formatLpa(entryMax)}` : '₹3 – ₹6'} <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>LPA</span>
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Campus hires & fresh graduates
            </span>
          </div>

          {/* Early Career */}
          <div
            style={{
              padding: '20px 22px',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md, 10px)',
            }}
          >
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
              Early Career (3–5 yrs)
            </span>
            <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>
              {earlyMin && earlyMax ? `₹${formatLpa(earlyMin)} – ₹${formatLpa(earlyMax)}` : '₹7 – ₹14'} <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>LPA</span>
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Independent professionals & team leads
            </span>
          </div>

          {/* Experienced */}
          <div
            style={{
              padding: '20px 22px',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md, 10px)',
            }}
          >
            <span style={{ fontSize: '0.78rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
              Experienced (6–10+ yrs)
            </span>
            <span style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--success-text)', display: 'block', marginBottom: '4px' }}>
              {expMin && expMax ? `₹${formatLpa(expMin)} – ₹${formatLpa(expMax)}` : '₹16 – ₹30+'} <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-muted)' }}>LPA</span>
            </span>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Senior managers, specialists & principals
            </span>
          </div>
        </div>

        {/* Salary Note */}
        <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)', fontStyle: 'italic', lineHeight: 1.5 }}>
          * {salaryNote}
        </p>
      </section>

      {/* =========================================================================
          SECTION 7: CAREER OPPORTUNITIES & WORK ENVIRONMENT
          ========================================================================= */}
      <section
        id="opportunities"
        className="editorial-card"
        style={{
          padding: '32px 32px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
          marginBottom: '36px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <Briefcase size={20} color="var(--primary)" />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
            Career Opportunities & Work Environment
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '22px' }}>
          Employment avenues across public and private sectors in India, typical work culture, and long-term progression.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            marginBottom: '24px',
          }}
        >
          {/* Government / Public Sector */}
          <div
            style={{
              padding: '20px 22px',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md, 8px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Building2 size={16} color="var(--primary)" />
              <h3 style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                Public & Government Sector
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {employmentSectors?.government || 'Opportunities in central/state ministries, public sector undertakings (PSUs), government research institutes, and regulatory commissions.'}
            </p>
          </div>

          {/* Private Sector & Startups */}
          <div
            style={{
              padding: '20px 22px',
              backgroundColor: 'var(--bg-subtle)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md, 8px)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <Users size={16} color="var(--secondary-accent)" />
              <h3 style={{ fontSize: '0.94rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                Private Sector & Consulting
              </h3>
            </div>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {employmentSectors?.privateSector || 'High hiring volume across Indian conglomerates, global MNC delivery centers, fast-growing tech startups, and specialized boutique consulting practices.'}
            </p>
          </div>
        </div>

        {/* Work Environment */}
        {workEnvironment && (
          <div style={{ marginBottom: '22px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '6px' }}>
              Typical Work Environment:
            </span>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.6, margin: 0 }}>
              {workEnvironment}
            </p>
          </div>
        )}

        {/* Career Progression Pathway */}
        {careerProgression && careerProgression.length > 0 && (
          <div style={{ paddingTop: '18px', borderTop: '1px solid var(--border-light)' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em', display: 'block', marginBottom: '12px' }}>
              Career Progression Ladder:
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px' }}>
              {careerProgression.map((stage, idx) => (
                <React.Fragment key={idx}>
                  <span
                    style={{
                      fontSize: '0.84rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      backgroundColor: 'var(--bg-subtle)',
                      padding: '6px 12px',
                      borderRadius: '6px',
                      border: '1px solid var(--border-color)',
                    }}
                  >
                    {stage}
                  </span>
                  {idx < careerProgression.length - 1 && (
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.84rem' }}>→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          SECTION 8: RELATED CAREERS
          ========================================================================= */}
      <section
        id="related"
        className="editorial-card"
        style={{
          padding: '32px 32px',
          backgroundColor: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg, 12px)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
          <GitFork size={20} color="var(--primary)" />
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--text-main)', margin: 0 }}>
            Related Careers & Alternative Paths
          </h2>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '22px' }}>
          Careers with transferable skillsets, shared academic backgrounds, or parallel career tracks.
        </p>

        {altCareers && altCareers.length > 0 ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px',
            }}
          >
            {altCareers.map((alt) => {
              const altCar = alt.alternativeCareer;
              if (!altCar) return null;

              return (
                <Link
                  key={alt._id}
                  to={`/careers/${altCar.slug || altCar._id}`}
                  style={{
                    display: 'block',
                    padding: '18px 20px',
                    backgroundColor: 'var(--bg-subtle)',
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--radius-md, 8px)',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-surface-hover)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'var(--border-color)';
                    e.currentTarget.style.backgroundColor = 'var(--bg-subtle)';
                  }}
                >
                  <h4 style={{ fontSize: '1.02rem', fontWeight: 700, color: 'var(--text-main)', margin: '0 0 6px 0' }}>
                    {altCar.title}
                  </h4>
                  <p style={{ fontSize: '0.84rem', color: 'var(--text-muted)', margin: '0 0 10px 0', lineHeight: 1.5 }}>
                    {alt.reasonForRecommendation || altCar.description?.substring(0, 85) + '...'}
                  </p>
                  <span
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: 'var(--primary)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px',
                    }}
                  >
                    View Career Path →
                  </span>
                </Link>
              );
            })}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
            <Compass size={24} style={{ color: 'var(--text-muted)', margin: '0 auto 8px auto' }} />
            <p style={{ margin: 0 }}>Explore additional career paths in the main career directory.</p>
            <Link to="/careers" style={{ color: 'var(--primary)', fontWeight: 600, fontSize: '0.86rem', display: 'inline-block', marginTop: '10px' }}>
              Explore All Careers →
            </Link>
          </div>
        )}
      </section>
    </div>
  );
};

export default CareerDetailPage;
