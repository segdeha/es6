# Rest & Spread

This one might actually be easier to grasp for people coming from Python where you have [`*args` and `**kwargs`](https://pythontips.com/2013/08/04/args-and-kwargs-in-python-explained/).

## Rest

The rest operator consists of prepending a function parameter with three dots. The rest parameter combines multiple parameters into a single variable that is expressed in the function scope as an array.

**Important:** The rest parameter must be the last argument to the function.

    function join(separator, ...values) {
        return values.join(separator)
    }
 
    // logs 'one|two|three'
    console.log(join('|', 'one', 'two', 'three'))

## Spread

The spread operator consists of prepending three dots to an array when passing it as a parameter to a function. This “spreads” the array values across the available named parameters.

    function sum(first, second) {
        return first + second
    }

    const nums = [ 7, 42, 99 ]

    // logs 49
    console.log(sum(... nums))

Note that the third value of the array in the example above is ignored because there is no named parameter to pick it up. It is, however, still available in the `arguments` object.
