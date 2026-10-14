const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: path.join(__dirname, '../.env') });

const User = require('../models/User');
const Career = require('../models/Career');
const Roadmap = require('../models/Roadmap');
const AlternativeCareer = require('../models/AlternativeCareer');
const SavedCareer = require('../models/SavedCareer');
const RoadmapProgress = require('../models/RoadmapProgress');

const inspect = async () => {
  try {
    console.log('Connecting to MongoDB Atlas...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected.');

    const userCount = await User.countDocuments();
    const careerCount = await Career.countDocuments();
    const roadmapCount = await Roadmap.countDocuments();
    const altCount = await AlternativeCareer.countDocuments();
    const savedCount = await SavedCareer.countDocuments();
    const progressCount = await RoadmapProgress.countDocuments();

    console.log('\n--- Current MongoDB Atlas Document Counts ---');
    console.log(`Users:               ${userCount}`);
    console.log(`Careers:             ${careerCount}`);
    console.log(`Roadmaps:            ${roadmapCount}`);
    console.log(`Alternative Careers: ${altCount}`);
    console.log(`Saved Careers:       ${savedCount}`);
    console.log(`Roadmap Progress:    ${progressCount}`);

    // Inspect saved careers and progress
    const savedCareers = await SavedCareer.find().populate('career', 'slug title');
    console.log('\nSaved Careers:');
    savedCareers.forEach(s => console.log(`- User: ${s.user}, Career: ${s.career ? s.career.slug : 'BROKEN'} (${s.career ? s.career.title : 'null'})`));

    const progress = await RoadmapProgress.find().populate({
      path: 'roadmap',
      populate: { path: 'career', select: 'slug title' }
    });
    console.log('\nRoadmap Progress:');
    progress.forEach(p => console.log(`- User: ${p.user}, Roadmap for: ${p.roadmap && p.roadmap.career ? p.roadmap.career.slug : 'null'} (${p.roadmap ? p.roadmap.title : 'null'})`));

    await mongoose.disconnect();
    console.log('\nDisconnected.');
  } catch (err) {
    console.error('Error:', err);
    process.exit(1);
  }
};

inspect();
