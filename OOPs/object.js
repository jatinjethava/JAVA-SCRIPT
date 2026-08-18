// An object in JavaScript is a collection of related data and functionality stored as key–value pairs, where values can be variables or functions (methods).

// Objects group related properties and behaviors into a single structure.
// All JavaScript values are objects except primitive types (string, number, boolean, null, undefined, symbol).

// Object Constructor
// A constructor function in JavaScript is a special function used with the new keyword to create and initialize objects of a specific type, allowing multiple instances with similar structure but unique properties.

// Used with the new keyword to create object instances
// Initializes object properties and methods
// Helps create multiple objects of the same type efficiently
// Each instance has its own separate data while sharing the same blueprint

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHello = function () {
        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
    };
}

//Creating Instances with a Constructor
const p1 = new Person("Akash", 30);
const p2 = new Person("Anvesh", 25);

p1.sayHello();
p2.sayHello();

// Class Constructor Method (ES6 and Beyond)
// With the introduction of ES6, JavaScript introduced class syntax, making object-oriented programming more structured and readable. Classes provide a more modern and organized way to define constructors.

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getCarInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

let myCar = new Car('Honda', 'Civic', 2022);
console.log(myCar.getCarInfo());

// this keyword
// The this keyword in JavaScript refers to the object associated with the current execution context, similar to OOP languages like C++, C#, and Java, and its value depends on how a function is called.

// this refers to the object linked to the current execution context, similar to OOP languages like C++, C#, and Java.
// Its value depends on how and where a function is called, not where it is defined.
// It allows functions and methods to access the object or data member that invoked them.

