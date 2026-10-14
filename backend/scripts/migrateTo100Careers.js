const fs = require('fs');
const path = require('path');

// Load all audit data modules
const f1 = require('../data/audit/techCareersPart1.js');
const f2 = require('../data/audit/techCareersPart2.js');
const f3 = require('../data/audit/techCareersPart3.js');
const f4 = require('../data/audit/engineeringCareers.js');
const f5 = require('../data/audit/engineeringPart2.js');
const f6 = require('../data/audit/healthcareCareers.js');
const f7 = require('../data/audit/businessFinanceCareers.js');
const f8 = require('../data/audit/educationScienceCareers.js');
const f9 = require('../data/audit/artsDesignMediaCareers.js');
const f10 = require('../data/audit/governmentPublicCareers.js');
const f11 = require('../data/audit/otherCareers.js');

const allAudited = [
  ...f1, ...f2, ...f3, ...f4, ...f5, ...f6, ...f7, ...f8, ...f9, ...f10, ...f11
];

const auditedMap = new Map();
allAudited.forEach(c => auditedMap.set(c.slug, c));

const dataDir = path.join(__dirname, '../data');
const backupDir = path.join(dataDir, 'backup_129_careers');

// 1. Create Backup Directory if not exists
if (!fs.existsSync(backupDir)) {
  fs.mkdirSync(backupDir, { recursive: true });
}

const jsonFiles = [
  'careers.json',
  'roadmaps.json',
  'categories.json',
  'skills.json',
  'subjects.json',
  'alternativeCareers.json'
];

console.log('--- 1. Creating Full Backup of Existing 129 Career Data ---');
jsonFiles.forEach(file => {
  const src = path.join(dataDir, file);
  const dest = path.join(backupDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log(`Backed up ${file} -> backup_129_careers/${file}`);
  }
});

// Load original data
const careers = JSON.parse(fs.readFileSync(path.join(dataDir, 'careers.json'), 'utf-8'));
const roadmaps = JSON.parse(fs.readFileSync(path.join(dataDir, 'roadmaps.json'), 'utf-8'));
const alternativeCareers = JSON.parse(fs.readFileSync(path.join(dataDir, 'alternativeCareers.json'), 'utf-8'));
const categories = JSON.parse(fs.readFileSync(path.join(dataDir, 'categories.json'), 'utf-8'));

const getOid = (o) => (o && o.$oid) || o?._id || o;
const catMap = Object.fromEntries(categories.map(c => [getOid(c._id), c.name]));

// 29 Careers to be safely archived/removed
const removalReasons = {
  'mobile-app-developer': 'Subsumed by native Android Developer and iOS Developer specializations.',
  'ui-designer': 'Subsumed by UI/UX Designer (Product Designer) which unifies UI visual craft with UX research.',
  'ux-designer': 'Subsumed by UI/UX Designer (Product Designer) which unifies UX research with interface design.',
  'nlp-engineer': 'Subsumed under AI Engineer and Machine Learning Engineer specializations.',
  'computer-vision-engineer': 'Subsumed under AI Engineer and Machine Learning Engineer specializations.',
  'qa-engineer': 'Subsumed under modern Automation Test Engineer (SDET).',
  'mechatronics-engineer': 'Overlapping discipline covered by Robotics Engineer and Mechanical Engineer.',
  'structural-engineer': 'Post-graduate specialization subsumed under Civil Engineer.',
  'environmental-engineer': 'Subsumed under Environmental Scientist and Civil Engineer disciplines.',
  'automotive-engineer': 'Subsumed under Mechanical Engineer with automotive engineering specialization.',
  'industrial-engineer': 'Subsumed under Operations Manager and Mechanical Engineer.',
  'biochemist': 'Subsumed under Biotechnology Researcher and Clinical Laboratory sciences.',
  'epidemiologist': 'Subsumed under Public Health Specialist (MPH).',
  'investment-analyst': 'Subsumed under Financial Analyst (CFA / Equity Research).',
  'auditor': 'Subsumed under Chartered Accountant (CA) and Senior Accountant statutory auditing.',
  'risk-analyst': 'Subsumed under Actuary and Financial Analyst.',
  'supply-chain-analyst': 'Subsumed under Logistics & Supply Chain Manager and Operations Manager.',
  'lecturer': 'UGC 7th CPC officially re-designated Lecturer as Assistant Professor; covered by College Professor.',
  'academic-researcher': 'Subsumed under College Professor and Research Scientist.',
  'research-assistant': 'Subsumed under Research Scientist and academic doctoral fellowships.',
  'education-counselor': 'Subsumed under Clinical Psychologist and School Teacher guidance roles.',
  'special-education-teacher': 'Specialized branch subsumed under School Teacher and Rehabilitation Psychologist.',
  '3d-artist': 'Subsumed under 3D Character Animator and Game Developer.',
  'film-editor': 'Subsumed under Professional Video Editor & Post-Production Specialist.',
  'copywriter': 'Subsumed under Content Writer & Copywriter and Digital Marketer.',
  'seo-specialist': 'Subsumed under Digital Marketing Specialist and Content Writer.',
  'social-media-manager': 'Subsumed under Digital Marketing Specialist and Public Relations Specialist.',
  'legal-advisor': 'Subsumed under Corporate Lawyer and Litigation Advocate.',
  'event-manager': 'Subsumed under Public Relations Specialist and Hotel General Manager.'
};

