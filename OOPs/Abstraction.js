// In JavaScript, Abstraction can be defined as the concept of hiding the inner complex workings of an object and exposing only the essential features to the user.

// Hiding Complexity: Implementation is hidden, it shows only the necessary details.
// Modularity: Code is organized in a reusable form, which improves maintainability and readability.
// Security: Important data cannot be directly accessed, they are hidden.
// Reusability: The code can be reused across different applications.
// In JavaScript, abstraction is often achieved through functions, classes, and modules that encapsulate behaviour and expose only the necessary parts to the outside world.

// Hide internal complexity

class P {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getD() {
        return `${this.name} is ${this.age} years old.`;
    }
}
const p1 = new P("Anuj", 30);
console.log(p1.getD());

// Implementing Abstraction in JavaScript
// JavaScript does not provide built-in support for implementing the abstraction like the other programming language gives. However we can implement abstraction in JavaScript using functions, objects, closures, and classes.

// Using Functions
// Functions are one of the most simple ways to introduce abstraction in JavaScript. They allow you to wrap complex logic into a reusable block of code, exposing only the function name and parameters.

