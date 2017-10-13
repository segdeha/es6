# Destructuring Assignment

Destructuring assignment allows you to assign 1 or more values from an object or array to named variables in a single step.

## Object Destructuring

A simple example follows:

    const aFruit = {
        kind: 'Apple',
        color: 'Red'
    }
    let { kind, color } = aFruit
    console.log(kind, color) // logs 'Apple' 'Red'

This is especially handy when working with an API that gives you more information than you need for the current task. Consider the following example:

    /**
     * Consume a response from the API and kick off an email
     * @param <Object> obj API response object in the form of:
     * {
     *     first_name: <String>,
     *     last_name: <String>,
     *     dob: <String>,
     *     email: <String>,
     *     address: <String>,
     *     balance: <Number>
     * }
     */
    function handleAPIResponse(obj) {
        // this is the object destructuring
        let { first_name, email, balance } = obj
        // pass the values we care about to the next function
        sendEmail(first_name, email, balance)
    }

    /**
     * Log values (don’t really send the email)
     */
    function sendEmail(first_name, email, balance) {
        console.log(first_name) // logs 'Beyoncé'
        console.log(email) // logs 'bey@knowles.com'
        console.log(balance) // logs 1234.56
    }

    const fakeData = {
        first_name: 'Beyoncé',
        last_name: 'Knowles',
        dob: '1981-09-04',
        email: 'bey@knowles.com',
        address: '123 Rodeo Drive, Beverly Hills, CA',
        balance: 1234.56
    }

    handleAPIResponse(fakeData)

In the above example, we assign the different object properties to variables with the same names. We could also change the names by changing the destructuring statement to something like the following:

    let {
        first_name: fname,
        email: e_mail,
        balance: amount_owed
    } = obj

    console.log(fname) // logs 'Beyoncé'
    console.log(first_name) // throws a ReferenceError

I don’t know about you, but that looks a little backwards to me. Oh well, that’s how it works!

## Array Destructuring

Array destructuring is very similar to object destructing as demonstrated in the following example:

    const aFruit = [ 'Apple', 'Red' ]
    let [ kind, color ] = aFruit
    console.log(kind, color) // logs 'Apple' 'Red'

A fairly common task in technical interviews is to swap the values for 2 variables as simply as possible. Destructuring elimintates the need to use a temporary variable to do this.

In ES6:

    const list = [ 1, 2, 3 ]
    let [ a, , b ] = list // note: we’re skipping the 2nd value
    [ b, a ] = [ a, b ]
    console.log(a, b) // logs 3 1

The same operation, before ES6:

    var list = [ 1, 2, 3 ];
    var a = list[0], b = list[2];
    var tmp = a; a = b; b = tmp;
    console.log(a, b) // logs 3 1
