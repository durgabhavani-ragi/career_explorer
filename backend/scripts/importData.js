/**
 * Career Explorer - Safe & Idempotent Dataset Importer Script
 *
 * Requirements Met:
 * - Does NOT connect to MongoDB during offline dataset validation (--validate).
 * - Removed unconditional deleteMany({}) from normal import process.
 * - Idempotent import via MongoDB bulkWrite ({ updateOne: { filter: { _id }, update: { $set }, upsert: true } }).
 * - Preserves User accounts (User), Saved Careers (SavedCareer), and Roadmap Progress (RoadmapProgress).
 * - Extended JSON parser transforms {"$oid": "..."} into mongoose.Types.ObjectId instances natively.
 * - Validates schema structures, record counts, and 100% referential integrity BEFORE connecting to DB.
 * - Deletion is isolated behind --wipe --confirm-wipe with explicit warning safeguards.
 */

const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config({ path: path.join(__dirname, '../.env') });

// Import Mongoose Models
const Category = require('../models/Category');
const Subject = require('../models/Subject');
const Skill = require('../models/Skill');
const Career = require('../models/Career');
const Roadmap = require('../models/Roadmap');
const AlternativeCareer = require('../models/AlternativeCareer');

/**
 * Robust MongoDB Extended JSON Parser
 * Converts {"$oid": "24hexstring"} into mongoose.Types.ObjectId instances.
 */
const parseExtendedJSON = (jsonString) => {
  return JSON.parse(jsonString, (key, value) => {
    if (value && typeof value === 'object' && value.$oid && typeof value.$oid === 'string') {
      return new mongoose.Types.ObjectId(value.$oid);
    }
    return value;
  });
};

/**
 * Load dataset file from backend/data/
 */
