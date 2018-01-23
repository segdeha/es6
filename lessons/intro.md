# Introduction

ES6 (officially [ECMAScript 2015](http://www.ecma-international.org/ecma-262/6.0/)) represents a major upgrade to the JavaScript language. It adds several important features and makes it simpler to write error-free code.

As of January 2018, ES6 is [extremely well-supported by modern web browsers](https://kangax.github.io/compat-table/es6/). The latest versions of Chrome, Safari, Firefox, and Edge all support nearly every feature of ES6 (as well as [the 2 new features of ES7](http://2ality.com/2016/01/ecmascript-2016.html)).

What about older browsers, you ask? In a production environment where you need to support, say, Internet Explorer, you can still write ES6! You’ll just need to add a compile step using tools such as [Webpack](https://webpack.github.io) and [Babel](https://babeljs.io). To see the [transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler) output you can expect from Babel, check out the [Babel REPL](https://babeljs.io/repl/).

This site is not intended to be [a complete compendium of ES6 features](http://es6-features.org). Think of it more as a “greatest hits”.

All codes blocks (such as the example below) can be copied and pasted into and run in the [ES6 REPL](https://repl.it/languages/babel). Most of them also have a “Run it” link to the REPL with that example pre-loaded. Try it. You’ll like it!

    const words = ['love', 'ES6']
    const [ feeling, version ] = words
    // logs 'I love ES6!'
    console.log(`I ${feeling} ${version}!`)

**_[Run it](https://repl.it/MsHN)_**
