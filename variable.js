// JavaScript is a programming language used to create dynamic content for websites. It is a lightweight, cross-platform, and single-threaded programming language. It's an interpreted language that executes code line by line, providing more flexibility.

// It is used for building interactive web applications, supports both client-side and server-side development, and integrates seamlessly with HTML, CSS, and a rich standard library.

// Scope determines where a variable can be accessed or used within a JavaScript program.It helps control the visibility and lifetime of variables in different parts of the code.

// A variable is a named container used to store data so you can reuse and manipulate it later in your program.
// In JavaScript, you declare variables using:
// var, let, const

// var a = 10;
// var a = 20; // redeclaration allowed with var
// console.log(a); // 20

// let b;
// b = 20;
// console.log(b); // 30
// // let b = 30; // redeclaration not allowed with let & Cannot be redeclared in same scope
// b = 30;

// const c = 30;
// // const c = 40; // redeclaration not allowed with const
// // c = 40; // reassignment not allowed with const Also its Block scoped
// console.log(c); // 30


// for var ----------


// function data() {
//     for (var i = 0; i <= 12; i++) {
//         console.log(i);
//     }
// }
// data();
// var is function-scoped, not block-scoped.
// So i is accessible outside the for loop but still inside the function.

// function data() {
//     for (let i = 0; i <= 12; i++) {
//         console.log(i);
//     }
//     // console.log(i); // not work
// }
// data();
// i is not define
// Variables declared with let are block-scoped
// The { } of the for loop is a separate block

var x = 10;
let y = 100;

{
    var x = 100;
    let y = 10;
}

console.log(x, y)