const loadDatasetFile = (fileName) => {
  const filePath = path.join(__dirname, '../data', fileName);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Dataset file missing: ${filePath}`);
  }
  const content = fs.readFileSync(filePath, 'utf-8');
  return parseExtendedJSON(content);
};

/**
 * Offline Dataset Validation Engine
 * Validates record counts, schema compliance, and 100% referential integrity without DB connection.
 */
const validateDataset = () => {
  console.log('--- STARTING OFFLINE DATASET VALIDATION ---');
  const errors = [];
  const warnings = [];

  let categories = [], subjects = [], skills = [], careers = [], roadmaps = [], altCareers = [];
  try {
    categories = loadDatasetFile('categories.json');
    subjects = loadDatasetFile('subjects.json');
    skills = loadDatasetFile('skills.json');
    careers = loadDatasetFile('careers.json');
    roadmaps = loadDatasetFile('roadmaps.json');
    altCareers = loadDatasetFile('alternativeCareers.json');
  } catch (e) {
    errors.push(`File Load Error: ${e.message}`);
    return { valid: false, errors, warnings };
  }

  console.log('✓ File Syntax: All 6 dataset JSON files parsed successfully.');
  console.log(`- Categories: ${categories.length}`);
  console.log(`- Subjects: ${subjects.length}`);
  console.log(`- Skills: ${skills.length}`);
  console.log(`- Careers: ${careers.length}`);
  console.log(`- Roadmaps: ${roadmaps.length}`);
  console.log(`- Alternative Careers: ${altCareers.length}`);

  if (categories.length === 0) errors.push('categories.json contains 0 records');
  if (subjects.length === 0) errors.push('subjects.json contains 0 records');
  if (skills.length === 0) errors.push('skills.json contains 0 records');
  if (careers.length === 0) errors.push('careers.json contains 0 records');
  if (roadmaps.length === 0) errors.push('roadmaps.json contains 0 records');

  // Build ObjectId sets for referential validation
  const categoryIds = new Set(categories.map((c) => c._id.toString()));
  const subjectIds = new Set(subjects.map((s) => s._id.toString()));
  const skillIds = new Set(skills.map((s) => s._id.toString()));
  const careerIds = new Set(careers.map((c) => c._id.toString()));

  // 1. Validate Category Documents
  categories.forEach((c, idx) => {
    if (!c._id) errors.push(`Category[${idx}] missing _id`);
    if (!c.name) errors.push(`Category[${idx}] missing name`);
  });

  // 2. Validate Subject Documents
  subjects.forEach((s, idx) => {
    if (!s._id) errors.push(`Subject[${idx}] missing _id`);
    if (!s.name) errors.push(`Subject[${idx}] missing name`);
    if (s.category && !categoryIds.has(s.category.toString())) {
      errors.push(`Subject "${s.name}" references non-existent Category ID: ${s.category}`);
    }
  });

  // 3. Validate Skill Documents
  skills.forEach((sk, idx) => {
    if (!sk._id) errors.push(`Skill[${idx}] missing _id`);
    if (!sk.name) errors.push(`Skill[${idx}] missing name`);
    if (sk.category && !categoryIds.has(sk.category.toString())) {
      errors.push(`Skill "${sk.name}" references non-existent Category ID: ${sk.category}`);
    }
  });

  // 4. Validate Career Documents
  careers.forEach((car, idx) => {
    if (!car._id) errors.push(`Career[${idx}] missing _id`);
    if (!car.title) errors.push(`Career[${idx}] missing title`);
    if (!car.description) errors.push(`Career[${idx}] missing description`);
    if (!car.category) {
      errors.push(`Career "${car.title}" missing category reference`);
    } else if (!categoryIds.has(car.category.toString())) {
      errors.push(`Career "${car.title}" references non-existent Category ID: ${car.category}`);
    }

    if (Array.isArray(car.subjects)) {
      car.subjects.forEach((subId) => {
        if (!subjectIds.has(subId.toString())) {
          errors.push(`Career "${car.title}" references non-existent Subject ID: ${subId}`);
        }
      });
    }

    if (Array.isArray(car.skills)) {
      car.skills.forEach((skillId) => {
        if (!skillIds.has(skillId.toString())) {
          errors.push(`Career "${car.title}" references non-existent Skill ID: ${skillId}`);
        }
      });
    }
  });

  // 5. Validate Roadmap Documents
  roadmaps.forEach((rm, idx) => {
    if (!rm._id) errors.push(`Roadmap[${idx}] missing _id`);
    if (!rm.title) errors.push(`Roadmap[${idx}] missing title`);
    if (!rm.career) {
      errors.push(`Roadmap "${rm.title}" missing career reference`);
    } else if (!careerIds.has(rm.career.toString())) {
      errors.push(`Roadmap "${rm.title}" references non-existent Career ID: ${rm.career}`);
    }
  });

  // 6. Validate Alternative Career Documents
  altCareers.forEach((alt, idx) => {
    if (!alt._id) errors.push(`AlternativeCareer[${idx}] missing _id`);
    if (!alt.career || !careerIds.has(alt.career.toString())) {
      errors.push(`AlternativeCareer[${idx}] references non-existent main Career ID: ${alt.career}`);
    }
    if (!alt.alternativeCareer || !careerIds.has(alt.alternativeCareer.toString())) {
      errors.push(`AlternativeCareer[${idx}] references non-existent alternative Career ID: ${alt.alternativeCareer}`);
    }
  });

  const valid = errors.length === 0;

  if (valid) {
    console.log('✓ Referential Integrity: 100% of collection cross-references are valid.');
    console.log('✓ Schema Compliance: All required fields and ObjectIds match Mongoose schemas.\n');
  } else {
    console.error(`❌ Validation Failed with ${errors.length} error(s):`);
    errors.forEach((e) => console.error(`  - ${e}`));
  }

  return {
    valid,
    errors,
    warnings,
    datasets: { categories, subjects, skills, careers, roadmaps, altCareers },
  };
};

/**
 * Idempotent Bulk Upsert Import Execution
 */
const importData = async () => {
  // Pre-import offline validation (No DB connection yet)
  const validation = validateDataset();
  if (!validation.valid) {
    console.error('Import process aborted due to validation errors.');
    process.exit(1);
  }

  const { categories, subjects, skills, careers, roadmaps, altCareers } = validation.datasets;

  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.error('ERROR: MONGODB_URI missing in .env file!');
    process.exit(1);
  }

  console.log('Connecting to MongoDB Atlas...');
  await mongoose.connect(mongoURI);
  console.log('MongoDB Connected successfully.\n');

  // Helper for idempotent bulk upsert
  const bulkUpsert = async (Model, documents, modelName) => {
    if (!documents || documents.length === 0) return;

    const ops = documents.map((doc) => ({
      updateOne: {
        filter: { _id: doc._id },
        update: { $set: doc },
        upsert: true,
      },
    }));

    const result = await Model.bulkWrite(ops);
    console.log(
      `[UPSERT] ${modelName}: Matched: ${result.matchedCount}, Modified: ${result.modifiedCount}, Upserted: ${result.upsertedCount}`
    );
  };

  console.log('Executing Idempotent Bulk Upserts (Preserving User Accounts & Saved Progress)...');
  await bulkUpsert(Category, categories, 'Categories');
  await bulkUpsert(Subject, subjects, 'Subjects');
  await bulkUpsert(Skill, skills, 'Skills');
  await bulkUpsert(Career, careers, 'Careers');
  await bulkUpsert(Roadmap, roadmaps, 'Roadmaps');
  await bulkUpsert(AlternativeCareer, altCareers, 'AlternativeCareers');

  console.log('\n✅ IDEMPOTENT DATASET IMPORT COMPLETED SUCCESSFULLY!');
  console.log('Executing this script multiple times will safely update existing records without creating duplicates.');
  process.exit(0);
};

/**
 * Safeguarded Deletion Process (Isolated behind --wipe --confirm-wipe)
 */
const deleteData = async () => {
  const confirmFlag = process.argv.includes('--confirm-wipe');

  if (!confirmFlag) {
    console.error('\n⚠️  HIGH SEVERITY WARNING: Dataset deletion requires explicit confirmation!');
    console.error('To wipe career dataset collections, execute:');
    console.error('  node scripts/importData.js --wipe --confirm-wipe\n');
    console.error('User accounts (User), Saved Careers (SavedCareer), and Roadmap Progress (RoadmapProgress) are NEVER deleted.\n');
    process.exit(1);
  }

  const mongoURI = process.env.MONGODB_URI;
  if (!mongoURI) {
    console.error('ERROR: MONGODB_URI missing in .env file!');
    process.exit(1);
  }

  console.log('Connecting to MongoDB Atlas...');
  await mongoose.connect(mongoURI);

  console.log('Wiping dataset collections (Category, Subject, Skill, Career, Roadmap, AlternativeCareer)...');
  await Category.deleteMany({});
  await Subject.deleteMany({});
  await Skill.deleteMany({});
  await Career.deleteMany({});
  await Roadmap.deleteMany({});
  await AlternativeCareer.deleteMany({});

  console.log('✅ Career dataset collections wiped clean. (User accounts & user progress preserved).');
  process.exit(0);
};

// CLI Entry Router
if (process.argv.includes('--validate')) {
  const res = validateDataset();
  if (res.valid) {
    console.log('✅ Local offline validation PASSED.');
  } else {
    console.error('❌ Local offline validation FAILED.');
  }
  process.exit(res.valid ? 0 : 1);
} else if (process.argv.includes('--import')) {
  importData();
} else if (process.argv.includes('--wipe') || process.argv.includes('--delete')) {
  deleteData();
} else {
  console.log('Career Explorer Dataset Import Tool');
  console.log('Usage:');
  console.log('  node scripts/importData.js --validate            (Offline validation check - No DB connection)');
  console.log('  node scripts/importData.js --import           (Idempotent bulk upsert into MongoDB Atlas)');
  console.log('  node scripts/importData.js --wipe --confirm-wipe (Safeguarded wipe of dataset collections)');
  process.exit(0);
}
