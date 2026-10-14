const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  url: { type: String, trim: true },
  type: { type: String, trim: true, default: 'official' },
  isFree: { type: Boolean, default: true },
});

const roadmapStepSchema = new mongoose.Schema({
  stepNumber: { type: Number, required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  durationMonths: { type: Number },
  durationText: { type: String, trim: true },
  category: { type: String, trim: true, default: 'skills' },
  tasks: [{ type: String, trim: true }],
  milestone: { type: String, trim: true },
  prerequisites: [{ type: String, trim: true }],
  stageType: {
    type: String,
    trim: true,
    default: 'Skill Acquisition',
  },
  skillsToAcquire: [{ type: String, trim: true }],
  activities: [{ type: String, trim: true }],
  estimatedTime: { type: String, trim: true },
  completionCriteria: { type: String, trim: true },
  dependencies: { type: String, trim: true },
  resources: [resourceSchema],
});

const roadmapSchema = new mongoose.Schema(
  {
    career: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Career',
      required: [true, 'Roadmap must be linked to a Career'],
      unique: true,
    },
    title: {
      type: String,
      required: [true, 'Please provide a roadmap title'],
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    totalDurationMonths: {
      type: Number,
    },
    totalDurationFormatted: {
      type: String,
      trim: true,
    },
    totalEstimatedDuration: {
      type: String,
      trim: true,
    },
    durationBreakdown: {
      type: String,
      trim: true,
    },
    overlapNotes: {
      type: String,
      trim: true,
    },
    steps: [roadmapStepSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Roadmap', roadmapSchema);
