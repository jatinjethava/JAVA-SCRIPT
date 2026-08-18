// Inheritance in JavaScript is a mechanism that allows one object or class to acquire properties and methods from another. It helps in code reusability and creating hierarchical relationships between classes.

// Allows reuse of properties and methods from a parent class.
// Implemented using the extends keyword in ES6 classes.
// Supports method overriding in child classes.
// Example: Animal is the base class and Dog. Cat and Cow are derived classes that extend the Animal class.

class one {
    constructor(name) {
        this.name = name
    }
    speaks() {
        return `my name is ${this.name}`
    }
}
class two extends one {
    constructor(name) {
        super(name)
    }
}
const o = new two('Pranjal')
console.log(o.speaks())

class Animal {

    eat() {
        console.log("Eating");
    }
}

class Dog extends Animal {

    bark() {
        console.log("Barking");
    }
}

const dog = new Dog();

dog.eat();
dog.bark();