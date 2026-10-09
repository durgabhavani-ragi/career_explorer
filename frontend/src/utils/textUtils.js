/**
 * textUtils.js
 * Helpers for keeping UI text clean, concise, and readable.
 */

/**
 * Extracts a concise summary (approx 2–3 sentences) from a longer job description.
 * Preserves database records intact while keeping UI presentations brief and focused.
 *
 * @param {string} text - Raw description from the database
 * @param {number} maxSentences - Target sentence count (default 3)
 * @returns {string} Clean, concise description
 */
export const getBriefDescription = (text, maxSentences = 3) => {
  if (!text || typeof text !== 'string') return '';
  const trimmed = text.trim();
  if (!trimmed) return '';

  // Match sentences ending with period, exclamation mark, or question mark
  const sentences = trimmed.match(/[^.!?]+[.!?]+(\s|$)/g);

  if (sentences && sentences.length > 0) {
    const selected = sentences.slice(0, maxSentences).join('').trim();
    if (selected.length > 20) {
      return selected;
    }
  }

  // Fallback if no clean sentence delimiters found: truncate cleanly at sentence boundary or word boundary
  if (trimmed.length > 220) {
    const cut = trimmed.substring(0, 220);
    const lastSpace = cut.lastIndexOf(' ');
    return `${cut.substring(0, lastSpace > 0 ? lastSpace : 220).trim()}...`;
  }

  return trimmed;
};

export default getBriefDescription;
