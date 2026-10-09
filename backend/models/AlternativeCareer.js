const mongoose = require('mongoose');

const alternativeCareerSchema = new mongoose.Schema(
  {
    career: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Career',
      required: [true, 'Main career is required'],
    },
    alternativeCareer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Career',
      required: [true, 'Alternative career reference is required'],
    },
    similarityNotes: {
      type: String,
      trim: true,
      maxlength: [500, 'Notes cannot exceed 500 characters'],
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate mapping between the same two careers
alternativeCareerSchema.index({ career: 1, alternativeCareer: 1 }, { unique: true });

module.exports = mongoose.model('AlternativeCareer', alternativeCareerSchema);
