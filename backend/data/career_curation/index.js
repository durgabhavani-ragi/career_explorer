// Master Index for All 100 Curated Careers & Roadmaps
const fs = require('fs');
const path = require('path');

const technologyCareersObj = require('./technologyCareers');
const engineeringCareersMod = require('./engineeringCareers');
const healthcareCareersMod = require('./healthcareCareers');
const businessCareersMod = require('./businessCareers');
const artsCareersMod = require('./artsCareers');
const educationScienceCareersMod = require('./educationScienceCareers');
const governmentCareersMod = require('./governmentCareers');
const otherCareersMod = require('./otherCareers');

// Load atlas backup to ensure canonical titles
let atlasTitles = {};
try {
  const atlasPath = path.join(__dirname, '../backup_100_before_roadmap_revamp/careers_atlas_backup.json');
  if (fs.existsSync(atlasPath)) {
    const atlas = JSON.parse(fs.readFileSync(atlasPath, 'utf8'));
    atlas.forEach(c => {
      atlasTitles[c.slug] = c.title;
    });
  }
} catch (e) {
  // fallback if file not readable
}

function normalizeModule(mod) {
  if (Array.isArray(mod)) {
    return mod.map(item => ({
      slug: item.slug,
      title: atlasTitles[item.slug] || item.title || item.slug,
      educationQualification: item.educationQualification,
      roadmap: item.roadmap
    }));
  }
  return Object.entries(mod).map(([slug, data]) => ({
    slug,
    title: atlasTitles[slug] || data.title || (data.roadmap && data.roadmap.title ? data.roadmap.title.replace(/ Job-Preparation Roadmap$/i, '') : slug),
    educationQualification: data.educationQualification,
    roadmap: data.roadmap
  }));
}

const allCuratedCareers = [
  ...normalizeModule(technologyCareersObj),
  ...normalizeModule(engineeringCareersMod),
  ...normalizeModule(healthcareCareersMod),
  ...normalizeModule(businessCareersMod),
  ...normalizeModule(artsCareersMod),
  ...normalizeModule(educationScienceCareersMod),
  ...normalizeModule(governmentCareersMod),
  ...normalizeModule(otherCareersMod)
];

// Ensure all careers have canonical title from atlas and durationText
allCuratedCareers.forEach(c => {
  if (atlasTitles[c.slug]) {
    c.title = atlasTitles[c.slug];
  }
  if (c.roadmap && Array.isArray(c.roadmap.steps)) {
    c.roadmap.steps.forEach(step => {
      if (!step.durationText && step.durationMonths) {
        step.durationText = `${step.durationMonths} ${step.durationMonths === 1 ? 'month' : 'months'}`;
      }
    });
  }
});

function validateAllCuratedCareers(expectedSlugs = null) {
  const errors = [];
  const slugsSeen = new Set();

  if (allCuratedCareers.length !== 100) {
    errors.push(`Expected exactly 100 curated careers, got ${allCuratedCareers.length}`);
  }

  allCuratedCareers.forEach((career, idx) => {
    const { slug, title, educationQualification, roadmap } = career;
    if (!slug) errors.push(`Career at index ${idx} missing slug`);
    if (!title) errors.push(`Career ${slug} missing title`);
    if (slugsSeen.has(slug)) errors.push(`Duplicate slug: ${slug}`);
    slugsSeen.add(slug);

    // Validate educationQualification
    if (!educationQualification) {
      errors.push(`Career ${slug} missing educationQualification`);
    } else {
      if (!educationQualification.minimumQualification) errors.push(`Career ${slug} missing minimumQualification`);
      if (!educationQualification.requiredProfessionalDegreeOrLicense) errors.push(`Career ${slug} missing requiredProfessionalDegreeOrLicense`);
      if (!Array.isArray(educationQualification.mandatoryRequirements) || educationQualification.mandatoryRequirements.length === 0) {
        errors.push(`Career ${slug} missing mandatoryRequirements array`);
      }
    }

    // Validate roadmap
    if (!roadmap) {
      errors.push(`Career ${slug} missing roadmap`);
    } else {
      if (!roadmap.totalDurationMonths || typeof roadmap.totalDurationMonths !== 'number') {
        errors.push(`Career ${slug} missing numeric totalDurationMonths`);
      }
      if (!roadmap.totalDurationFormatted || !roadmap.totalDurationFormatted.includes('month')) {
        errors.push(`Career ${slug} totalDurationFormatted must be in months: ${roadmap.totalDurationFormatted}`);
      }
      if (roadmap.totalDurationFormatted && roadmap.totalDurationFormatted.toLowerCase().includes('year')) {
        errors.push(`Career ${slug} totalDurationFormatted contains 'year': ${roadmap.totalDurationFormatted}`);
      }

      if (!Array.isArray(roadmap.steps) || roadmap.steps.length === 0) {
        errors.push(`Career ${slug} has no roadmap steps`);
      } else {
        roadmap.steps.forEach((step, stepIdx) => {
          if (!step.title) errors.push(`Career ${slug} step ${stepIdx + 1} missing title`);
          if (typeof step.durationMonths !== 'number' || step.durationMonths < 1 || step.durationMonths > 6) {
            errors.push(`Career ${slug} step ${stepIdx + 1} durationMonths (${step.durationMonths}) must be between 1 and 6`);
          }
          if (!step.durationText || !step.durationText.includes('month')) {
            errors.push(`Career ${slug} step ${stepIdx + 1} durationText must be in months: ${step.durationText}`);
          }
          if (step.durationText && step.durationText.toLowerCase().includes('year')) {
            errors.push(`Career ${slug} step ${stepIdx + 1} durationText contains 'year': ${step.durationText}`);
          }
          // Verify no step description or title treats academic degrees as short-term roadmap steps
          const titleLower = (step.title || '').toLowerCase();
          if (titleLower.includes("bachelor's degree") || titleLower.includes("master's degree") || titleLower.includes('earn a b.ed') || titleLower.includes('complete mbbs')) {
            errors.push(`Career ${slug} step ${stepIdx + 1} mistakenly includes multi-year academic degree in roadmap step: ${step.title}`);
          }
        });
      }
    }
  });

  if (expectedSlugs && Array.isArray(expectedSlugs)) {
    expectedSlugs.forEach(expectedSlug => {
      if (!slugsSeen.has(expectedSlug)) {
        errors.push(`Missing expected slug in curation: ${expectedSlug}`);
      }
    });
  }

  return {
    valid: errors.length === 0,
    count: allCuratedCareers.length,
    errors
  };
}

module.exports = {
  allCuratedCareers,
  validateAllCuratedCareers
};
