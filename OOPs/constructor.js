// A constructor in JavaScript is a special function used to create and initialize objects. It sets up object properties and is typically invoked using the new keyword. Constructors allow for the creation of multiple instances with similar properties and methods.

// In JavaScript, constructors can be defined in two main ways

// Function Constructor (Before ES6)
// Class Constructor (ES6 and Beyond)

// 1. Function Constructor Method (Before ES6)
// Before ES6, JavaScript used constructor functions to create and initialize objects. A constructor function is essentially a regular function that is invoked using the new keyword. Here's how you define a constructor function.

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.getCarInfo = function () {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

let myCar = new Car('Toyota', 'Camry', 2020);
console.log(myCar.getCarInfo());

// 2. Class Constructor Method (ES6 and Beyond)
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