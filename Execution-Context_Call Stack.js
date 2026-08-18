// 🔷 Execution Context in JavaScript

// An Execution Context is an environment where JavaScript code is executed.
// 👉 Whenever JS runs any code, it creates an execution context.

// 1️⃣ Global Execution Context (GEC)
// Created once when JS file starts
// this → refers to window (browser)
// Global variables & functions live here

// 2️⃣ Function Execution Context (FEC)
// Created every time a function is called
// Has its own variables & scope

// 3️⃣ Eval Execution Context
// Created by eval() (rarely used)

// 🧠 Execution Context has 2 Phases
// Every execution context is created in two phases:

// 🔹 Phase 1: Memory Creation Phase (Creation Phase)
// ✔ Memory is allocated
// ✔ Variables are initialized
// ✔ Functions are stored fully

// 🔹 Phase 2: Code Execution Phase
// ✔ Code is executed line by line
// ✔ Values are assigned
// ✔ Functions are called


// 📚 Call Stack (Execution Stack)

// The Call Stack keeps track of execution contexts.
// Call Stack is a data structure that keeps track of function calls in JavaScript.
// 👉 It follows LIFO (Last In, First Out).

function one() {
    two();
}
function two() {
    three();
}
function three() {
    console.log("Hello");
}
one();