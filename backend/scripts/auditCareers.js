const fs = require('fs');
const path = require('path');

const careers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/careers.json'), 'utf-8'));
const roadmaps = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/roadmaps.json'), 'utf-8'));
const categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/categories.json'), 'utf-8'));

const getOid = (obj) => {
  if (!obj) return null;
  if (typeof obj === 'string') return obj;
  return obj.$oid || obj._id || null;
};

const catMap = Object.fromEntries(categories.map(c => [getOid(c._id), c.name]));

console.log('=== DATASET SUMMARY ===');
console.log('Careers:', careers.length);
console.log('Roadmaps:', roadmaps.length);
console.log('Categories:', categories.length);

console.log('\n=== CAREERS BY CATEGORY ===');
const byCat = {};
careers.forEach(c => {
  const catName = catMap[getOid(c.category)] || 'Unknown Category';
  if (!byCat[catName]) byCat[catName] = [];
  byCat[catName].push(c.title);
});

for (const [cat, titles] of Object.entries(byCat)) {
  console.log(`\n--- ${cat} (${titles.length}) ---`);
  console.log(titles.join(', '));
}

console.log('\n=== ROADMAP DETAILS INSPECTION (Selected 10 careers) ===');
const roadmapByCareerId = Object.fromEntries(roadmaps.map(r => [getOid(r.career), r]));

const testCareers = [
  'software-developer',
  'general-physician',
  'specialist-doctor',
  'chartered-accountant',
  'civil-services-officer',
  'school-teacher',
  'college-professor',
  'lawyer',
  'airline-pilot',
  'nurse'
];

testCareers.forEach(slug => {
  const car = careers.find(c => c.slug === slug);
  if (!car) {
    console.log(`\n❌ Career not found: ${slug}`);
    return;
  }
  const rm = roadmapByCareerId[getOid(car._id)];
  console.log(`\n======================================================`);
  console.log(`CAREER: ${car.title} (${car.slug})`);
  console.log(`Category: ${catMap[getOid(car.category)]}`);
  console.log(`Education Requirements: ${car.educationRequirements}`);
  console.log(`Salary: ₹${car.salaryRange?.min?.toLocaleString('en-IN')} - ₹${car.salaryRange?.max?.toLocaleString('en-IN')} | Source: ${car.salaryRange?.source || car.salarySource}`);
  console.log(`Roadmap Title: ${rm?.title}`);
  console.log(`Roadmap Steps (${rm?.steps?.length || 0}):`);
  rm?.steps?.forEach(s => {
    console.log(`  Step ${s.stepNumber}: [${s.estimatedTime}] ${s.title}`);
    console.log(`     Desc: ${s.description}`);
  });
});

