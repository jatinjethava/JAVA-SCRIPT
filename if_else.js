// Control flow statements in JavaScript control the order in which code is executed. These statements allow you to make decisions, repeat tasks, and jump between parts of a program based on specific conditions.

// if-else is used to check multiple conditions, including ranges, logical expressions, and complex comparisons.
// let a = 1;
// if (a >= 0 && a <= 5) {
//     console.log("0-5");
// } else if (a >= 5 && a <= 10) {
//     console.log("5-10");
// } else if (a > 10) {
//     console.log("10 +");
// } else {
//     console.log("negative value");
// }


// switch-case is used when one variable is compared against multiple fixed values.
// switch case
// let b = 5;
// switch (b) {
//     case 0:
//         console.log("0");
//         break;
//     case 5:
//         console.log("5");
//         break;
//     case 10:
//         console.log("10");
//         break;
//     default:
//         console.log("unknown value");
// }

// Ternary Operator
let c = 10;
let result = (c % 2 === 0) ? "even" : "odd";
console.log(result);

// 0, null, NaN, undefine, document.all, false this all are falsy value


// deffrence between if-else and switch-case //
// 👉 Used to check multiple conditions (true / false expressions).
// 👉 Used when one variable is compared against multiple fixed values.