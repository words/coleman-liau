/**
 * @typedef Counts
 *   Counts from input document.
 * @property {number} sentence
 *   Number of sentences.
 * @property {number} word
 *   Number of words.
 * @property {number} letter
 *   Number of letters.
 */

/**
 * @typedef {Counts} ColemanLiauCounts
 *   Deprecated: please use the `Counts` type instead.
 */

const letterWeight = 0.0588
const sentenceWeight = 0.296
const base = 15.8
const percentage = 100

/**
 * Given an object containing the number of words (`word`), the number of
 * sentences (`sentence`), and the number of letters  (`letter`) in a
 * document, returns the grade level associated with the document.
 *
 * @param {Counts} counts
 *   Counts from input document.
 * @returns {number}
 *   Grade level associated with the document.
 */
export function colemanLiau(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.letter) {
    return Number.NaN
  }

  return (
    letterWeight * ((counts.letter / counts.word) * percentage) -
    sentenceWeight * ((counts.sentence / counts.word) * percentage) -
    base
  )
}
