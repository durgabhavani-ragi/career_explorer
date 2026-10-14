const fs = require('fs');
const path = require('path');

const careers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/careers.json'), 'utf-8'));
const categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/categories.json'), 'utf-8'));

const getOid = (o) => (o && o.$oid) || o?._id || o;
const catMap = Object.fromEntries(categories.map(c => [getOid(c._id), c.name]));

// Candidates for the 29 redundant / niche careers to archive/remove
// Selection rationale:
// 1. Redundant overlap with broader or parent career entry:
//    - mobile-app-developer (subsumed by android-developer & ios-developer)
//    - ui-designer (subsumed by product-designer & ui-ux-designer)
//    - ux-designer (subsumed by product-designer & ui-ux-designer)
//    - copywriter (subsumed by content-writer & digital-marketer)
//    - film-editor (subsumed by video-editor)
//    - legal-advisor (subsumed by corporate-lawyer & lawyer)
//    - investment-analyst (subsumed by financial-analyst)
//    - auditor (subsumed by chartered-accountant & accountant)
//    - lecturer (officially re-designated as Assistant Professor / college-professor under UGC 7th Pay)
//    - academic-researcher (subsumed by college-professor & research-scientist)
//    - research-assistant (subsumed by research-scientist as a temporary fellowship)
//    - mechatronics-engineer (subsumed by robotics-engineer & mechanical-engineer)
//    - structural-engineer (post-graduate specialization of civil-engineer)
//    - environmental-engineer (subsumed by environmental-scientist & civil-engineer)
//    - biochemist (subsumed by biotechnology-researcher & microbiologist)
//    - epidemiologist (subsumed by public-health-specialist)
//    - nlp-engineer (specialization subsumed under ai-engineer / machine-learning-engineer)
//    - computer-vision-engineer (specialization subsumed under ai-engineer / machine-learning-engineer)
//    - qa-engineer (subsumed by automation-test-engineer / SDET)
//    - seo-specialist (subsumed by digital-marketer)
//    - social-media-manager (subsumed by digital-marketer & public-relations-specialist)
//    - 3d-artist (subsumed by animator & game-developer)
//    - automotive-engineer (subsumed by mechanical-engineer with automotive specialization)
//    - industrial-engineer (subsumed by operations-manager & mechanical-engineer)
//    - supply-chain-analyst (subsumed by logistics-manager & operations-manager)
//    - risk-analyst (subsumed by actuary & financial-analyst)
//    - education-counselor (subsumed by psychologist & school-teacher)
//    - special-education-teacher (specialization of school-teacher)
//    - event-manager (subsumed by public-relations-specialist & hotel-manager)

const removalSlugs = [
  // 1. Duplicate Mobile umbrella (keep Android & iOS Native)
  'mobile-app-developer',
  // 2. Duplicate Designers in Tech (keep UI/UX Designer in Arts and Product Designer)
  'ui-designer',
  'ux-designer',
  // 3. Sub-specializations of AI Engineer / ML Engineer
  'nlp-engineer',
  'computer-vision-engineer',
  // 4. Subsumed QA (keep modern Automation Test Engineer / SDET)
  'qa-engineer',
  // 5. Redundant engineering specializations (covered by core/parent disciplines)
  'mechatronics-engineer',
  'structural-engineer',
  'environmental-engineer',
  'automotive-engineer',
  'industrial-engineer',
  // 6. Overlapping life science & health researchers (covered by Biotech & Public Health)
  'biochemist',
  'epidemiologist',
  // 7. Redundant finance roles
  'investment-analyst',
  'auditor',
  'risk-analyst',
  // 8. Redundant academic / teaching roles (Lecturer officially redesignated as Assistant Professor)
  'lecturer',
  'academic-researcher',
  'research-assistant',
  'education-counselor',
  'special-education-teacher',
  // 9. Redundant media, content & marketing roles
  'film-editor',
  'copywriter',
  'seo-specialist',
  'social-media-manager',
  '3d-artist',
  // 10. Redundant business, legal & service roles
  'legal-advisor',
  'supply-chain-analyst',
  'event-manager'
];

console.log('Target removals count:', removalSlugs.length);
console.log('Original careers count:', careers.length);
console.log('Target final careers count:', careers.length - removalSlugs.length);

const removalSet = new Set(removalSlugs);
const keptCareers = careers.filter(c => !removalSet.has(c.slug));
const removedCareers = careers.filter(c => removalSet.has(c.slug));

console.log('\nKept careers count:', keptCareers.length);
console.log('Removed careers count:', removedCareers.length);

// Verify that all removalSlugs actually matched existing careers
const foundSlugs = new Set(careers.map(c => c.slug));
const missingRemovals = removalSlugs.filter(s => !foundSlugs.has(s));
if (missingRemovals.length > 0) {
  console.error('ERROR: These removal slugs were not found in careers.json:', missingRemovals);
} else {
  console.log('✓ All 29 removal slugs exist in the dataset.');
}

console.log('\n=== BREAKDOWN OF THE 100 KEPT CAREERS BY CATEGORY ===');
const catCounts = {};
keptCareers.forEach(c => {
  const cat = catMap[getOid(c.category)] || 'Unknown';
  catCounts[cat] = (catCounts[cat] || 0) + 1;
});
console.table(catCounts);

console.log('\n=== LIST OF 29 CAREERS TO BE ARCHIVED / REMOVED ===');
removedCareers.forEach((c, idx) => {
  console.log(`${idx + 1}. [${c.slug}] ${c.title} (${catMap[getOid(c.category)]})`);
});
