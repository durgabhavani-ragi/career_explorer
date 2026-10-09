const Subject = require('../models/Subject');

// @desc    Get all subjects (supports filtering by category)
// @route   GET /api/subjects
// @access  Public
const getSubjects = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }

    const subjects = await Subject.find(filter).populate('category', 'name slug').sort({ name: 1 });
    res.json({
      success: true,
      count: subjects.length,
      data: subjects,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single subject by ID
// @route   GET /api/subjects/:id
// @access  Public
const getSubjectById = async (req, res, next) => {
  try {
    const subject = await Subject.findById(req.params.id).populate('category', 'name slug');
    if (!subject) {
      return res.status(404).json({ success: false, message: 'Subject not found' });
    }
    res.json({
      success: true,
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a subject (Admin only)
// @route   POST /api/subjects
// @access  Private/Admin
const createSubject = async (req, res, next) => {
  try {
    const { name, category, description } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: 'Subject name is required' });
    }

    const subject = await Subject.create({ name, category, description });
    res.status(201).json({
      success: true,
      data: subject,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a subject (Admin only)
// @route   PUT /api/subjects/:id
// @access  Private/Admin
const updateSubject = async (req, res, next) => {
  try {
    const { name, category, description } = req.body;
    const subject = await Subject.findById(req.params.id);

    if (!subject) {
      return res.status(404).json({ success: false, message: 'Subject not found' });
    }

    if (name) subject.name = name;
    if (category !== undefined) subject.category = category;
    if (description !== undefined) subject.description = description;

    const updatedSubject = await subject.save();
    res.json({
      success: true,
      data: updatedSubject,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a subject (Admin only)
// @route   DELETE /api/subjects/:id
// @access  Private/Admin
const deleteSubject = async (req, res, next) => {
  try {
    const subject = await Subject.findById(req.params.id);
    if (!subject) {
      return res.status(404).json({ success: false, message: 'Subject not found' });
    }

    await subject.deleteOne();
    res.json({ success: true, message: 'Subject deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSubjects,
  getSubjectById,
  createSubject,
  updateSubject,
  deleteSubject,
};
