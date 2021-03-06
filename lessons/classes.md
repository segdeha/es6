# Classes

A class is a way to encapsulate data and methods. You create instances from what is, essentially, a blueprint of a thing.

Though different in nature from classical OOP languages, the simple case of creating instances from classes has always been fairly straightforward to do in JavaScript. What ES6 gives us is a new `class` keyword that makes for a cleaner syntax.

ES5 and before:

    function Animal(legs) {
        this.legs = legs || 0;
    }

    Animal.prototype.move = function () {
        if (this.legs > 0) {
            console.log('walk');
        }
        else {
            console.log('slither');
        }
    };

ES6:

    class Animal {
        constructor(legs = 0) {
            this.legs = legs
        }

        move() {
            if (this.legs > 0) {
                console.log('walk')
            }
            else {
                console.log('slither')
            }
        }
    }

Where things got confusing—especially for programmers coming from other languages—was in how older versions of JavaScript implemented class inheritance. Consider the following…

ES5 and before:

    function Animal(legs) {
        this.legs = legs || 0;
    }

    Animal.prototype.move = function () {
        if (this.legs > 0) {
            console.log('walk');
        }
        else {
            console.log('slither');
        }
    };

    function Dog(legs, sound) {
        Animal.call(this, legs);
        this.sound = sound || 'ruff';
    }

    Dog.prototype = Object.create(Animal.prototype);

    Dog.prototype.bark = function () {
        console.log(this.sound);
    };

    var myDog = new Dog(4);

    console.log(myDog.legs); // logs 4
    myDog.move(); // logs 'walk'
    myDog.bark(); // logs 'ruff'

**_[Run it](https://repl.it/MsJG)_**

ES6:

    class Animal {
        constructor(legs = 0) {
            this.legs = legs
        }

        move() {
            if (this.legs > 0) {
                console.log('walk')
            }
            else {
                console.log('slither')
            }
        }
    }

    class Dog extends Animal {
        constructor(legs = 4, sound = 'ruff') {
            super(legs)
            this.sound = sound
        }

        bark() {
            console.log(this.sound)
        }
    }

    let myDog = new Dog(4)

    console.log(myDog.legs) // logs 4
    myDog.move() // logs 'walk'
    myDog.bark() // logs 'ruff'

**_[Run it](https://repl.it/MsJJ)_**

The new syntax is just sugar for the old (including [the pitfalls](https://www.fusionbox.com/blog/detail/ecmascript-6-classes-potential-pitfalls-for-the-python-programmer/575/) therein), but it does read much more clearly.