const removalSlugs = new Set(Object.keys(removalReasons));

const keptOriginalCareers = careers.filter(c => !removalSlugs.has(c.slug));
const removedOriginalCareers = careers.filter(c => removalSlugs.has(c.slug));

console.log(`\nOriginal careers count: ${careers.length}`);
console.log(`Target removal count: ${removedOriginalCareers.length}`);
console.log(`Target kept count: ${keptOriginalCareers.length}`);

if (keptOriginalCareers.length !== 100 || removedOriginalCareers.length !== 29) {
  throw new Error(`Expected exactly 100 kept and 29 removed, got ${keptOriginalCareers.length} and ${removedOriginalCareers.length}`);
}

const removedCareerIds = new Set(removedOriginalCareers.map(c => getOid(c._id)));

// 2. Generate Archived Careers Report
const archiveReport = {
  generatedAt: new Date().toISOString(),
  totalArchived: removedOriginalCareers.length,
  totalActiveRetained: keptOriginalCareers.length,
  archivedCareers: removedOriginalCareers.map(c => ({
    slug: c.slug,
    title: c.title,
    id: getOid(c._id),
    category: catMap[getOid(c.category)],
    reasonForArchival: removalReasons[c.slug]
  }))
};

fs.writeFileSync(
  path.join(dataDir, 'archived_careers_report.json'),
  JSON.stringify(archiveReport, null, 2),
  'utf-8'
);
console.log('✓ Written data/archived_careers_report.json');

// 3. Process the 100 Kept Careers with Audited Data
const finalCareers = keptOriginalCareers.map(orig => {
  const audit = auditedMap.get(orig.slug);
  if (!audit) {
    throw new Error(`Missing audit data for kept career: ${orig.slug}`);
  }

  return {
    _id: orig._id,
    title: audit.title || orig.title,
    slug: orig.slug,
    category: orig.category,
    description: audit.description || orig.description,
    educationRequirements: audit.educationRequirements || orig.educationRequirements,
    educationPathways: audit.educationPathways || [],
    eligibilityRequirements: audit.eligibilityRequirements || '',
    certificationsAndExams: audit.certificationsAndExams || [],
    workEnvironment: audit.workEnvironment || orig.workEnvironment || '',
    marketDemand: audit.marketDemand || orig.marketDemand || 'High',
    jobOutlook: audit.jobOutlook || orig.jobOutlook || '',
    skills: orig.skills || [],
    subjects: orig.subjects || [],
    salaryRange: audit.salaryRange || { min: orig.salaryMin || 400000, max: orig.salaryMax || 1500000, currency: 'INR', source: audit.salarySource || 'AmbitionBox India 2024' },
    salarySource: audit.salarySource || 'AmbitionBox India 2024',
    salaryByExperience: audit.salaryByExperience || {
      entryLevel: { min: orig.salaryMin || 400000, max: 700000, label: 'Entry Level (0–2 yrs)' },
      earlyCareer: { min: 700000, max: 1300000, label: 'Early Career (3–5 yrs)' },
      experienced: { min: 1300000, max: orig.salaryMax || 2200000, label: 'Experienced (6–10+ yrs)' },
      payPeriod: 'Annual',
      salaryNote: 'Compensation varies based on company tier, metro location, and demonstrated competency.'
    },
    careerProgression: audit.careerProgression || [],
    employmentSectors: audit.employmentSectors || {
      government: 'Public sector departments and statutory organizations',
      privateSector: 'Private enterprises, GCCs, and specialized consultancies'
    },
    timelineOverview: audit.timelineOverview || {
      totalEstimatedDuration: '3–4 Years Degree + 6 Months Internship/Prep',
      educationDuration: '3–4 Years',
      prepDuration: '3–6 Months dedicated preparation',
      practicalTrainingDuration: '3–6 Months industrial internship',
      jobSearchDuration: '2–4 Months hiring placement cycle',
      overlapNotes: 'Internships and project portfolios proceed during academic coursework.',
      confidenceNote: 'Timelines reflect standard Indian graduation and recruitment norms.'
    },
    sources: audit.sources || [
      { title: 'National Career Service Portal', url: 'https://www.ncs.gov.in', sourceAuthority: 'Ministry of Labour & Employment', verifiedDate: '2024-10-14' },
      { title: 'AmbitionBox Salary Benchmarks India', url: 'https://www.ambitionbox.com', sourceAuthority: 'AmbitionBox India', verifiedDate: '2024-10-14' }
    ],
    lastVerified: audit.lastVerified || '2024-10-14'
  };
});

