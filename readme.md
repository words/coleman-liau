# coleman-liau

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the ease of reading a text according to the [Coleman-Liau
index][formula].

## Install

[npm][]:

```sh
npm install coleman-liau
```

## Use

```js
var colemanLiau = require('coleman-liau')

// For:
//
// Existing computer programs that measure readability are based largely upon
// subroutines which estimate number of syllables, usually by counting vowels.
// The shortcoming in estimating syllables is that it necessitates keypunching
// the prose into the computer.
// There is no need to estimate syllables since word length in letters is a
// better predictor of readability than word length in syllables.
// Therefore, a new readability formula was computed that has for its predictors
// letters per 100 words and sentences per 100 words.
// Both predictors can be counted by an optical scanning device, and thus the
// formula makes it economically feasible for an organization such as the U.S.
// Office of Education to calibrate the readability of all textbooks for the
// public school system.
//
// Containing 5 sentences, 119 words, and 639 letters or digits.
colemanLiau({sentence: 5, word: 119, letter: 639}) // => 14.53042…
```

## API

### `colemanLiau(counts)`

Given an object containing the number of words (`word`), the number of sentences
(`sentence`), and the number of letters  (`letter`) in a document, returns the
grade level associated with the document.

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — Uses character count instead of error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — Uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — Uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — Like `flesch-formula`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — Uses syllable count, hard to implement with a computer (needs
    POS-tagging and Named Entity Recognition)
*   [`smog-formula`](https://github.com/words/smog-formula)
    — Like `gunning-fog-index`, without needing advanced NLP
*   [`spache-formula`](https://github.com/words/spache-formula)
    — Uses a dictionary, suited for lower reading levels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/coleman-liau.svg

[build]: https://travis-ci.org/words/coleman-liau

[coverage-badge]: https://img.shields.io/codecov/c/github/words/coleman-liau.svg

[coverage]: https://codecov.io/github/words/coleman-liau

[downloads-badge]: https://img.shields.io/npm/dm/coleman-liau.svg

[downloads]: https://www.npmjs.com/package/coleman-liau

[size-badge]: https://img.shields.io/bundlephobia/minzip/coleman-liau.svg

[size]: https://bundlephobia.com/result?p=coleman-liau

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Coleman–Liau_index
