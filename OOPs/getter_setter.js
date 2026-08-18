// Class Getters and Setters
// We can use getter and setter methods to get the value of an object and set the value of an object. We can use the get keyword for the getter method and the set keyword for the setter methods

// Example: The code below demonstrates the creation and different implementations of JavaScript Classes.

class Dog {
    constructor(name) {
        this.name = name;
    }

    // Getter method
    get dogName() {
        return this.name;
    }

    // Setter method
    set dogName(newName) {
        this.name = newName;
    }

    // Regular method
    bark() {
        console.log(`${this.name} says woof!`);
    }
}

// creating an object
let myDog = new Dog('Rayne');
console.log(myDog.name);

myDog.dogName = 'Buddy';
console.log(myDog.name);

myDog.bark();