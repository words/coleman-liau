'use strict'

module.exports = colemanLiau

var letterWeight = 0.0588
var sentenceWeight = 0.296
var base = 15.8
var percentage = 100

function colemanLiau(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.letter) {
    return NaN
  }

  return (
    letterWeight * ((counts.letter / counts.word) * percentage) -
    sentenceWeight * ((counts.sentence / counts.word) * percentage) -
    base
  )
}
