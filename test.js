'use strict';

/**
 * Module dependencies (colemanLiau, assert).
 */

var colemanLiau = require('./'),
    assert = require('assert');

/**
 * Assert, but up to 6 digits.
 */

function roundAssert(a, b) {
    assert(Math.round(a * 1000000) === Math.round(b * 1000000));
}

/**
 * Unit tests.
 */

describe('colemanLiau()', function () {
    it('should be of type `function`', function () {
        assert(typeof colemanLiau === 'function');
    });

    it('should work', function () {
        var result;

        /**
         * Return NaN when an invalid value is given.
         */

        result = colemanLiau();

        assert(result !== result);

        /**
         * Existing computer programs that measure readability are based
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
         * Sentences: 5
         * Words: 119
         * Syllables: 639
         */

        roundAssert(colemanLiau({
            'sentence': 5,
            'word': 119,
            'letter': 639
        }), 14.53042);
    });
});
