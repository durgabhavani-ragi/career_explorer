const AlternativeCareer = require('../models/AlternativeCareer');

// @desc    Get all alternative career mappings
// @route   GET /api/alternative-careers
// @access  Public
const getAlternativeCareers = async (req, res, next) => {
  try {
    const list = await AlternativeCareer.find({})
      .populate('career', 'title slug category')
      .populate('alternativeCareer', 'title slug category');

    res.json({
      success: true,
      count: list.length,
      data: list,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get alternative careers for a specific career
// @route   GET /api/alternative-careers/:careerId
// @access  Public
const getAlternativesForCareer = async (req, res, next) => {
  try {
    const alternatives = await AlternativeCareer.find({
      career: req.params.careerId,
    }).populate('alternativeCareer', 'title slug description salaryRange jobOutlook category');

    res.json({
      success: true,
      count: alternatives.length,
      data: alternatives,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Link an alternative career to a main career (Admin only)
// @route   POST /api/alternative-careers
// @access  Private/Admin
const addAlternativeCareer = async (req, res, next) => {
  try {
    const { career, alternativeCareer, similarityNotes } = req.body;

    if (!career || !alternativeCareer) {
      return res.status(400).json({
        success: false,
        message: 'Please provide both career and alternativeCareer references',
      });
    }

    if (career === alternativeCareer) {
      return res.status(400).json({
        success: false,
        message: 'A career cannot be an alternative to itself',
      });
    }

    const mapping = await AlternativeCareer.create({
      career,
      alternativeCareer,
      similarityNotes,
    });

    res.status(201).json({
      success: true,
      data: mapping,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Remove an alternative career link (Admin only)
// @route   DELETE /api/alternative-careers/:id
// @access  Private/Admin
const deleteAlternativeCareer = async (req, res, next) => {
  try {
    const item = await AlternativeCareer.findById(req.params.id);

    if (!item) {
      return res.status(404).json({ success: false, message: 'Alternative career record not found' });
    }

    await item.deleteOne();
    res.json({ success: true, message: 'Alternative career mapping deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAlternativeCareers,
  getAlternativesForCareer,
  addAlternativeCareer,
  deleteAlternativeCareer,
};
