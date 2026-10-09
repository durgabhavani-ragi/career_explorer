const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  url: { type: String, trim: true },
  type: { type: String, enum: ['Article', 'Video', 'Course', 'Book', 'Documentation', 'Other'], default: 'Other' },
});

const roadmapStepSchema = new mongoose.Schema({
  stepNumber: { type: Number, required: true },
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  estimatedTime: { type: String, trim: true },
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
    steps: [roadmapStepSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Roadmap', roadmapSchema);
