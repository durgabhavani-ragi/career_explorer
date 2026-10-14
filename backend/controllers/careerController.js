const Career = require('../models/Career');

// @desc    Get all careers with optional search & filters
// @route   GET /api/careers
// @access  Public
const getCareers = async (req, res, next) => {
  try {
    const { search, category, skill, subject } = req.query;
    const filter = {};

    // Text search on title or description
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
      ];
    }

    // Filter by Category ObjectId
    if (category) {
      filter.category = category;
    }

    // Filter by Skill ObjectId
    if (skill) {
      filter.skills = skill;
    }

    // Filter by Subject ObjectId
    if (subject) {
      filter.subjects = subject;
    }

    const careers = await Career.find(filter)
      .populate('category', 'name slug icon')
      .populate('subjects', 'name')
      .populate('skills', 'name level')
      .sort({ title: 1 });

    res.json({
      success: true,
      count: careers.length,
      data: careers,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single career by ID
// @route   GET /api/careers/:id
// @access  Public
const getCareerById = async (req, res, next) => {
  try {
    const career = await Career.findById(req.params.id)
      .populate('category', 'name slug icon description')
      .populate('subjects', 'name description')
      .populate('skills', 'name description level');

    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    res.json({
      success: true,
      data: career,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single career by Slug
// @route   GET /api/careers/slug/:slug
// @access  Public
const getCareerBySlug = async (req, res, next) => {
  try {
    const career = await Career.findOne({ slug: req.params.slug })
      .populate('category', 'name slug icon description')
      .populate('subjects', 'name description')
      .populate('skills', 'name description level');

    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    res.json({
      success: true,
      data: career,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a career (Admin only)
// @route   POST /api/careers
// @access  Private/Admin
const createCareer = async (req, res, next) => {
  try {
    const {
      title,
      description,
      category,
      subjects,
      skills,
      salaryRange,
      salarySource,
      salaryByExperience,
      marketDemand,
      jobOutlook,
      educationQualification,
      educationRequirements,
      educationPathways,
      eligibilityRequirements,
      certificationsAndExams,
      workEnvironment,
      careerProgression,
      employmentSectors,
      timelineOverview,
      sources,
      lastVerified,
    } = req.body;

    if (!title || !description || !category) {
      return res.status(400).json({
        success: false,
        message: 'Please provide title, description, and category',
      });
    }

    const career = await Career.create({
      title,
      description,
      category,
      subjects: subjects || [],
      skills: skills || [],
      salaryRange: salaryRange || { min: 0, max: 0, currency: 'INR' },
      salarySource,
      salaryByExperience,
      marketDemand: marketDemand || 'Moderate',
      jobOutlook: jobOutlook || 'Moderate',
      educationQualification,
      educationRequirements,
      educationPathways: educationPathways || [],
      eligibilityRequirements,
      certificationsAndExams: certificationsAndExams || [],
      workEnvironment,
      careerProgression: careerProgression || [],
      employmentSectors: employmentSectors || {},
      timelineOverview: timelineOverview || {},
      sources: sources || [],
      lastVerified,
    });

    res.status(201).json({
      success: true,
      data: career,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a career (Admin only)
// @route   PUT /api/careers/:id
// @access  Private/Admin
const updateCareer = async (req, res, next) => {
  try {
    const career = await Career.findById(req.params.id);

    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    const fieldsToUpdate = [
      'title',
      'description',
      'category',
      'subjects',
      'skills',
      'salaryRange',
      'salarySource',
      'salaryByExperience',
      'marketDemand',
      'jobOutlook',
      'educationQualification',
      'educationRequirements',
      'educationPathways',
      'eligibilityRequirements',
      'certificationsAndExams',
      'workEnvironment',
      'careerProgression',
      'employmentSectors',
      'timelineOverview',
      'sources',
      'lastVerified',
    ];

    fieldsToUpdate.forEach((field) => {
      if (req.body[field] !== undefined) {
        career[field] = req.body[field];
      }
    });

    const updatedCareer = await career.save();

    res.json({
      success: true,
      data: updatedCareer,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a career (Admin only)
// @route   DELETE /api/careers/:id
// @access  Private/Admin
const deleteCareer = async (req, res, next) => {
  try {
    const career = await Career.findById(req.params.id);

    if (!career) {
      return res.status(404).json({ success: false, message: 'Career not found' });
    }

    await career.deleteOne();
    res.json({ success: true, message: 'Career deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getCareers,
  getCareerById,
  getCareerBySlug,
  createCareer,
  updateCareer,
  deleteCareer,
};
