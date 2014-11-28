'use strict';

/**
 * The constants as defined by the revised Coleman-Liau index.
 */

var LETTER_WEIGHT,
    SENTENCE_WEIGHT,
    BASE,
    PERCENTAGE;

LETTER_WEIGHT = 0.0588;
SENTENCE_WEIGHT = 0.296;
BASE = 15.8;
PERCENTAGE = 100;

/**
 * Get the grade level of a given value according to the Coleman-Liau index.
 * More information is available at WikiPedia:
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

    return LETTER_WEIGHT * (counts.letter / counts.word * PERCENTAGE) -
        SENTENCE_WEIGHT * (counts.sentence / counts.word * PERCENTAGE) -
        BASE;
}

/**
 * Export `colemanLiau`.
 */

module.exports = colemanLiau;
