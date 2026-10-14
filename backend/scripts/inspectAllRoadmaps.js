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

const carMap = Object.fromEntries(careers.map(c => [getOid(c._id), c]));
const catMap = Object.fromEntries(categories.map(c => [getOid(c._id), c.name]));

console.log('=== ROADMAP COMPREHENSIVE AUDIT ===');
let totalRoadmaps = roadmaps.length;
let totalSteps = 0;
let genericStepTitles = 0;
let genericDurations = 0;

const durationSet = new Map();

roadmaps.forEach(r => {
  const car = carMap[getOid(r.career)];
  r.steps.forEach(s => {
    totalSteps++;
    const t = s.estimatedTime || 'MISSING';
    durationSet.set(t, (durationSet.get(t) || 0) + 1);

    if (t === '1 year' || t === '2 months' || t === '6 weeks') {
      genericDurations++;
    }
  });
});

console.log(`Total Roadmaps: ${totalRoadmaps}`);
console.log(`Total Steps: ${totalSteps}`);
console.log(`Generic/Repeated Durations (e.g. exactly '2 months', '6 weeks', '1 year'): ${genericDurations} of ${totalSteps}`);

console.log('\nDuration frequencies:');
const sorted = Array.from(durationSet.entries()).sort((a, b) => b[1] - a[1]);
sorted.slice(0, 15).forEach(([dur, count]) => {
  console.log(`  "${dur}": ${count}`);
});
