const Skill = require('../models/Skill');

// @desc    Get all skills (supports filtering by category and level)
// @route   GET /api/skills
// @access  Public
const getSkills = async (req, res, next) => {
  try {
    const filter = {};
    if (req.query.category) {
      filter.category = req.query.category;
    }
    if (req.query.level) {
      filter.level = req.query.level;
    }

    const skills = await Skill.find(filter).populate('category', 'name slug').sort({ name: 1 });
    res.json({
      success: true,
      count: skills.length,
      data: skills,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single skill by ID
// @route   GET /api/skills/:id
// @access  Public
const getSkillById = async (req, res, next) => {
  try {
    const skill = await Skill.findById(req.params.id).populate('category', 'name slug');
    if (!skill) {
      return res.status(404).json({ success: false, message: 'Skill not found' });
    }
    res.json({
      success: true,
      data: skill,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Create a skill (Admin only)
// @route   POST /api/skills
// @access  Private/Admin
const createSkill = async (req, res, next) => {
  try {
    const { name, category, description, level } = req.body;
    if (!name) {
      return res.status(400).json({ success: false, message: 'Skill name is required' });
    }

    const skill = await Skill.create({ name, category, description, level });
    res.status(201).json({
      success: true,
      data: skill,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Update a skill (Admin only)
// @route   PUT /api/skills/:id
// @access  Private/Admin
const updateSkill = async (req, res, next) => {
  try {
    const { name, category, description, level } = req.body;
    const skill = await Skill.findById(req.params.id);

    if (!skill) {
      return res.status(404).json({ success: false, message: 'Skill not found' });
    }

    if (name) skill.name = name;
    if (category !== undefined) skill.category = category;
    if (description !== undefined) skill.description = description;
    if (level) skill.level = level;

    const updatedSkill = await skill.save();
    res.json({
      success: true,
      data: updatedSkill,
    });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete a skill (Admin only)
// @route   DELETE /api/skills/:id
// @access  Private/Admin
const deleteSkill = async (req, res, next) => {
  try {
    const skill = await Skill.findById(req.params.id);
    if (!skill) {
      return res.status(404).json({ success: false, message: 'Skill not found' });
    }

    await skill.deleteOne();
    res.json({ success: true, message: 'Skill deleted successfully' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getSkills,
  getSkillById,
  createSkill,
  updateSkill,
  deleteSkill,
};
