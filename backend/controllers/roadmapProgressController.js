const RoadmapProgress = require('../models/RoadmapProgress');
const Roadmap = require('../models/Roadmap');

// @desc    Get progress for all roadmaps for logged-in user
// @route   GET /api/roadmap-progress
// @access  Private
const getUserProgress = async (req, res, next) => {
  try {
    const progressList = await RoadmapProgress.find({ user: req.user._id })
      .populate({
        path: 'roadmap',
        select: 'title career steps',
        populate: { path: 'career', select: 'title slug' },
      });

    res.json({
      success: true,
      count: progressList.length,
      data: progressList,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get progress for a specific roadmap
// @route   GET /api/roadmap-progress/:roadmapId
// @access  Private
const getProgressByRoadmap = async (req, res, next) => {
  try {
    let progress = await RoadmapProgress.findOne({
      user: req.user._id,
      roadmap: req.params.roadmapId,
    });

    if (!progress) {
      // Return empty progress record structure if not started yet
      return res.json({
        success: true,
        data: {
          user: req.user._id,
          roadmap: req.params.roadmapId,
          completedSteps: [],
          isCompleted: false,
        },
      });
    }

    res.json({
      success: true,
      data: progress,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Toggle completion status of a roadmap step
// @route   POST /api/roadmap-progress/:roadmapId/toggle-step
// @access  Private
const toggleStepProgress = async (req, res, next) => {
  try {
    const { stepNumber } = req.body;
    const roadmapId = req.params.roadmapId;

    if (stepNumber === undefined) {
      return res.status(400).json({ success: false, message: 'stepNumber is required' });
    }

    const roadmap = await Roadmap.findById(roadmapId);
    if (!roadmap) {
      return res.status(404).json({ success: false, message: 'Roadmap not found' });
    }

    let progress = await RoadmapProgress.findOne({
      user: req.user._id,
      roadmap: roadmapId,
    });

    if (!progress) {
      progress = new RoadmapProgress({
        user: req.user._id,
        roadmap: roadmapId,
        completedSteps: [],
      });
    }

    const stepIndex = progress.completedSteps.indexOf(stepNumber);
    if (stepIndex > -1) {
      // Step was completed, toggle to uncompleted
      progress.completedSteps.splice(stepIndex, 1);
    } else {
      // Step was uncompleted, mark complete
      progress.completedSteps.push(stepNumber);
    }

    // Check if all steps in the roadmap are completed
    const totalStepsCount = roadmap.steps ? roadmap.steps.length : 0;
    progress.isCompleted =
      totalStepsCount > 0 && progress.completedSteps.length >= totalStepsCount;

    await progress.save();

    res.json({
      success: true,
      data: progress,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUserProgress,
  getProgressByRoadmap,
  toggleStepProgress,
};
