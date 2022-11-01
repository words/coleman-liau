import assert from 'node:assert'
import test from 'node:test'
import {colemanLiau} from './index.js'

test('colemanLiau', function () {
  // @ts-expect-error runtime
  assert.ok(Number.isNaN(colemanLiau()), 'NaN when an invalid value is given')

  assert.equal(
    round(colemanLiau({sentence: 5, word: 119, letter: 639})),
    round(14.530_42),
    'should work'
  )
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
