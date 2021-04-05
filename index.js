var letterWeight = 0.0588
var sentenceWeight = 0.296
var base = 15.8
var percentage = 100

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
