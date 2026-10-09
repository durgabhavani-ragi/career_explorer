const express = require('express');
const router = express.Router();

// @desc    Health check endpoint
// @route   GET /api/health
// @access  Public
router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'ok',
    message: 'Career Explorer Backend API is active and healthy',
    timestamp: new Date().toISOString(),
    uptime: `${Math.floor(process.uptime())} seconds`,
  });
});

module.exports = router;
