const express = require('express');
const router = express.Router();
const {
  getAlternativeCareers,
  getAlternativesForCareer,
  addAlternativeCareer,
  deleteAlternativeCareer,
} = require('../controllers/alternativeCareerController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/', getAlternativeCareers);
router.get('/:careerId', getAlternativesForCareer);
router.post('/', protect, adminOnly, addAlternativeCareer);
router.delete('/:id', protect, adminOnly, deleteAlternativeCareer);

module.exports = router;
