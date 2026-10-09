const express = require('express');
const router = express.Router();
const {
  getSavedCareers,
  saveCareer,
  removeSavedCareer,
} = require('../controllers/savedCareerController');
const { protect } = require('../middleware/authMiddleware');

router.use(protect);

router.get('/', getSavedCareers);
router.post('/', saveCareer);
router.delete('/:careerId', removeSavedCareer);

module.exports = router;
