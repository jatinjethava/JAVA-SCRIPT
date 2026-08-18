// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope during compilation, before the code is executed.
// Only declarations are hoisted, not initializations.
// “ First, let me see what variables and functions you declared… then I’ll run the code. ”
// 'var' variables are hoisted with undefined, while 'let' and 'const' are hoisted but remain in the Temporal Dead Zone until initialized.

// TDZ
// It refers to the period between the entering of a scope (such as a function or block) and the actual initialization of a variable declared with let or const. During this time, any reference to the variable before its initialization will throw a ReferenceError.
// Variables declared with let and const are hoisted to the top of their scope, but they are not initialized until their declaration line is reached.
// Any attempt to access these variables before their declaration will result in an error.
// The TDZ exists only for variables declared using let and const. Variables declared with var do not have this issue, as they are hoisted and initialized to undefined.

// {
//     let a; // TDZ starts
//     a = 10; // TDZ ends
// }


// var a;
// a = 10;
// console.log(a);

// let a;
// console.log(a);
// a = 10;
// Temporal Dead Zone (TDZ) error
// Time between declaration and initialization

// console.log(y); // ❌ ReferenceError
// let y = 20;
// console.log(z); // ❌ ReferenceError
// const z = 30;
// ✔ let and const are hoisted
// ❌ But they stay in Temporal Dead Zone (TDZ) until declared

// hello();
// function hello() {
//     console.log("Hello!");
// }
// Because function declarations are fully hoisted.
// JavaScript moves the whole function to the top internally before execution.

// hellow(); // Error: hellow is not defined
var hellow = function () {
    console.log("Hellow!");
};
// Because only the variable is hoisted, NOT the function value.
