const Roadmap = require('../models/Roadmap');

// @desc    Get all roadmaps
// @route   GET /api/roadmaps
// @access  Public
const getRoadmaps = async (req, res, next) => {
  try {
    const roadmaps = await Roadmap.find({})
      .populate({
        path: 'career',
        select: 'title slug category',
        populate: { path: 'category', select: 'name slug' },
      })
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      count: roadmaps.length,
      data: roadmaps,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get roadmap for a specific career
// @route   GET /api/roadmaps/career/:careerId
// @access  Public
const getRoadmapByCareerId = async (req, res, next) => {
  try {
    let careerId = req.params.careerId;
    const mongoose = require('mongoose');
    const Career = require('../models/Career');

    if (!mongoose.Types.ObjectId.isValid(careerId)) {
      const foundCareer = await Career.findOne({ slug: careerId });
      if (foundCareer) {
        careerId = foundCareer._id;
      }
    }

    const roadmap = await Roadmap.findOne({ career: careerId }).populate(
      'career',
      'title slug description'
    );

    if (!roadmap) {
      return res.status(404).json({
        success: false,
        message: 'No roadmap found for this career',
      });
    }

    res.json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get roadmap by ID
// @route   GET /api/roadmaps/:id
// @access  Public
const getRoadmapById = async (req, res, next) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id).populate(
      'career',
      'title slug description'
    );

    if (!roadmap) {
      return res.status(404).json({ success: false, message: 'Roadmap not found' });
    }

    res.json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a roadmap (Admin only)
// @route   POST /api/roadmaps
// @access  Private/Admin
const createRoadmap = async (req, res, next) => {
  try {
    const {
      career,
      title,
      description,
      totalDurationMonths,
      totalDurationFormatted,
      totalEstimatedDuration,
      durationBreakdown,
      overlapNotes,
      steps,
    } = req.body;

    if (!career || !title) {
      return res.status(400).json({
        success: false,
        message: 'Please provide career reference and roadmap title',
      });
    }

    const roadmapExists = await Roadmap.findOne({ career });
    if (roadmapExists) {
      return res.status(400).json({
        success: false,
        message: 'A roadmap already exists for this career',
      });
    }

    const roadmap = await Roadmap.create({
      career,
      title,
      description,
      totalDurationMonths,
      totalDurationFormatted,
      totalEstimatedDuration: totalDurationFormatted || totalEstimatedDuration,
      durationBreakdown,
      overlapNotes,
      steps: steps || [],
    });

    res.status(201).json({
      success: true,
      data: roadmap,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a roadmap (Admin only)
// @route   PUT /api/roadmaps/:id
// @access  Private/Admin
const updateRoadmap = async (req, res, next) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);

    if (!roadmap) {
      return res.status(404).json({ success: false, message: 'Roadmap not found' });
    }

    const {
      title,
      description,
      totalDurationMonths,
      totalDurationFormatted,
      totalEstimatedDuration,
      durationBreakdown,
      overlapNotes,
      steps,
    } = req.body;
    if (title) roadmap.title = title;
    if (description !== undefined) roadmap.description = description;
    if (totalDurationMonths !== undefined) roadmap.totalDurationMonths = totalDurationMonths;
    if (totalDurationFormatted !== undefined) {
      roadmap.totalDurationFormatted = totalDurationFormatted;
      roadmap.totalEstimatedDuration = totalDurationFormatted;
    } else if (totalEstimatedDuration !== undefined) {
      roadmap.totalEstimatedDuration = totalEstimatedDuration;
    }
    if (durationBreakdown !== undefined) roadmap.durationBreakdown = durationBreakdown;
    if (overlapNotes !== undefined) roadmap.overlapNotes = overlapNotes;
    if (steps) roadmap.steps = steps;

    const updatedRoadmap = await roadmap.save();

    res.json({
      success: true,
      data: updatedRoadmap,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a roadmap (Admin only)
// @route   DELETE /api/roadmaps/:id
// @access  Private/Admin
const deleteRoadmap = async (req, res, next) => {
  try {
    const roadmap = await Roadmap.findById(req.params.id);

    if (!roadmap) {
      return res.status(404).json({ success: false, message: 'Roadmap not found' });
    }

    await roadmap.deleteOne();
    res.json({ success: true, message: 'Roadmap deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getRoadmaps,
  getRoadmapByCareerId,
  getRoadmapById,
  createRoadmap,
  updateRoadmap,
  deleteRoadmap,
};
