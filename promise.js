// 👉 A Promise is an object that represents the result of an asynchronous operation
// that will be available now, later, or never.

// Example of async work:
// Fetching data from server
// Reading a file
// API call
// Database operation
// setTimeout()

// A Promise is an object that represents the future result of an asynchronous operation.

// Pending: The task is in the initial state.
// Fulfilled: The task was completed successfully, and the result is available.
// Rejected: The task failed, and an error is provided.

// async function fetchData() {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products/1');
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error:', error);
//     }
// }

// async function fetchData() {
//     const response = await fetch('https://fakestoreapi.com/products/1');
//     console.log(await response.json());
// }

// fetchData();


// fetch('https://fakestoreapi.com/products/1')
//     .then((response) => {
//         return response.json(); // convert to JSON
//     })
//     .then((data) => {
//         console.log(data); // actual product data
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// deffrent between promise and async await

// 1. promise
//  A Promise is an object that represents the result of an asynchronous operation
// that will be available now, later, or never.

// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states

// 2. Async Function
// Async functions are a more modern and cleaner way to handle asynchronous operations in JavaScript. They allow you to write asynchronous code that looks and behaves like synchronous code, making it easier to read and maintain.
// Async functions always return a Promise.
// await pauses execution until the Promise is resolved or rejected.
// Improves readability compared to .then() and .catch() chaining.
// Makes error handling simpler using try...catch.
// Ideal for managing complex asynchronous flows in a structured way

// Async Function
// Async functions let us write promise-based code in a synchronous-looking way, improving readability while keeping the execution non-blocking. An async function always returns a Promise—if it returns a non-promise value, JavaScript automatically wraps it in a resolved Promise.

// Makes asynchronous code easier to read and maintain
// Does not block the main execution thread
// Always returns a Promise
// Non-promise return values are auto-wrapped in Promise.resolve()
// Works seamlessly with await for handling promises


// Let's See Advanced Promise Methods and Patterns for Effective Async Handling

// 1. Promise.all() Method
// Waits for all promises to resolve and returns their results as an array. If any promise is rejected, it immediately rejects.
// Promise.all([
//     Promise.resolve("Task 1 completed"),
//     Promise.resolve("Task 2 completed"),
//     Promise.reject("Task 3 failed")
// ])
//     .then((results) => console.log(results))
//     .catch((error) => console.error(error));

// 2. Promise.allSettled() Method
// Waits for all promises to settle (fulfilled or rejected) Method and returns an array of their outcomes.
// Promise.allSettled([
//     Promise.resolve("Task 1 completed"),
//     Promise.reject("Task 2 failed"),
//     Promise.resolve("Task 3 completed")
// ])
//     .then((results) => console.log(results));

// 3. Promise.race() Method
// Promise.race() Method resolves or rejects as soon as the first promise settles.
// Promise.race([
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 1 finished"), 1000)),
//     new Promise((resolve) =>
//         setTimeout(() =>
//             resolve("Task 2 finished"), 500)),
// ]).then((result) =>
//     console.log(result));
// Task 2 finished

// 4. Promise.any() Method
// Promise.any() Method resolves with the first fulfilled promise.If all are rejected, it rejects with an AggregateError.
Promise.any([
    Promise.reject("Task 1 failed"),
    Promise.resolve("Task 2 completed"),
    Promise.resolve("Task 3 completed")
])
    .then((result) => console.log(result))
    .catch((error) => console.error(error));

// 5. Promise.resolve() Method
// Promise.resolve() Method returns a promise that resolves with the given value.
// Promise.resolve("Immediate success")
//     .then((value) => console.log(value));

// 6. Promise.reject() Method
// Promise.reject() Method returns a promise that immediately rejects with a given reason.
// Promise.reject("Immediate failure")
//     .catch((error) => console.error(error));

// 7. Promise.finally() Method
// Promise.finally() Method runs a cleanup or final code block regardless of the promise’s result(fulfilled or rejected).
// Promise.resolve("Task completed")
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error))
//     .finally(() => console.log("Cleanup completed"));

// 8. Chaining with Promise.prototype.then() Method
// Allows sequential execution of promises, passing results to the next.then() Method.
// Promise.resolve(5)
//     .then((value) => value * 2) // Multiplies by 2
//     .then((value) => value + 3) // Adds 3
//     .then((finalValue) => console.log(finalValue)); // Logs: 13