fs.writeFileSync(path.join(dataDir, 'careers.json'), JSON.stringify(finalCareers, null, 2), 'utf-8');
console.log(`✓ Updated data/careers.json with exactly ${finalCareers.length} active careers.`);

// 4. Process Roadmaps for the 100 Kept Careers
const keptCareerIdMap = new Map(finalCareers.map(c => [getOid(c._id), c]));
const roadmapByCareerId = new Map();
roadmaps.forEach(r => {
  const cid = getOid(r.career);
  if (cid) {
    roadmapByCareerId.set(cid, r);
  }
});

let roadmapIdCounter = 1;
const finalRoadmaps = finalCareers.map(c => {
  const cid = getOid(c._id);
  const origRoadmap = roadmapByCareerId.get(cid);
  const audit = auditedMap.get(c.slug);
  const auditRoadmap = audit?.roadmap;

  // Format steps
  let rawSteps = (auditRoadmap && auditRoadmap.steps) || (origRoadmap && origRoadmap.steps) || [];
  const formattedSteps = rawSteps.map((s, idx) => ({
    stepNumber: s.stepNumber || idx + 1,
    title: s.title,
    stageType: s.stageType || (idx === 0 ? 'education' : idx === rawSteps.length - 1 ? 'job_search' : 'skill_acquisition'),
    duration: s.duration || s.estimatedTime || '3–6 Months',
    estimatedTime: s.duration || s.estimatedTime || '3–6 Months', // maintain backward compatibility
    description: s.description || '',
    topics: s.topics || [],
    skillsToAcquire: s.skillsToAcquire || [],
    activities: s.activities || [],
    completionCriteria: s.completionCriteria || 'Demonstrate mastery of core concepts and project milestones.',
    dependencies: s.dependencies || (idx === 0 ? 'Basic eligibility criteria' : `Completion of Step ${idx}`),
    resources: (s.resources || []).map(r => ({
      title: r.title || r.name,
      name: r.name || r.title,
      url: r.url,
      type: r.type || 'Course',
      isFree: r.isFree !== undefined ? r.isFree : true
    }))
  }));

  return {
    _id: origRoadmap?._id || { $oid: `6500000000000000000005${String(roadmapIdCounter++).padStart(2, '0')}` },
    career: c._id,
    title: auditRoadmap?.title || origRoadmap?.title || `${c.title} Career Roadmap`,
    description: auditRoadmap?.description || origRoadmap?.description || `Professional preparation pathway for ${c.title} in India.`,
    totalEstimatedDuration: auditRoadmap?.totalEstimatedDuration || c.timelineOverview?.totalEstimatedDuration || '3–4 Years',
    durationBreakdown: auditRoadmap?.durationBreakdown || c.timelineOverview?.educationDuration || 'Education: 3-4 Years | Practical Training: 6-12 Months',
    overlapNotes: auditRoadmap?.overlapNotes || c.timelineOverview?.overlapNotes || 'Practical projects proceed in parallel with studies.',
    steps: formattedSteps
  };
});

fs.writeFileSync(path.join(dataDir, 'roadmaps.json'), JSON.stringify(finalRoadmaps, null, 2), 'utf-8');
console.log(`✓ Updated data/roadmaps.json with exactly ${finalRoadmaps.length} active roadmaps.`);

// 5. Filter Alternative Careers - remove any reference to removed career IDs
const finalAlternativeCareers = alternativeCareers.filter(ac => {
  const cId = getOid(ac.career);
  const altId = getOid(ac.alternativeCareer);
  const cIsRemoved = removedCareerIds.has(cId);
  const altIsRemoved = removedCareerIds.has(altId);
  return !cIsRemoved && !altIsRemoved;
});

fs.writeFileSync(path.join(dataDir, 'alternativeCareers.json'), JSON.stringify(finalAlternativeCareers, null, 2), 'utf-8');
console.log(`✓ Updated data/alternativeCareers.json: pruned from ${alternativeCareers.length} to ${finalAlternativeCareers.length} valid mappings (0 broken references).`);

// 6. Summary Validation
console.log('\n=== MIGRATION TO TOP 100 CAREERS COMPLETE ===');
console.log(`✓ Active Careers: ${finalCareers.length}`);
console.log(`✓ Active Roadmaps: ${finalRoadmaps.length}`);
console.log(`✓ Alternative Career Mappings: ${finalAlternativeCareers.length}`);
console.log(`✓ Backup saved in: backend/data/backup_129_careers/`);
console.log(`✓ Archive Report saved in: backend/data/archived_careers_report.json`);
