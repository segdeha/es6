# Template Literals

Working with strings in prior versions of JavaScript was pretty clunky. In ES6, the situation is much improved thanks to template literals.

ES5 and before:

    function getFullName(title, fname, lname, degree) {
        return title + ' ' + fname + ' ' + 
               lname + ', ' + degree;
    }
    // returns 'Ms Grace Hopper, PhD'
    getFullName('Ms', 'Grace', 'Hopper', 'PhD');

ES6:

    function getFullName(title, fname, lname, degree) {
        return `${title} ${fname} ${lname}, ${degree}`
    }
    // returns 'Ms Grace Hopper, PhD'
    getFullName('Ms', 'Grace', 'Hopper', 'PhD')

You can even use expressions to populate template tokens!

    function showYourWork(num1, num2) {
        return `${num1} + ${num2} = ${num1 + num2}`
    }
    // returns '3 + 4 = 7'
    showYourWork(3, 4)

There’s a bunch more you can do with template literals. For more advanced uses, see [the template literals article on MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals).
