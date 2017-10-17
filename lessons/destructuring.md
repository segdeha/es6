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

Object destructuring is a common idiom in [React](https://reactjs.org) components to pull pieces of data from the `props` object.

    class List extends Component {
      render() {
        // this is the destructuring statement
        const { list } = this.props
        return (
          <ul>
            { list.map((item) => <li>{ item }</li>) }
          </ul>
        )
      }
    }

In the above example, we assign the `list` property to a variable with the same name. We could also change the name by changing the destructuring statement to something like the following:

    const { list: list_items } = this.props

I don’t know about you, but that looks a little backwards to me. Oh well, that’s how it works!

## Array Destructuring

Array destructuring is very similar to object destructing as demonstrated in the following example:

    const aFruit = [ 'Apple', 'Red' ]
    let [ kind, color ] = aFruit
    console.log(kind, color) // logs 'Apple' 'Red'

A real-world use for array destructuring is grabbing the match from regular expression matches, as in the following example:

    const str = 'bey@knowles.com'
    const rgx = /\@(\w+\.\w+)/
    // note: we ignore the first return value
    let [, match] = str.match(rgx) || []
    console.log(match) // logs 'knowles.com'

A fairly common task in technical interviews is to swap the values for 2 variables as simply as possible. Destructuring elimintates the need to use a temporary variable to do this.

In ES6:

    const list = [ 1, 2, 3 ]
    let [ a, , b ] = list // note: we skip the 2nd value
    [ b, a ] = [ a, b ]
    console.log(a, b) // logs 3 1

The same operation, before ES6:

    var list = [ 1, 2, 3 ];
    var a = list[0], b = list[2];
    var tmp = a; a = b; b = tmp;
    console.log(a, b) // logs 3 1
