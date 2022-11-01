# coleman-liau

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the ease of reading a text according to the [Coleman-Liau
index][formula].

## Contents

*   [What is this?](#what-is-this)
*   [When should I use this?](#when-should-i-use-this)
*   [Install](#install)
*   [Use](#use)
*   [API](#api)
    *   [`colemanLiau(counts)`](#colemanliaucounts)
*   [Types](#types)
*   [Compatibility](#compatibility)
*   [Related](#related)
*   [Contribute](#contribute)
*   [Security](#security)
*   [License](#license)

## What is this?

This package exposes an algorithm to detect ease of reading of English texts.

## When should I use this?

You’re probably dealing with natural language, and know you need this, if
you’re here!

This algorithm isn’t based on syllabbles compared to some other algorithms,
which means it’s quicker to calculate.

## Install

This package is [ESM only][esm].
In Node.js (version 14.14+, 16.0+), install with [npm][]:

```sh
npm install coleman-liau
```

In Deno with [`esm.sh`][esmsh]:

```js
import {colemanLiau} from 'https://esm.sh/coleman-liau@2'
```

In browsers with [`esm.sh`][esmsh]:

```html
<script type="module">
  import {colemanLiau} from 'https://esm.sh/coleman-liau@2?bundle'
</script>
```

## Use

```js
import {colemanLiau} from 'coleman-liau'

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

This package exports the identifier `colemanLiau`.
There is no default export.

### `colemanLiau(counts)`

Given an object containing the number of words (`word`), the number of sentences
(`sentence`), and the number of letters  (`letter`) in a document, returns the
grade level associated with the document.

##### `counts`

Counts from input document.

###### `counts.sentence`

Number of sentences (`number`, required).

###### `counts.word`

Number of words (`number`, required).

###### `counts.letter`

Number of letters (`number`, required).

##### Returns

Grade level associated with the document (`number`).

## Types

This package is fully typed with [TypeScript][].
It exports the additional type `Counts`.

## Compatibility

This package is at least compatible with all maintained versions of Node.js.
As of now, that is Node.js 14.14+ and 16.0+.
It also works in Deno and modern browsers.

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — uses character count instead of error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — uses a dictionary, suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — uses syllable count
*   [`flesch-kincaid`](https://github.com/words/flesch-kincaid)
    — like `flesch-formula`, returns U.S. grade levels
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — uses syllable count, hard to implement with a computer (needs
    POS-tagging and Named Entity Recognition)
*   [`smog-formula`](https://github.com/words/smog-formula)
    — like `gunning-fog`, without needing advanced NLP
*   [`spache-formula`](https://github.com/words/spache-formula)
    — uses a dictionary, suited for lower reading levels

## Contribute

Yes please!
See [How to Contribute to Open Source][contribute].

## Security

This package is safe.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://github.com/words/coleman-liau/workflows/main/badge.svg

[build]: https://github.com/words/coleman-liau/actions

[coverage-badge]: https://img.shields.io/codecov/c/github/words/coleman-liau.svg

[coverage]: https://codecov.io/github/words/coleman-liau

[downloads-badge]: https://img.shields.io/npm/dm/coleman-liau.svg

[downloads]: https://www.npmjs.com/package/coleman-liau

[size-badge]: https://img.shields.io/bundlephobia/minzip/coleman-liau.svg

[size]: https://bundlephobia.com/result?p=coleman-liau

[npm]: https://docs.npmjs.com/cli/install

[esm]: https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c

[esmsh]: https://esm.sh

[typescript]: https://www.typescriptlang.org

[contribute]: https://opensource.guide/how-to-contribute/

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Coleman–Liau_index
