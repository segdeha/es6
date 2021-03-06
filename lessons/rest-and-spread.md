# Rest & Spread

These bear some resemblance to the concepts of [`*args` and `**kwargs`](https://pythontips.com/2013/08/04/args-and-kwargs-in-python-explained/) in Python.

## Rest

The rest operator consists of prepending a function parameter with three dots. The rest parameter combines multiple parameters into a single variable that is expressed in the function scope as an array.

**Important:** The rest parameter must be the last argument to the function.

    function join(separator, ...values) {
        return values.join(separator)
    }
 
    // logs 'one|two|three'
    console.log(join('|', 'one', 'two', 'three'))

**_[Run it](https://repl.it/MsJw)_**

## Spread

The spread operator consists of prepending three dots to an array when passing it as a parameter to a function. This “spreads” the array values across the available named parameters.

    function sum(first, second) {
        return first + second
    }

    const nums = [ 7, 42, 99 ]

    // logs 49
    console.log(sum(...nums))

**_[Run it](https://repl.it/MsJz)_**

Note that the third value of the array in the example above is ignored because there is no named parameter to pick it up. It is, however, still available in the `arguments` object.
