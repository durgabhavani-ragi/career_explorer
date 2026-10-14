// Migration script to update all 100 careers & roadmaps safely and idempotently
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Career = require('../models/Career');
const Roadmap = require('../models/Roadmap');
const User = require('../models/User');
const SavedCareer = require('../models/SavedCareer');
const RoadmapProgress = require('../models/RoadmapProgress');
const Category = require('../models/Category');
const Skill = require('../models/Skill');
const Subject = require('../models/Subject');
const { allCuratedCareers, validateAllCuratedCareers } = require('../data/career_curation/index');

async function run() {
  console.log('--- STARTING CAREER ROADMAP & QUALIFICATION MIGRATION ---');

  // Step 1: Pre-validation of curated dataset
  const validation = validateAllCuratedCareers();
  if (!validation.valid) {
    console.error('Curated dataset validation failed:', validation.errors);
    process.exit(1);
  }
  console.log(`Validated ${validation.count} curated careers successfully.`);

  // Step 2: Connect to MongoDB
  const mongoUri = process.env.MONGODB_URI;
  if (!mongoUri) {
    console.error('MONGODB_URI not found in environment.');
    process.exit(1);
  }

  await mongoose.connect(mongoUri);
  console.log('Connected to MongoDB Atlas successfully.');

  // Step 3: Check existing user state to confirm preservation
  const userCount = await User.countDocuments();
  const savedCount = await SavedCareer.countDocuments();
  const progressCount = await RoadmapProgress.countDocuments();
  console.log(`Existing state: ${userCount} users, ${savedCount} saved careers, ${progressCount} roadmap progress records.`);

  // Step 4: Map curated careers by slug
  const curatedMap = new Map();
  allCuratedCareers.forEach(c => curatedMap.set(c.slug, c));

  let careersUpdated = 0;
  let roadmapsUpdated = 0;
  let roadmapsCreated = 0;

  for (const curated of allCuratedCareers) {
    const slug = curated.slug;
    const careerDoc = await Career.findOne({ slug });

    if (!careerDoc) {
      console.warn(`WARNING: Career with slug "${slug}" not found in database!`);
      continue;
    }

    // Update Career document with Education Qualification
    careerDoc.educationQualification = {
      minimumQualification: curated.educationQualification.minimumQualification || '',
      preferredDegree: curated.educationQualification.preferredDegree || '',
      requiredProfessionalDegreeOrLicense: curated.educationQualification.requiredProfessionalDegreeOrLicense || '',
      mandatoryRequirements: curated.educationQualification.mandatoryRequirements || [],
      preferredQualifications: curated.educationQualification.preferredQualifications || [],
      eligibilityCriteria: Array.isArray(curated.educationQualification.eligibilityCriteria) 
        ? curated.educationQualification.eligibilityCriteria.join('. ') 
        : (curated.educationQualification.eligibilityCriteria || ''),
      regulatoryNotes: curated.educationQualification.regulatoryNotes || '',
    };

    // Update legacy fields for compatibility
    careerDoc.educationRequirements = curated.educationQualification.minimumQualification;
    careerDoc.eligibilityRequirements = careerDoc.educationQualification.regulatoryNotes || careerDoc.educationQualification.eligibilityCriteria;
    careerDoc.certificationsAndExams = [
      ...curated.educationQualification.mandatoryRequirements,
      ...(curated.educationQualification.preferredQualifications || [])
    ];

    await careerDoc.save();
    careersUpdated++;

    // Prepare Roadmap steps
    const mappedSteps = curated.roadmap.steps.map(step => {
      const durationMonths = step.durationMonths || 1;
      const durationText = step.durationText || `${durationMonths} ${durationMonths === 1 ? 'month' : 'months'}`;
      
      let stageType = 'Skill Acquisition';
      if (step.category === 'fundamentals') stageType = 'Skill Acquisition';
      else if (step.category === 'exam-prep') stageType = 'Examination Preparation';
      else if (step.category === 'practical') stageType = 'Practical Training & Internship';
      else if (step.category === 'certification') stageType = 'Licensing & Certification';
      else if (step.category === 'portfolio') stageType = 'Portfolio & Projects';
      else if (step.category === 'interview-prep') stageType = 'Recruitment & Job Search';

      return {
        stepNumber: step.stepNumber,
        title: step.title,
        description: step.description || '',
        durationMonths,
        durationText,
        category: step.category || 'skills',
        tasks: step.tasks || [],
        milestone: step.milestone || '',
        prerequisites: step.prerequisites || [],
        stageType,
        skillsToAcquire: step.tasks || [],
        activities: step.tasks || [],
        estimatedTime: durationText,
        completionCriteria: step.milestone || '',
        dependencies: Array.isArray(step.prerequisites) ? step.prerequisites.join(', ') : (step.prerequisites || ''),
        resources: (step.resources || []).map(r => ({
          title: r.title,
          url: r.url || '',
          type: r.type || 'official',
          isFree: r.isFree !== false,
        }))
      };
    });

    const totalDurationMonths = curated.roadmap.totalDurationMonths;
    const totalDurationFormatted = curated.roadmap.totalDurationFormatted;

    let roadmapDoc = await Roadmap.findOne({ career: careerDoc._id });

    if (roadmapDoc) {
      roadmapDoc.title = curated.roadmap.title || `${careerDoc.title} Job-Preparation Roadmap`;
      roadmapDoc.description = curated.roadmap.description || `Practical skill development and job-preparation roadmap for ${careerDoc.title}.`;
      roadmapDoc.totalDurationMonths = totalDurationMonths;
      roadmapDoc.totalDurationFormatted = totalDurationFormatted;
      roadmapDoc.totalEstimatedDuration = totalDurationFormatted;
      roadmapDoc.steps = mappedSteps;
      await roadmapDoc.save();
      roadmapsUpdated++;
    } else {
      roadmapDoc = await Roadmap.create({
        career: careerDoc._id,
        title: curated.roadmap.title || `${careerDoc.title} Job-Preparation Roadmap`,
        description: curated.roadmap.description || `Practical skill development and job-preparation roadmap for ${careerDoc.title}.`,
        totalDurationMonths,
        totalDurationFormatted,
        totalEstimatedDuration: totalDurationFormatted,
        steps: mappedSteps,
      });
      roadmapsCreated++;
    }
  }

  console.log(`\nMigration completed:`);
  console.log(`- Careers updated: ${careersUpdated}`);
  console.log(`- Roadmaps updated: ${roadmapsUpdated}`);
  console.log(`- Roadmaps created: ${roadmapsCreated}`);

  // Step 5: Post-migration verification
  const totalCareersNow = await Career.countDocuments();
  const totalRoadmapsNow = await Roadmap.countDocuments();
  console.log(`- Total Careers in DB: ${totalCareersNow}`);
  console.log(`- Total Roadmaps in DB: ${totalRoadmapsNow}`);

  // Check all roadmaps for compliance
  const allDbRoadmaps = await Roadmap.find({}).populate('career', 'slug title');
  let invalidSteps = 0;
  let yearMentions = 0;

  allDbRoadmaps.forEach(rm => {
    if (rm.totalDurationFormatted && rm.totalDurationFormatted.toLowerCase().includes('year')) {
      console.error(`ERROR: Roadmap for ${rm.career?.slug} has year in total duration: ${rm.totalDurationFormatted}`);
      yearMentions++;
    }
    rm.steps.forEach(s => {
      if (!s.durationMonths || s.durationMonths < 1 || s.durationMonths > 6) {
        console.error(`ERROR: Roadmap ${rm.career?.slug} step ${s.stepNumber} has invalid durationMonths: ${s.durationMonths}`);
        invalidSteps++;
      }
      if (s.durationText && s.durationText.toLowerCase().includes('year')) {
        console.error(`ERROR: Roadmap ${rm.career?.slug} step ${s.stepNumber} has year in durationText: ${s.durationText}`);
        yearMentions++;
      }
    });
  });

  if (invalidSteps === 0 && yearMentions === 0) {
    console.log('SUCCESS: All 100 roadmaps strictly adhere to month-only durations between 1 and 6 months!');
  } else {
    console.error(`ERRORS FOUND: ${invalidSteps} invalid step durations, ${yearMentions} year mentions.`);
  }

  // Confirm user data preservation
  const postUserCount = await User.countDocuments();
  const postSavedCount = await SavedCareer.countDocuments();
  const postProgressCount = await RoadmapProgress.countDocuments();
  console.log(`User data verification: ${postUserCount} users (was ${userCount}), ${postSavedCount} saved (was ${savedCount}), ${postProgressCount} progress (was ${progressCount}).`);

  // Step 6: Export updated data to local JSON files for synchronization
  const allFreshCareers = await Career.find({}).lean();
  const allFreshRoadmaps = await Roadmap.find({}).lean();

  const dataDir = path.join(__dirname, '../data');
  fs.writeFileSync(path.join(dataDir, 'careers.json'), JSON.stringify(allFreshCareers, null, 2), 'utf8');
  fs.writeFileSync(path.join(dataDir, 'roadmaps.json'), JSON.stringify(allFreshRoadmaps, null, 2), 'utf8');
  console.log('Saved updated datasets to backend/data/careers.json and backend/data/roadmaps.json');

  await mongoose.disconnect();
  console.log('Disconnected from MongoDB. Migration completed successfully.');
}

run().catch(err => {
  console.error('Migration failed:', err);
  process.exit(1);
});
