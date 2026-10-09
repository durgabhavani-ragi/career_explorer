const SavedCareer = require('../models/SavedCareer');

// @desc    Get all saved careers for logged in user
// @route   GET /api/saved-careers
// @access  Private
const getSavedCareers = async (req, res, next) => {
  try {
    const saved = await SavedCareer.find({ user: req.user._id })
      .populate({
        path: 'career',
        populate: [
          { path: 'category', select: 'name slug icon' },
          { path: 'skills', select: 'name' },
        ],
      })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: saved.length,
      data: saved,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Save/bookmark a career for logged in user
// @route   POST /api/saved-careers
// @access  Private
const saveCareer = async (req, res, next) => {
  try {
    const { careerId, notes } = req.body;

    if (!careerId) {
      return res.status(400).json({ success: false, message: 'Career ID is required' });
    }

    const existing = await SavedCareer.findOne({
      user: req.user._id,
      career: careerId,
    });

    if (existing) {
      return res.status(400).json({ success: false, message: 'Career is already saved' });
    }

    const saved = await SavedCareer.create({
      user: req.user._id,
      career: careerId,
      notes: notes || '',
    });

    res.status(201).json({
      success: true,
      data: saved,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Remove a saved career for logged in user
// @route   DELETE /api/saved-careers/:careerId
// @access  Private
const removeSavedCareer = async (req, res, next) => {
  try {
    const saved = await SavedCareer.findOneAndDelete({
      user: req.user._id,
      career: req.params.careerId,
    });

    if (!saved) {
      return res.status(404).json({ success: false, message: 'Saved career record not found' });
    }

    res.json({ success: true, message: 'Career removed from saved list' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSavedCareers,
  saveCareer,
  removeSavedCareer,
};
