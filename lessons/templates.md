# Template Literals

Working with strings in prior versions of JavaScript was pretty clunky. In ES6, the situation is much improved thanks to template literals.

ES5 and before:

    function getFullName(title, fname, lname, degree) {
        return title + ' ' + fname + ' ' + 
               lname + ', ' + degree;
    }
    // returns 'Rear Admiral Grace Hopper, PhD'
    getFullName('Rear Admiral', 'Grace', 'Hopper', 'PhD');

**_[Run it](https://repl.it/MsJR)_**

ES6:

    function getFullName(title, fname, lname, degree) {
        return `${title} ${fname} ${lname}, ${degree}`
    }
    // returns 'Rear Admiral Grace Hopper, PhD'
    getFullName('Rear Admiral', 'Grace', 'Hopper', 'PhD')

**_[Run it](https://repl.it/MsJY)_**

You can evaluate expressions to populate template tokens, as shown below:

    function showYourWork(num1, num2) {
        return `${num1} + ${num2} = ${num1 + num2}`
    }
    // returns '3 + 4 = 7'
    showYourWork(3, 4)

**_[Run it](https://repl.it/MsJ2)_**

You can even use the return value from a function!

    function sum(num1, num2) {
        return num1 + num2
    }

    function showYourWork(num1, num2) {
        return `${num1} + ${num2} = ${sum(num1, num2)}`
    }
    // returns '3 + 4 = 7'
    showYourWork(3, 4)

**_[Run it](https://repl.it/MsJ5)_**

There’s a bunch more you can do with template literals. For more advanced uses, see [the template literals article on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) or this [presentation I made on the topic](https://segdeha.com/es6-templates).
