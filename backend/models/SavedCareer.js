const mongoose = require('mongoose');

const savedCareerSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User reference is required'],
    },
    career: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Career',
      required: [true, 'Career reference is required'],
    },
    notes: {
      type: String,
      trim: true,
      maxlength: [300, 'Notes cannot exceed 300 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate bookmarking of the same career by the same user
savedCareerSchema.index({ user: 1, career: 1 }, { unique: true });

module.exports = mongoose.model('SavedCareer', savedCareerSchema);
