/**
 * @author Titus Wormer
 * @copyright 2014 Titus Wormer
 * @license MIT
 * @module coleman-liau
 * @fileoverview Detect ease of reading according to the
 *   the Coleman-Liau index (1975).
 */

'use strict';

/* Expose. */
module.exports = colemanLiau;

/* The constants as defined by the revised Coleman-Liau index. */
var LETTER_WEIGHT = 0.0588;
var SENTENCE_WEIGHT = 0.296;
var BASE = 15.8;
var PERCENTAGE = 100;

/**
 * Get the grade level of a given value according to the
 * Coleman-Liau index.  More information is available at
 * WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/Coleman–Liau_index
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.letter - Number of letters (incl. digits).
 * @return {number}
 */
function colemanLiau(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.letter) {
    return NaN;
  }

  return (LETTER_WEIGHT * (counts.letter / counts.word * PERCENTAGE)) -
    (SENTENCE_WEIGHT * (counts.sentence / counts.word * PERCENTAGE)) -
    BASE;
}
