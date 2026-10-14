/**
 * formatSalary.js
 * Salary formatting utility for Career Explorer.
 *
 * Formats authentic Indian job market salary values directly in Indian Rupees (₹)
 * using the Indian numbering system (Lakhs and Crores via en-IN locale).
 * No fixed exchange rate multipliers or currency conversions are applied.
 */

const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

/**
 * Format a single numeric amount to INR currency string.
 * @param {number} amount - Numeric amount in INR
 * @returns {string} e.g. "₹6,00,000"
 */
export const formatINR = (amount) => {
  if (amount === undefined || amount === null || isNaN(amount)) return '₹0';
  return inrFormatter.format(amount);
};

/**
 * Format a numeric amount to Lakhs per Annum (LPA) string.
 * Handles both raw Rupee amounts (e.g. 450000 -> "4.5") and direct LPA values (e.g. 4.5 -> "4.5").
 * @param {number} amount
 * @returns {string} e.g. "4.5"
 */
export const formatLpa = (amount) => {
  if (amount === undefined || amount === null || isNaN(Number(amount))) return '0';
  const num = Number(amount);
  if (num <= 0) return '0';
  if (num >= 100000) {
    const lpa = num / 100000;
    return lpa % 1 === 0 ? lpa.toString() : lpa.toFixed(1);
  }
  return num.toString();
};

/**
 * Formats a career salary range directly into a clean display object.
 *
 * @param {Object} salaryRange - { min, max, currency }
 * @param {Object} options - { showPeriod: boolean, period: string }
 * @returns {Object} {
 *   formattedText: string,
 *   minFormatted: string,
 *   maxFormatted: string,
 *   hasValidSalary: boolean
 * }
 */
export const formatSalaryRange = (salaryRange, options = {}) => {
  const { showPeriod = true, period = 'year' } = options;

  if (!salaryRange || (!salaryRange.min && !salaryRange.max)) {
    return {
      formattedText: 'Salary undisclosed',
      minFormatted: '',
      maxFormatted: '',
      hasValidSalary: false,
    };
  }

  const rawMin = Number(salaryRange.min) || 0;
  const rawMax = Number(salaryRange.max) || 0;

  if (rawMin <= 0 && rawMax <= 0) {
    return {
      formattedText: 'Salary undisclosed',
      minFormatted: '',
      maxFormatted: '',
      hasValidSalary: false,
    };
  }

  const periodSuffix = showPeriod ? ` / ${period}` : '';

  let formattedText = '';
  if (rawMin > 0 && rawMax > 0) {
    formattedText = `${formatINR(rawMin)} – ${formatINR(rawMax)}${periodSuffix}`;
  } else if (rawMin > 0) {
    formattedText = `From ${formatINR(rawMin)}${periodSuffix}`;
  } else if (rawMax > 0) {
    formattedText = `Up to ${formatINR(rawMax)}${periodSuffix}`;
  }

  const minFormatted = rawMin > 0 ? formatINR(rawMin) : '';
  const maxFormatted = rawMax > 0 ? formatINR(rawMax) : '';

  return {
    formattedText,
    minFormatted,
    maxFormatted,
    hasValidSalary: true,
  };
};

/**
 * Safely extracts and formats an Indian CTC range from salaryByExperience.
 * Supports { entryLevel, earlyCareer, experienced } and { entry, early, experienced }.
 * Falls back to salaryRange if salaryByExperience is not present or incomplete.
 */
export const getSalaryByExperienceDisplay = (salaryByExperience, fallbackSalaryRange) => {
  if (salaryByExperience && typeof salaryByExperience === 'object') {
    const entry = salaryByExperience.entryLevel || salaryByExperience.entry;
    const exp = salaryByExperience.experienced || salaryByExperience.senior;

    const minRaw = entry?.min || entry?.max;
    const maxRaw = exp?.max || exp?.min || entry?.max;

    if (minRaw && maxRaw && !isNaN(Number(minRaw)) && !isNaN(Number(maxRaw))) {
      const minLpa = formatLpa(minRaw);
      const maxLpa = formatLpa(maxRaw);
      return {
        formattedText: `₹${minLpa} – ₹${maxLpa} LPA`,
        hasValidSalary: true,
      };
    }
  }

  return formatSalaryRange(fallbackSalaryRange, { showPeriod: false });
};

/**
 * Shorthand helper for quick string display
 * @param {Object} salaryRange
 * @returns {string}
 */
export const getSalaryDisplayText = (salaryRange) => {
  return formatSalaryRange(salaryRange).formattedText;
};

export default formatSalaryRange;
