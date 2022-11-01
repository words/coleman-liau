const letterWeight = 0.0588
const sentenceWeight = 0.296
const base = 15.8
const percentage = 100

/**
 * @typedef {Object.<string, number>} ColemanLiauCounts
 * @propert {number} sentence
 * @propert {number} word
 * @propert {number} letter
 */

/**
 * Given an object containing the number of words (`word`), the number of sentences (`sentence`), and the number of letters  (`letter`) in a document, returns the grade level associated with the document.
 *
 * @param {ColemanLiauCounts} counts
 * @returns {number}
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
