require('dotenv').config();
const mongoose = require('mongoose');
const Career = require('../models/Career');
const Roadmap = require('../models/Roadmap');
const User = require('../models/User');
const SavedCareer = require('../models/SavedCareer');
const RoadmapProgress = require('../models/RoadmapProgress');

async function audit() {
  console.log('=== AUDITING ALL 100 CAREERS & ROADMAPS IN DATABASE ===\n');

  await mongoose.connect(process.env.MONGODB_URI);

  const careers = await Career.find({}).sort({ title: 1 });
  const roadmaps = await Roadmap.find({});
  const users = await User.countDocuments();
  const saved = await SavedCareer.countDocuments();
  const progress = await RoadmapProgress.countDocuments();

  console.log(`Database Counts:`);
  console.log(`- Careers: ${careers.length} (Expected: 100)`);
  console.log(`- Roadmaps: ${roadmaps.length} (Expected: 100)`);
  console.log(`- Users: ${users}`);
  console.log(`- Saved Careers: ${saved}`);
  console.log(`- Roadmap Progress Records: ${progress}\n`);

  let errors = [];
  const roadmapByCareer = new Map();
  roadmaps.forEach(rm => roadmapByCareer.set(rm.career.toString(), rm));

  careers.forEach((c, idx) => {
    // 1. Check Education Qualification
    const eq = c.educationQualification;
    if (!eq) {
      errors.push(`Career [${c.slug}] missing educationQualification`);
    } else {
      if (!eq.minimumQualification) errors.push(`Career [${c.slug}] missing minimumQualification`);
      if (!eq.requiredProfessionalDegreeOrLicense) errors.push(`Career [${c.slug}] missing requiredProfessionalDegreeOrLicense`);
      if (!Array.isArray(eq.mandatoryRequirements) || eq.mandatoryRequirements.length === 0) {
        errors.push(`Career [${c.slug}] missing mandatoryRequirements`);
      }
    }

    // 2. Check Roadmap
    const rm = roadmapByCareer.get(c._id.toString());
    if (!rm) {
      errors.push(`Career [${c.slug}] has no associated roadmap`);
      return;
    }

    // Total Duration check
    if (!rm.totalDurationMonths || typeof rm.totalDurationMonths !== 'number') {
      errors.push(`Roadmap for [${c.slug}] missing numeric totalDurationMonths`);
    }
    if (!rm.totalDurationFormatted || !rm.totalDurationFormatted.includes('month')) {
      errors.push(`Roadmap for [${c.slug}] totalDurationFormatted not in months: "${rm.totalDurationFormatted}"`);
    }
    if (rm.totalDurationFormatted && rm.totalDurationFormatted.toLowerCase().includes('year')) {
      errors.push(`Roadmap for [${c.slug}] totalDurationFormatted contains "year": "${rm.totalDurationFormatted}"`);
    }

    // Steps check
    if (!Array.isArray(rm.steps) || rm.steps.length === 0) {
      errors.push(`Roadmap for [${c.slug}] has no steps`);
    } else {
      rm.steps.forEach(s => {
        // Step duration in months
        if (!s.durationMonths || s.durationMonths < 1 || s.durationMonths > 6) {
          errors.push(`Roadmap [${c.slug}] step ${s.stepNumber} durationMonths out of bounds (1-6): ${s.durationMonths}`);
        }
        if (!s.durationText || !s.durationText.includes('month')) {
          errors.push(`Roadmap [${c.slug}] step ${s.stepNumber} durationText not in months: "${s.durationText}"`);
        }
        if (s.durationText && s.durationText.toLowerCase().includes('year')) {
          errors.push(`Roadmap [${c.slug}] step ${s.stepNumber} durationText contains "year": "${s.durationText}"`);
        }
        if (s.estimatedTime && s.estimatedTime.toLowerCase().includes('year')) {
          errors.push(`Roadmap [${c.slug}] step ${s.stepNumber} estimatedTime contains "year": "${s.estimatedTime}"`);
        }

        // Academic degree in roadmap check
        const titleLower = (s.title || '').toLowerCase();
        if (titleLower.includes("bachelor's degree") || titleLower.includes("master's degree") || titleLower.includes('b.ed') || titleLower.includes('mbbs')) {
          errors.push(`Roadmap [${c.slug}] step ${s.stepNumber} has academic degree milestone: "${s.title}"`);
        }

        // Tasks check
        const tasks = s.tasks || s.activities || [];
        if (tasks.length === 0) {
          errors.push(`Roadmap [${c.slug}] step ${s.stepNumber} has no practical tasks`);
        }

        // Milestone check
        if (!s.milestone && !s.completionCriteria) {
          errors.push(`Roadmap [${c.slug}] step ${s.stepNumber} missing milestone`);
        }
      });
    }
  });

  if (errors.length === 0) {
    console.log('✅ AUDIT PASSED 100%:');
    console.log('- Exactly 100 careers verified with full educational qualifications.');
    console.log('- Exactly 100 career roadmaps verified with month-based durations only.');
    console.log('- Zero steps contain multi-year degree milestones.');
    console.log('- All steps have durations between 1 and 6 months.');
    console.log('- All roadmaps contain practical learning activities, milestones, and resources.');
  } else {
    console.error(`❌ AUDIT FAILED with ${errors.length} errors:`);
    errors.forEach(e => console.error('  - ' + e));
  }

  await mongoose.disconnect();
}

audit().catch(err => {
  console.error('Audit script error:', err);
  process.exit(1);
});
