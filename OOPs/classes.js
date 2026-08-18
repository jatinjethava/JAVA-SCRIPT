// JavaScript classes (introduced in ES6) provide a structured way to create objects with shared properties and methods. They support inheritance, encapsulation, and modularity, making it easier to write object-oriented code.

// class ClassName {
//     constructor() {
//         // Initialize properties here
//     }
//     // Define methods here
//     methodName() {
//         // Method code
//     }
// }

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    g() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
let p1 = new Person("Pranjal", 20);
p1.g();

// Inheritance in Classes
// Inheritance allows one class to extend another, inheriting its properties and methods while adding or overriding functionality.

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    di() {
        console.log(`${this.year} ${this.make} ${this.model}`);
    }
}
class ElectricCar extends Car {
    constructor(make, model, year, batteryLife) {
        super(make, model, year);
        this.batteryLife = batteryLife;
    }
    d() {
        console.log(`Battery life: ${this.batteryLife} hours`);
    }
}
let tesla = new ElectricCar("Tesla", "Model S", 2022, 24);
tesla.di()
tesla.d();

