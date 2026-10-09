const express = require('express');
const router = express.Router();
const {
  getRoadmaps,
  getRoadmapByCareerId,
  getRoadmapById,
  createRoadmap,
  updateRoadmap,
  deleteRoadmap,
} = require('../controllers/roadmapController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

router.get('/', getRoadmaps);
router.get('/career/:careerId', getRoadmapByCareerId);
router.get('/:id', getRoadmapById);
router.post('/', protect, adminOnly, createRoadmap);
router.put('/:id', protect, adminOnly, updateRoadmap);
router.delete('/:id', protect, adminOnly, deleteRoadmap);

module.exports = router;
