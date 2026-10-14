const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

const Category = require('../models/Category');
const Subject = require('../models/Subject');
const Skill = require('../models/Skill');
const Career = require('../models/Career');
const Roadmap = require('../models/Roadmap');
const AlternativeCareer = require('../models/AlternativeCareer');
const User = require('../models/User');
const SavedCareer = require('../models/SavedCareer');
const RoadmapProgress = require('../models/RoadmapProgress');

const parseExtendedJSON = (jsonString) => {
  return JSON.parse(jsonString, (key, value) => {
    if (value && typeof value === 'object' && value.$oid && typeof value.$oid === 'string') {
      return new mongoose.Types.ObjectId(value.$oid);
    }
    return value;
  });
};

const loadJSON = (fileName) => {
  const filePath = path.join(__dirname, '../data', fileName);
  return parseExtendedJSON(fs.readFileSync(filePath, 'utf-8'));
};

const runMigration = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error('MONGODB_URI is missing from backend/.env');
    }

    console.log('--- CONNECTING TO MONGODB ATLAS ---');
    await mongoose.connect(mongoURI);
    console.log('✓ Connected successfully.\n');

    // 1. Check Pre-Migration State
    const initialUsers = await User.countDocuments();
    const initialCareers = await Career.countDocuments();
    const initialRoadmaps = await Roadmap.countDocuments();
    const initialAlt = await AlternativeCareer.countDocuments();
    const initialSaved = await SavedCareer.countDocuments();
    const initialProgress = await RoadmapProgress.countDocuments();

    console.log('Initial DB State:');
    console.log(`- Users: ${initialUsers}`);
    console.log(`- Careers: ${initialCareers}`);
    console.log(`- Roadmaps: ${initialRoadmaps}`);
    console.log(`- Alternative Careers: ${initialAlt}`);
    console.log(`- Saved Careers: ${initialSaved}`);
    console.log(`- Roadmap Progress: ${initialProgress}`);

    // Load new 100 datasets
    const categories = loadJSON('categories.json');
    const subjects = loadJSON('subjects.json');
    const skills = loadJSON('skills.json');
    const careers = loadJSON('careers.json');
    const roadmaps = loadJSON('roadmaps.json');
    const altCareers = loadJSON('alternativeCareers.json');

    const archiveReport = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/archived_careers_report.json'), 'utf-8'));
    const archivedSlugs = archiveReport.archivedCareers.map(c => c.slug);
    console.log(`\nArchived slugs to remove from active listings: ${archivedSlugs.length}`);

    // 2. Identify the 29 careers in MongoDB
    const careersToRemove = await Career.find({ slug: { $in: archivedSlugs } });
    const careerIdsToRemove = careersToRemove.map(c => c._id);
    console.log(`Found ${careerIdsToRemove.length} careers in MongoDB matching the 29 archived slugs.`);

    // 3. Remove references in AlternativeCareers
    if (careerIdsToRemove.length > 0) {
      const altDeleteResult = await AlternativeCareer.deleteMany({
        $or: [
          { career: { $in: careerIdsToRemove } },
          { alternativeCareer: { $in: careerIdsToRemove } }
        ]
      });
      console.log(`✓ Cleaned up ${altDeleteResult.deletedCount} alternative career links referencing archived careers.`);

      // 4. Clean up any SavedCareer or RoadmapProgress referencing archived careers (safeguard)
      const savedDeleteResult = await SavedCareer.deleteMany({ career: { $in: careerIdsToRemove } });
      console.log(`✓ Cleaned up ${savedDeleteResult.deletedCount} saved career records referencing archived careers.`);

      const roadmapsToRemove = await Roadmap.find({ career: { $in: careerIdsToRemove } });
      const roadmapIdsToRemove = roadmapsToRemove.map(r => r._id);
      const progressDeleteResult = await RoadmapProgress.deleteMany({ roadmap: { $in: roadmapIdsToRemove } });
      console.log(`✓ Cleaned up ${progressDeleteResult.deletedCount} roadmap progress records referencing archived roadmaps.`);

      // 5. Delete Roadmaps of archived careers
      const rmDeleteResult = await Roadmap.deleteMany({ career: { $in: careerIdsToRemove } });
      console.log(`✓ Removed ${rmDeleteResult.deletedCount} roadmaps for archived careers.`);

      // 6. Delete the 29 Careers
      const carDeleteResult = await Career.deleteMany({ _id: { $in: careerIdsToRemove } });
      console.log(`✓ Removed ${carDeleteResult.deletedCount} unselected careers from active collection.`);
    }

    // 7. Bulk Upsert the 100 Kept Careers, Roadmaps, and Updated Alternative Careers
    const bulkUpsert = async (Model, documents, modelName) => {
      if (!documents || documents.length === 0) return;
      const ops = documents.map((doc) => ({
        updateOne: {
          filter: { _id: doc._id },
          update: { $set: doc },
          upsert: true,
        },
      }));
      const res = await Model.bulkWrite(ops);
      console.log(`✓ [UPSERT] ${modelName}: Matched: ${res.matchedCount}, Modified: ${res.modifiedCount}, Upserted: ${res.upsertedCount}`);
    };

    console.log('\n--- UPSERTING AUDITED 100 CAREERS AND ROADMAPS ---');
    await bulkUpsert(Category, categories, 'Categories');
    await bulkUpsert(Subject, subjects, 'Subjects');
    await bulkUpsert(Skill, skills, 'Skills');
    await bulkUpsert(Career, careers, 'Careers');
    await bulkUpsert(Roadmap, roadmaps, 'Roadmaps');
    await bulkUpsert(AlternativeCareer, altCareers, 'AlternativeCareers');

    // 8. Post-Migration Verification
    const finalUsers = await User.countDocuments();
    const finalCareers = await Career.countDocuments();
    const finalRoadmaps = await Roadmap.countDocuments();
    const finalAlt = await AlternativeCareer.countDocuments();
    const finalSaved = await SavedCareer.countDocuments();
    const finalProgress = await RoadmapProgress.countDocuments();

    console.log('\n=== FINAL MONGODB ATLAS VERIFICATION ===');
    console.log(`Users:               ${finalUsers} (Untouched & Preserved: ${finalUsers === initialUsers ? 'PASS' : 'FAIL'})`);
    console.log(`Active Careers:      ${finalCareers} (Target exactly 100: ${finalCareers === 100 ? 'PASS' : 'FAIL'})`);
    console.log(`Active Roadmaps:     ${finalRoadmaps} (Target exactly 100: ${finalRoadmaps === 100 ? 'PASS' : 'FAIL'})`);
    console.log(`Alternative Careers: ${finalAlt} (Target exactly 51: ${finalAlt === 51 ? 'PASS' : 'FAIL'})`);
    console.log(`Saved Careers:       ${finalSaved} (Preserved: ${finalSaved >= 3 ? 'PASS' : 'FAIL'})`);
    console.log(`Roadmap Progress:    ${finalProgress} (Preserved: ${finalProgress >= 3 ? 'PASS' : 'FAIL'})`);

    if (finalCareers !== 100 || finalRoadmaps !== 100) {
      throw new Error(`Migration verification failed: Expected 100 careers and 100 roadmaps, got ${finalCareers} and ${finalRoadmaps}`);
    }

    // Verify category distribution
    const catCounts = await Career.aggregate([
      { $group: { _id: '$category', count: { $sum: 1 } } },
      { $lookup: { from: 'categories', localField: '_id', foreignField: '_id', as: 'cat' } },
      { $unwind: '$cat' },
      { $project: { categoryName: '$cat.name', count: 1 } },
      { $sort: { count: -1 } }
    ]);

    console.log('\n--- Active 100 Careers by Category in MongoDB Atlas ---');
    console.table(catCounts.map(c => ({ Category: c.categoryName, Careers: c.count })));

    await mongoose.disconnect();
    console.log('\n✅ MONGODB ATLAS MIGRATION TO EXACTLY 100 CAREERS COMPLETED SUCCESSFULLY!');
    process.exit(0);
  } catch (err) {
    console.error('\n❌ MIGRATION ERROR:', err);
    process.exit(1);
  }
};

runMigration();
