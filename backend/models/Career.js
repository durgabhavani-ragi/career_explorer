const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, 'Please provide a career title'],
      trim: true,
      maxlength: [150, 'Title cannot exceed 150 characters'],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide a career description'],
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Career must belong to a Category'],
    },
    subjects: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
      },
    ],
    skills: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Skill',
      },
    ],
    salaryRange: {
      min: { type: Number, default: 0 },
      max: { type: Number, default: 0 },
      currency: { type: String, default: 'INR' },
      source: { type: String, trim: true },
    },
    salarySource: {
      type: String,
      trim: true,
    },
    salaryByExperience: {
      entryLevel: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 0 },
        label: { type: String, default: 'Entry Level (0–2 yrs)' },
      },
      earlyCareer: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 0 },
        label: { type: String, default: 'Early Career (3–5 yrs)' },
      },
      experienced: {
        min: { type: Number, default: 0 },
        max: { type: Number, default: 0 },
        label: { type: String, default: 'Experienced (6–10+ yrs)' },
      },
      payPeriod: { type: String, default: 'Annual' },
      salaryNote: { type: String, trim: true },
    },
    marketDemand: {
      type: String,
      trim: true,
      default: 'Moderate',
    },
    jobOutlook: {
      type: String,
      trim: true,
      default: 'Moderate',
    },
    educationQualification: {
      minimumQualification: { type: String, trim: true },
      preferredDegree: { type: String, trim: true },
      requiredProfessionalDegreeOrLicense: { type: String, trim: true },
      mandatoryRequirements: [{ type: String, trim: true }],
      preferredQualifications: [{ type: String, trim: true }],
      eligibilityCriteria: { type: String, trim: true },
      regulatoryNotes: { type: String, trim: true },
    },
    educationRequirements: {
      type: String,
      trim: true,
    },
    educationPathways: [
      {
        type: String,
        trim: true,
      },
    ],
    eligibilityRequirements: {
      type: String,
      trim: true,
    },
    certificationsAndExams: [
      {
        type: String,
        trim: true,
      },
    ],
    workEnvironment: {
      type: String,
      trim: true,
    },
    careerProgression: [
      {
        type: String,
        trim: true,
      },
    ],
    employmentSectors: {
      government: { type: String, trim: true },
      privateSector: { type: String, trim: true },
    },
    timelineOverview: {
      totalEstimatedDuration: { type: String, trim: true },
      educationDuration: { type: String, trim: true },
      prepDuration: { type: String, trim: true },
      practicalTrainingDuration: { type: String, trim: true },
      jobSearchDuration: { type: String, trim: true },
      overlapNotes: { type: String, trim: true },
      confidenceNote: { type: String, trim: true },
    },
    sources: [
      {
        title: { type: String, trim: true },
        url: { type: String, trim: true },
        sourceAuthority: { type: String, trim: true },
        verifiedDate: { type: String, trim: true },
      },
    ],
    lastVerified: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// Auto-generate slug from title
careerSchema.pre('save', function () {
  if (this.isModified('title') || !this.slug) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }
});

module.exports = mongoose.model('Career', careerSchema);
