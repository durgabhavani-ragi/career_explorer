const fs = require('fs');
const path = require('path');
const f1 = require('../data/audit/techCareersPart1.js');
const f2 = require('../data/audit/techCareersPart2.js');
const f3 = require('../data/audit/techCareersPart3.js');
const f4 = require('../data/audit/engineeringCareers.js');

const auditedSlugs = new Set([
  ...f1.map(c => c.slug),
  ...f2.map(c => c.slug),
  ...f3.map(c => c.slug),
  ...f4.map(c => c.slug)
]);

console.log('Audited slugs count:', auditedSlugs.size);

const careers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/careers.json'), 'utf-8'));
const categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/categories.json'), 'utf-8'));
const getOid = (o) => (o && o.$oid) || o?._id || o;
const catMap = Object.fromEntries(categories.map(c => [getOid(c._id), c.name]));

const removalSlugs = new Set([
  'mobile-app-developer', 'ui-designer', 'ux-designer', 'nlp-engineer',
  'computer-vision-engineer', 'qa-engineer', 'mechatronics-engineer',
  'structural-engineer', 'environmental-engineer', 'automotive-engineer',
  'industrial-engineer', 'biochemist', 'epidemiologist', 'investment-analyst',
  'auditor', 'risk-analyst', 'supply-chain-analyst', 'lecturer',
  'academic-researcher', 'research-assistant', 'education-counselor',
  'special-education-teacher', 'film-editor', 'copywriter', 'seo-specialist',
  'social-media-manager', '3d-artist', 'legal-advisor', 'event-manager'
]);

const keptCareers = careers.filter(c => !removalSlugs.has(c.slug));
const missingAudit = keptCareers.filter(c => !auditedSlugs.has(c.slug));

console.log('Total kept careers:', keptCareers.length);
console.log('Missing audit count:', missingAudit.length);
console.log('\nMissing audit slugs by category:');
const missingByCat = {};
missingAudit.forEach(c => {
  const cat = catMap[getOid(c.category)] || 'Unknown';
  missingByCat[cat] = (missingByCat[cat] || []).concat(c.slug);
});

for (const [cat, slugs] of Object.entries(missingByCat)) {
  console.log(`\n--- ${cat} (${slugs.length}) ---`);
  console.log(slugs.join(', '));
}
