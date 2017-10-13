# Introduction

ES6 (officially [ECMAScript 2015 Language](http://www.ecma-international.org/ecma-262/6.0/)) is fast being adopted by modern web browsers. As of October 2017, both Chrome and Safari fully support ES6 (as well as [the 2 new features of ES7](http://2ality.com/2016/01/ecmascript-2016.html)). Firefox and Edge support ES6 as well, albeit behind feature flags.

In a production environment where you need to support older browsers, you can still write ES6! You’ll just need to add a compile step using tools such as [Webpack](https://webpack.github.io) and [Babel](https://babeljs.io). To see the [transpiled](https://en.wikipedia.org/wiki/Source-to-source_compiler) output you can expect from Babel, check out the [Babel REPL](https://babeljs.io/repl/).

This site is not intended to be [a complete compendium of ES6 features](http://es6-features.org). Think of it more as a “greatest hits”.

All codes blocks (such as the example below) can be copied and pasted into and run in the [ES6 REPL](https://repl.it/languages/babel). Try it. You’ll like it!

    const words = ['love', 'ES6']
    const [ feeling, version ] = words
    // logs 'I love ES6!'
    console.log(`I ${feeling} ${version}!`)

