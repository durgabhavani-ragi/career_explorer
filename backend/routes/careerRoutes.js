const express = require('express');
const router = express.Router();
const {
  getCareers,
  getCareerById,
  getCareerBySlug,
  createCareer,
  updateCareer,
  deleteCareer,
} = require('../controllers/careerController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/', getCareers);
router.get('/slug/:slug', getCareerBySlug);
router.get('/:id', getCareerById);
router.post('/', protect, adminOnly, createCareer);
router.put('/:id', protect, adminOnly, updateCareer);
router.delete('/:id', protect, adminOnly, deleteCareer);

module.exports = router;
