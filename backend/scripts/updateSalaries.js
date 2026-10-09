/**
 * updateSalaries.js
 * Targeted update script to update estimated salary values for existing careers
 * in MongoDB Atlas to realistic Indian job market compensation ranges in INR (₹).
 *
 * This script only updates the salaryRange fields of existing careers.
 * It does NOT drop collections, alter IDs, or modify unrelated documents.
 */

require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const Career = require('../models/Career');

const indianSalaryData = [
  {
    slug: 'software-developer',
    title: 'Software Developer',
    min: 450000,
    max: 1800000,
    sources: 'AmbitionBox India, Glassdoor India, PayScale India',
  },
  {
    slug: 'full-stack-developer',
    title: 'Full-Stack Developer',
    min: 500000,
    max: 2000000,
    sources: 'AmbitionBox, Michael Page India Tech Benchmark',
  },
  {
    slug: 'data-analyst',
    title: 'Data Analyst',
    min: 400000,
    max: 1200000,
    sources: 'AmbitionBox, Glassdoor India, PayScale India',
  },
  {
    slug: 'data-scientist',
    title: 'Data Scientist',
    min: 650000,
    max: 2400000,
    sources: 'AmbitionBox, Michael Page India, Glassdoor India',
  },
  {
    slug: 'machine-learning-engineer',
    title: 'Machine Learning Engineer',
    min: 700000,
    max: 2600000,
    sources: 'AmbitionBox, Glassdoor India, PayScale India',
  },
  {
    slug: 'cybersecurity-analyst',
    title: 'Cybersecurity Analyst',
    min: 480000,
    max: 1700000,
    sources: 'AmbitionBox, PayScale India',
  },
  {
    slug: 'cloud-engineer',
    title: 'Cloud Engineer',
    min: 550000,
    max: 2200000,
    sources: 'AmbitionBox, Glassdoor India',
  },
  {
    slug: 'devops-engineer',
    title: 'DevOps Engineer',
    min: 600000,
    max: 2200000,
    sources: 'AmbitionBox, PayScale India',
  },
  {
    slug: 'ui-ux-designer',
    title: 'UI/UX Designer',
    min: 400000,
    max: 1500000,
    sources: 'AmbitionBox, Glassdoor India',
  },
  {
    slug: 'mechanical-engineer',
    title: 'Mechanical Engineer',
    min: 320000,
    max: 1050000,
    sources: 'AmbitionBox, PayScale India',
  },
  {
    slug: 'civil-engineer',
    title: 'Civil Engineer',
    min: 300000,
    max: 980000,
    sources: 'AmbitionBox, Glassdoor India',
  },
  {
    slug: 'electrical-engineer',
    title: 'Electrical Engineer',
    min: 340000,
    max: 1150000,
    sources: 'AmbitionBox, PayScale India',
  },
  {
    slug: 'doctor',
    title: 'Doctor',
    min: 720000,
    max: 2500000,
    sources: 'AmbitionBox, Glassdoor India, Hospital salary surveys',
  },
  {
    slug: 'nurse',
    title: 'Nurse',
    min: 240000,
    max: 600000,
    sources: 'AmbitionBox, PayScale India Healthcare Report',
  },
  {
    slug: 'pharmacist',
    title: 'Pharmacist',
    min: 250000,
    max: 650000,
    sources: 'AmbitionBox, Glassdoor India',
  },
  {
    slug: 'chartered-accountant',
    title: 'Chartered Accountant',
    min: 700000,
    max: 2200000,
    sources: 'ICAI Campus Placement Reports, AmbitionBox India',
  },
  {
    slug: 'financial-analyst',
    title: 'Financial Analyst',
    min: 450000,
    max: 1500000,
    sources: 'AmbitionBox, PayScale India',
  },
  {
    slug: 'digital-marketer',
    title: 'Digital Marketer',
    min: 350000,
    max: 1200000,
    sources: 'AmbitionBox, Glassdoor India',
  },
  {
    slug: 'teacher',
    title: 'Teacher',
    min: 260000,
    max: 700000,
    sources: 'AmbitionBox, PayScale India',
  },
  {
    slug: 'research-scientist',
    title: 'Research Scientist',
    min: 500000,
    max: 1800000,
    sources: 'AmbitionBox, Glassdoor India',
  },
];

async function updateSalaries() {
  if (!process.env.MONGODB_URI) {
    console.error('Error: MONGODB_URI is not defined in backend/.env');
    process.exit(1);
  }

  console.log('Connecting to MongoDB Atlas...');
  await mongoose.connect(process.env.MONGODB_URI);
  console.log('Connected to MongoDB Atlas successfully.');

  let updatedCount = 0;
  const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 });

  for (const item of indianSalaryData) {
    const existing = await Career.findOne({ slug: item.slug }).select('_id title salaryRange');

    if (!existing) {
      console.warn(`[SKIP] Career with slug "${item.slug}" not found in database.`);
      continue;
    }

    const previousSalary = existing.salaryRange;

    const res = await Career.updateOne(
      { _id: existing._id },
      {
        $set: {
          'salaryRange.min': item.min,
          'salaryRange.max': item.max,
          'salaryRange.currency': 'INR',
        },
      }
    );

    if (res.modifiedCount > 0 || res.matchedCount > 0) {
      updatedCount++;
      console.log(
        `[UPDATED] ${item.title}: Previous [${previousSalary?.currency || 'USD'} ${previousSalary?.min} - ${previousSalary?.max}] -> New [${formatter.format(item.min)} – ${formatter.format(item.max)} / year]`
      );
    }
  }

  console.log(`\nCompleted targeted update. Successfully updated ${updatedCount} of ${indianSalaryData.length} careers in MongoDB Atlas.`);
  await mongoose.disconnect();
  console.log('Disconnected from MongoDB Atlas.');
}

updateSalaries().catch((err) => {
  console.error('Update failed:', err);
  process.exit(1);
});
