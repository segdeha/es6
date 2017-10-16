# Arrow Functions

    () => {}

Yep, that’s a function in ES6. So are the following:

    arg => arg + 1

    (str1, str2) => {
        return str1 + str2
    }

In ES5 and prior, you had the following 2 options for creating functions:

    function myFunc() {}

    var myOtherFunc = function () {};

The main difference between the above is that `myFunc` is [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting) while `myOtherFunc` is not initialized in the interpretation phase, but only in the execution phase.

And, for completeness, you can give lazily declared functions names different from the variable they’re assigned to, as follows:

    var anotherFunc = function anotherNameForTheFunc() {};

In ES6, all of the old syntax still works. But, you can also declare functions with a condensed syntax, as follows:

    const addOne = arg => arg + 1

The above returns `1` plus whatever number you pass to it, as follows:

    addOne(7) // returns 8

## Notes on Syntax

The named argument before the arrow becomes a variable in the function scope. If you have more than 1 named argument, you’ll need to put them in parentheses.

Whatever is after the fat arrow is the return value. That can consist of more than a simple value or expression, as in the following example:

    const doStuff = (str1, str2) => {
        const output = `${str1} &amp; ${str2}`
        return output
    }

A little trick is that if you need to return an object literal, you will need to wrap the return value in parentheses.

    () => ({ foo: 1, bar: 2 })

In ES6, you can use arrow functions anywhere you would have used anonymous functions in previous versions of JavaScript.

## How this changes `this`

`this` trips up many-a new JavaScript programmer. Back in the day, we had to resort to workarounds like the following:

    function Dog() {
        var that = this;
        this.genus = 'Canis';
        document.querySelector('button')
            .addEventListener(function (evt) {
                // `this` is the DOM element clicked
                alert(that.genus); // alerts 'Canis'
            });
    }
    new Dog();

Later on, `Function.bind` was introduced and we could get the `this` we wanted a _little_ more elegantly. You tell me if the following is more elegant or not:

    function Dog() {
        this.genus = 'Canis';
        document.querySelector('button')
            .addEventListener(function (evt) {
                // `this` is the current instance of `Dog`
                alert(this.genus); // alerts 'Canis'
            }.bind(this));
    }
    new Dog();

Still, it was confusing to newcomers and confusing enough for old hands that we’d occasionally get tripped up by it.

> Arrow Functions _lexically_ bind their context so `this` actually refers to the originating context.

(That’s verbatim from [this article](https://medium.com/@reasoncode/javascript-es6-arrow-functions-and-lexical-this-f2a3e2a5e8c4).)

Another way to say that is that the value of `this` is inherited from its enclosing scope.

This is more intuitive in most situations.

Here is the `Dog` example from above, re-written.

    function Dog() {
        this.genus = 'Canis'
        document.querySelector('button')
            .addEventListener(evt => {
                // `this` is the current instance of `Dog`
                alert(this.genus) // alerts 'Canis'
            })
    }
    new Dog()

There is still a place for `Function.bind` because it allows you to bind both context and paramters, but that’s a rarer case. In most cases, you’ll be happy to have your `this` lexically bound.
