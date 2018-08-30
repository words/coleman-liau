'use strict';

var test = require('tape');
var nan = require('is-nan');
var colemanLiau = require('.');

/* Tests. */
test('colemanLiau', function (t) {
  t.ok(nan(colemanLiau()), 'NaN when an invalid value is given');

  /* Existing computer programs that measure readability are based
   * largely upon subroutines which estimate number of syllables,
   * usually by counting vowels. The shortcoming in estimating
   * syllables is that it necessitates keypunching the prose into
   * the computer. There is no need to estimate syllables since word
   * length in letters is a better predictor of readability than word
   * length in syllables. Therefore, a new readability formula was
   * computed that has for its predictors letters per 100 words and
   * sentences per 100 words. Both predictors can be counted by an
   * optical scanning device, and thus the formula makes it
   * economically feasible for an organization such as the U.S.
   * Office of Education to calibrate the readability of all textbooks
   * for the public school system.
   *
   * Sentences: 5, words: 119, syllables: 639. */
  t.equal(
    round(colemanLiau({
      sentence: 5,
      word: 119,
      letter: 639
    })),
    round(14.53042),
    'should work'
  );

  t.end();
});

function round(val) {
  return Math.round(val * 1e6) / 1e6;
}
