'use strict';

module.exports = colemanLiau;

var LETTER_WEIGHT = 0.0588;
var SENTENCE_WEIGHT = 0.296;
var BASE = 15.8;
var PERCENTAGE = 100;

function colemanLiau(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.letter) {
    return NaN;
  }

  return (LETTER_WEIGHT * (counts.letter / counts.word * PERCENTAGE)) -
    (SENTENCE_WEIGHT * (counts.sentence / counts.word * PERCENTAGE)) -
    BASE;
}
