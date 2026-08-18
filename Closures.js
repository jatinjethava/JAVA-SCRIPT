// 🔒 Closures in JavaScript
// A closure is a function that remembers and accesses variables from its outer scope even after the outer function has finished executing.

// Lexical Scoping
// Closures are rely on lexical scoping, which means a function’s scope is determined by where it is defined, not where it is executed, allowing inner functions to access variables from their outer function.

/* JavaScript uses lexical scoping, so inner functions can access variables of outer functions.
When an inner function is returned or passed around, JS keeps the outer variables alive → closure.*/

// function outer() {
//     let count = 0;

//     function inner() {
//         count++;
//         console.log(count);
//     }
//     return inner;
// }
// const counter = outer();
// counter(); // 1
// counter(); // 2
// counter(); // 3
// counter(); // 4


// function bankAccount() {
//     let balance = 1000;

//     return {
//         deposit(amount) {
//             balance += amount;
//             console.log(balance);
//         },
//         withdraw(amount) {
//             balance -= amount;
//             console.log(balance);
//         }
//     };
// }
// const account = bankAccount();
// account.deposit(600);
// account.withdraw(500);


// function greet(name) {
//     setTimeout(() => {
//         console.log("Hello " + name);
//     }, 2000);
// }
// greet("Jatin");

// ❌ Common Mistake (Loop + Closure)
for (var i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// 🔍 What happens step-by-step
// var i has function scope, NOT block scope
// There is only ONE variable i
// Loop runs fast:
// i = 1
// i = 2
// i = 3
// i = 4 → loop ends
// setTimeout is asynchronous
// When callbacks execute after 1 second:
// Loop is already finished
// i value is 4
// All callbacks share the same i


for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log(i);
    }, 1000);
}
// let i has block scope
// JavaScript creates a new i for every loop iteration
// Each setTimeout callback gets its own copy of i
// Values are preserved via closure
// 🧠 Interview One-Liner
// var creates one shared variable, while let creates a new block-scoped variable for each loop iteration, which closures capture correctly.

// 🔑 Why Closures Are Important?

// ✔ Data privacy
// ✔ Maintain state
// ✔ Callbacks & async code
// ✔ Functional programming
// ✔ React hooks (useState, useEffect)

// 🧠 Interview One-Liner:
// A closure is a function that remembers variables from its lexical scope even after the outer function has executed.