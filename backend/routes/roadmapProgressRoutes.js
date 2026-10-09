const express = require('express');
const router = express.Router();
const {
  getUserProgress,
  getProgressByRoadmap,
  toggleStepProgress,
} = require('../controllers/roadmapProgressController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/', getUserProgress);
router.get('/:roadmapId', getProgressByRoadmap);
router.post('/:roadmapId/toggle-step', toggleStepProgress);

module.exports = router;
