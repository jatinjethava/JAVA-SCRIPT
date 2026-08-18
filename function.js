// Functions in JavaScript are reusable blocks of code designed to perform specific tasks. They allow you to organize, reuse, and modularize code. It can take inputs, perform actions, and return outputs.

// ✅ 1. Named Function
function greet(name) {
    console.log("Hello " + name);
}
greet("Jatin");

// 1️⃣ Function Declaration
function add(a, b) {
    return a + b;
}
console.log(add(5, 5));

// 2️⃣ Function Expression
// Store Function in Variable - first class function
// 2. Anonymous Function
const sub = function (a, b) {
    return a - b;
};
console.log(sub(8, 5));

// 3️⃣ Arrow Function(ES6)
const multiply = (a, b) => a * b;
console.log(multiply(2, 4));

// 4️⃣ Anonymous Function
setTimeout(function () {
    console.log("Hello");
}, 5000);

// 5️⃣ Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("Runs immediately");
})();
// (function () { })();

// 6️⃣ Callback Function
// A callback function is passed as an argument to another function and is executed after the completion of that function.
function hello(cb) {
    cb();
}
hello(() => console.log("Hello"));

// Constructor Function
// A special type of function used to create multiple objects with the same structure. It’s called with the new keyword.
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const user = new Person("Neha", 22);
console.log(user.name);

// Type	                    Hoisted	    this	Reusable	Syntax
// Function Declaration	    ✅ Yes	   Own	    ✅	      Long
// Function Expression	    ❌ No	   Own	    ✅	      Medium
// Arrow    Function	    ❌ No	   Lexical	✅	      Short
// Anonymous Function	    ❌ No	   Own	    ⚠️Limited  Medium
// IIFE	                    ❌ No	   Own	    ❌ No	  Special
// Callback Function	    Depends	     Depends  ✅	        Depends

// ================================================================================

// callback function :- A callback function is a function that is passed as an argument to another function and is executed later, usually after some task is completed.
function greet(name, callback) {
    console.log("Hello " + name);
    callback(); // calling callback function
}
function sayBye() {
    console.log("Goodbye!");
}
greet("Jatin", sayBye);

// ===============================================================================

// 👉 Asynchronous JavaScript allows tasks to run without blocking the main thread.
//  Long operations run in the background, and JS continues executing other code.

// 🔹 Ways to Handle Async in JS
// 1️⃣ Callbacks
setTimeout(() => {
    console.log("Callback executed");
}, 2000);


// 2️⃣ Promises
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved");
    }, 2000);
});
promise.then(result => console.log(result));

// 3️⃣ Async / Await (Best & Clean)
async function fetchData() {
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
}
fetchData();

// 🔁 Event Loop (Async Magic)
// JavaScript uses:
// Call Stack
// Web APIs
// Task Queue
// Microtask Queue

console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");

// ============================================================================

// 🥇 First-Class Function in JavaScript
// A first-class function means functions are treated like normal values in JavaScript.

// 🔹 Why JS Has First-Class Functions?
// Because JavaScript is a functional programming language.

// It enables:
// Callbacks
// Closures
// Higher-order functions
// Async programming

// Popular Higher Order Functions in JavaScript
// 1. map
// The map function is used to transform an array by applying a callback function to each element. It returns a new array.

// 2. filter
// The filter function is used to create a new array containing elements that satisfy a given condition.

// 3. reduce
// The reduce function accumulates array elements into a single value based on a callback function.

// 4. forEach
// The forEach function executes a provided function once for each array element.

// 5. find
// The find function returns the first element in the array that satisfies a given condition.

// 6. some
// The some function checks if at least one array element satisfies a condition.

// 7. every
// The every function checks if all array elements satisfy a condition.


// 🔁 First-Class Function     vs   Higher-Order Function
// First - Class Function	           Higher - Order Function
// Functions treated as values	       Function that accepts or returns another                                function
// Language feature	                   Programming concept

// 🧠 Interview One-Liner:
// A first-class function means functions in JavaScript can be assigned to variables, passed as arguments, and returned from other functions.



// ✅ Examples of Higher-Order Function

// 1️⃣ Function Taking Another Function
function calculate(a, b, operation) {
    return operation(a, b);
}
function add(x, y) {
    return x + y;
}
console.log(calculate(5, 3, add)); // 8

// 2️⃣ Function Returning Another Function
function multiplier(factor) {
    return function (num) {
        return num * factor;
    };
}
const double = multiplier(2);
console.log(double(5)); // 10

// 3️⃣ Built-in Higher-Order Functions
const numbers = [1, 2, 3, 4];
const result = numbers.map(num => num * 2);
console.log(result); // [2, 4, 6, 8]
