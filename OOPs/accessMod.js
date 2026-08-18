// Access modifiers in JavaScript play a significant role in controlling the visibility and accessibility of class members. Although JavaScript is not traditionally an object-oriented programming (OOP) language, the introduction of classes and access modifiers in ECMAScript 6 (ES6) allowed developers to implement OOP principles into their applications.

// Purpose of Access Modifiers
// The main purpose of access modifiers is to control and restrict access to members of a class. This encapsulation ensures data integrity, security, and helps adhere to the principle of least privilege.
// Access modifiers also improve code maintainability and collaboration between team members. By explicitly defining who can access and modify class members, you minimize unexpected side effects and improve code clarity.
// Types of Access Modifiers
// Public (default)
// Private
// Protected
// Note: JavaScript does not have specific keywords for access modifiers like public, private, and protected in the same way that languages like Java or C# do. However, it provides mechanisms to simulate access control.

// Public Access Modifier
// Members marked as public can be accessed from anywhere. Public members are the default in JavaScript classes. They are accessible in and out of the classroom. For example, methods marked as public can be called from anywhere in your code.

class Person {
    constructor(name) {
        this.name = name; // Public member
    }

    introduce() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

const person = new Person('Alice');
person.introduce(); // Accessing a public method
console.log(person.name); // Accessing a public property


// Private Access Modifier
// Members marked as private are only accessible within the class itself. Private members are marked with the # symbol. These members are only accessible from within the class itself. They are invisible to external code. Private members provide encapsulation and ensure that the internals of a class remain hidden.

class Person {
    #name; // Private member

    constructor(name) {
        this.#name = name;
    }

    #sayHello() {
        console.log(`Hello, my name is ${this.#name}.`);
    }

    introduce() {
        // Accessing a private method
        this.#sayHello();
    }
}

const person = new Person('Bob');
// Accessing a public method that 
// accesses a private method
person.introduce();

// Error: Private member is not accessible
console.log(person.#name);


// Protected Access Modifier
// Members marked as protected are accessible within the class and its subclasses. Members marked as protected are accessible within the class and its subclasses. You can use the protected keyword to define protected members. These members maintain a level of encapsulation while allowing access to subclasses.

class Vehicle {
    constructor(speed) {
        if (this.constructor === Vehicle) {
            throw new Error("Abstract classes cannot be instantiated.");
        }
        this._speed = speed;
    }
}

class Car extends Vehicle {
    constructor(speed) {
        super(speed);
    }
    getSpeed() {
        // Accessing the protected member in a subclas
        return this._speed;
    }
}

const myCar = new Car(60);
console.log(myCar.getSpeed()); // Outputs: 60
console.log(myCar._speed); // Outputs: 60