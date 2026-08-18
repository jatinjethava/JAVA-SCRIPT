// Object-Oriented Programming (OOP) in JavaScript is a programming paradigm based on objects that contain data (properties) and behavior (methods). It helps organize code in a reusable and modular way.

// Uses objects and prototypes/classes to structure code logically.
// Supports key concepts like encapsulation, inheritance, and polymorphism.
// Improves code reusability, scalability, and maintainability.

// Need of OOP
// Before OOP, when the code size grows and multiple people work on a project, there are problems that arise.

// Changes in one team's code can cause other code to break. Hence difficult to maintain.
// Large number of parameters during function calls.
// Difficult to divide and maintain code across teams.
// Limited Code Reusability
// Not scalable as the code is not modular.

// Objects
// In JavaScript, an object is a collection of data (properties) and actions (methods) stored as key–value pairs.

// Properties hold values like strings, numbers, or even other objects.
// Methods are functions inside the object that define what it can do.
// Objects let you group related data and functionality together in one place.

// Classes
// In JavaScript, a class is a blueprint for creating objects with specific properties and methods. A class itself doesn’t hold values, it describes what an object should have and do. You create actual objects from a class using the new keyword.

// Class definition
class Car {
    constructor(brand, model) {
        this.brand = brand; // property
        this.model = model; // property
    }

    // method
    showDetails() {
        console.log(`This car is a ${this.brand} ${this.model}.`);
    }
}

// Creating objects from the class
const car1 = new Car("Toyota", "Corolla");
const car2 = new Car("Honda", "Civic");

// Using the objects
car1.showDetails(); // This car is a Toyota Corolla.
car2.showDetails(); // This car is a Honda Civic.

