# Block Scope

In earlier versions of JavaScript, scope is defined within **functions.** Variables defined in a function’s scope are only accessible within that function. The exception is the “global” scope, which exists outside any function and is accessible everywhere.

The following shows how function scope works:

    var x = 1;
    var y = 2;

    function printer() {
        var x = 3;
        var z = 4;
        console.log(x); // logs 3
        console.log(y); // logs 2
        console.log(z); // logs 4
    }

    printer();
    console.log(x); // logs 1
    console.log(z); // throws a ReferenceError

**_[Run it](https://repl.it/MsJa)_**

ES6 adds another scope: block scope. This means you can create variables that are available only inside **blocks** (e.g., within a conditional or a loop). Blocks are kind of like Vegas. _What happens in blocks stays in blocks!_

    let x = 1

    if (true) {
        let x = 2
        console.log(x) // logs 2
    }

    console.log(x) // logs 1

**_[Run it](https://repl.it/MsJf)_**

This is especially handy for `for` loops where pre-ES6 the index variable would have leaked into the enclosing scope.

    let y = 1
    let z = null

    for (let i = 0; i < 3; ++i) {
        console.log(y) // logs 1 3 times
        console.log(i) // logs 0, 1, then 2
        z = i
    }

    console.log(z) // logs 2
    console.log(i) // throws a ReferenceError

**_[Run it](https://repl.it/MsJi)_**
