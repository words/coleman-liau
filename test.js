import test from 'tape'
import {colemanLiau} from './index.js'

test('colemanLiau', function (t) {
  t.ok(Number.isNaN(colemanLiau()), 'NaN when an invalid value is given')

  t.equal(
    round(colemanLiau({sentence: 5, word: 119, letter: 639})),
    round(14.53042),
    'should work'
  )

  t.end()
})

function round(value) {
  return Math.round(value * 1e6) / 1e6
}
