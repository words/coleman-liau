'use strict'

var test = require('tape')
var nan = require('is-nan')
var colemanLiau = require('.')

test('colemanLiau', function(t) {
  t.ok(nan(colemanLiau()), 'NaN when an invalid value is given')

  t.equal(
    round(colemanLiau({sentence: 5, word: 119, letter: 639})),
    round(14.53042),
    'should work'
  )

  t.end()
})

function round(val) {
  return Math.round(val * 1e6) / 1e6
}
