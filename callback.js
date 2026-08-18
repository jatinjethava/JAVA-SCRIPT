// ✅ A callback function is a function that is passed as an argument to another function and executed later.
// A function can accept another function as a parameter.
// Callbacks allow one function to call another at a later time.
// A callback function can execute after another function has finished.

function greet(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayBye() {
    console.log("Goodbye!");
}

greet("Ajay", sayBye);

// JavaScript executes code line by line (synchronously), but sometimes we need to delay execution or wait for a task to complete before running the next function. Callbacks help achieve this by passing a function that is executed later.

// Uses of Callbacks in JavaScript
// 1. Handling Asynchronous Operations Callbacks are widely used in
// API requests (fetching data)
// Reading files (Node.js file system)
// Event listeners (clicks, keyboard inputs)
// Database queries (retrieving data)

// 2. Callbacks in Functions Handling Operations
// When a function needs to execute different behaviors based on input, callbacks make the function flexible.
function calc(a, b, callback) {
    return callback(a, b);
}

function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(5, 3, add));
console.log(calc(5, 3, mul));

// 3. Callbacks in Event Listeners
// JavaScript is event-driven, and callbacks handle user interactions like clicks and key presses.

// 4. Callbacks in API Calls (Fetching Data)
// Callbacks are useful when retrieving data from APIs.
function fetch(callback) {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error("Error:", error));
}

function handle(data) {
    console.log("Fetched Data:", data);
}

fetch(handle);