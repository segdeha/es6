# Default Parameter Values

Similar to Python and other languages, you can now declare default values for parameters passed in to a function.

    function myFunc(foo = 42) {
        console.log(foo) // logs 42
    }
    myFunc()

You can also assign default values when using destructuring assigment on objects.

    const { foo = 42, bar = 'forty two' } = { foo: 7 }
    console.log(foo, bar); // logs 7 'forty two'
