// 🔹 What is Currying in JavaScript?
// Currying is a technique where a function that takes multiple arguments is transformed into a series of functions, each taking one argument at a time.
// Currying means breaking a function with many parameters into multiple functions with one parameter each.
// Uses closures to retain earlier arguments.

function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
console.log(add(1)(2)(3));
// ========================================================================
const sum = a => b => c => a + b + c;
console.log(sum(1)(2)(3));
// ========================================================================
// Each function remembers the previous value using closure

// function multiply(a) {
//     return function (b) {
//         return a * b;
//     };
// }
// const double = multiply(2);
// console.log(double(5)); // 10
// ========================================================================
function discount(rate) {
    return function (price) {
        return price - price * rate;
    };
}

const tenPercent = discount(0.10);
console.log(tenPercent(500)); // 450
console.log(tenPercent(1000)); // 900

function multiply(a) {
    return function (b) {
        return a * b;
    };
}
const double = multiply(2);
const triple = multiply(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15