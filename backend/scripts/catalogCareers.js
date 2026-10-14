const fs = require('fs');
const path = require('path');

const careers = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/careers.json'), 'utf-8'));
const categories = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/categories.json'), 'utf-8'));
const roadmaps = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/roadmaps.json'), 'utf-8'));

const getOid = (obj) => {
  if (!obj) return null;
  if (typeof obj === 'string') return obj;
  return obj.$oid || obj._id || null;
};

const catMap = Object.fromEntries(categories.map(c => [getOid(c._id), c.name]));
const rmByCar = Object.fromEntries(roadmaps.map(r => [getOid(r.career), r]));

console.log('Index | Slug | Title | Category | Steps | Salary Min-Max');
careers.forEach((c, i) => {
  const rm = rmByCar[getOid(c._id)];
  const cat = catMap[getOid(c.category)] || 'Unknown';
  console.log(`${i + 1}. [${c.slug}] "${c.title}" | ${cat} | Steps: ${rm?.steps?.length || 0} | ₹${c.salaryRange?.min} - ₹${c.salaryRange?.max}`);
});
