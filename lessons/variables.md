# Variable Assignment

In older versions of JavaScript, the following was the only way to declare a variable:

    var myVariable = 42;

These variables were (still are, actually) scoped to the function in which they are created (or to the “global” scope if at the top level).

In ES6, we have at our disposal the following 2 new ways to declare variables:

    let myVariable = 42;
    const myOtherVariable = 'forty two';

We’ll cover changes in how these are scoped in a later lesson, but for now understand the following distinction between them:

- `let` is for variables that you may want to change
- `const` is for variables that you don’t want to change

To appreciate how big of a deal `const` is, the following is what it took in ES5 to approximate its functionality:

    Object.defineProperty(typeof global === 'object' ?
        global : window, 'myOtherVariable', {
        value:        'forty two',
        enumerable:   true,
        writable:     false,
        configurable: false
    });

This doesn’t mean the value of a `const` can’t change. E.g., you can assign an object to it and then change one of the properties. In other words, the [variable is not “immutable”](https://mathiasbynens.be/notes/es6-const) in a technical sense. It only means you can only once bind a value to the variable.

For full immutability, you can use `Object.freeze` or a library such as [Immutable.js](https://facebook.github.io/immutable-js/).

## A Note on Hoisting

Unlike `var`, neither `let` nor `const` is [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting).

Versions prior to ES6:

    console.log(x); // logs undefined
    var x = 1;

**_[Run it](https://repl.it/MsIH)_**

ES6:

    console.log(x) // throws a ReferenceError
    let x = 1

**_[Run it](https://repl.it/MsIR/0)_**

**Note:** A bug in the [ES6 REPL](https://repl.it/languages/babel) will cause the second example not to throw an error. Try that one out in a console to see the correct result.
