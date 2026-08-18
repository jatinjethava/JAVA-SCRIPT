// A for loop is a control structure used to repeat a block of code a fixed number of times until a given condition becomes false.
// for (let i = 0; i < 5; i++) {
//     console.log(`For loop iteration: ${i}`);
// }


// A while loop is a control statement that repeats a block of code as long as a given condition is true.The condition is checked before each iteration.
// let j = 0;
// while (j < 5) {
//     console.log(`While loop iteration: ${j}`);
//     j++;
// }

// A do...while loop is a loop that executes the code block at least once, before checking the condition, and then repeats the loop as long as the condition is true.
// let k = 0;
// do {
//     console.log(`Do-While loop iteration: ${k}`);
//     k++;
// } while (k < 5);

// forEach()   
// array.forEach(function (element, index, array) {
//     // code to execute
// });
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.forEach(function (item, index) {
//     console.log(item + "-" + index);
// });
// a.forEach((item) => {
//     console.log(item);
// })

// for...in loop example (iterating over object properties)
// The for...in loop is used to iterate over the enumerable property names (keys) of an object.
// const obj = { a: 1, b: 2, c: 3 };
// for (const key in obj) {
//     console.log(`Key: ${key}, Value: ${obj[key]}`);
// }

// for...of loop example 
// The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, and sets. It automatically accesses each element of the collection one by one without needing to manually call next().
// const arr = [10, 20, 30, 40, 50];
// for (const value of arr) {
//     console.log(`Array value: ${value}`);
// }

// nested loop example
// A nested loop is a loop inside another loop.
// for (let m = 1; m <= 3; m++) {
//     for (let n = 1; n <= 2; n++) {
//         console.log(`Nested loop - m: ${m}, n: ${n}`);
//     }
// }

// break and continue example
// The break statement is used to exit a loop prematurely, while the continue statement skips the current iteration and moves to the next one.
for (let p = 0; p < 10; p++) {
    if (p === 5) {
        console.log("Breaking the loop at p = 5");
        break;
    }
    if (p % 2 === 0) {
        console.log(`Skipping even number: ${p}`);
        continue;
    }
    console.log(`Current value of p: ${p}`);
}

// labeled statement example
// A labeled statement provides a label to a loop, which can be used with break or continue to control the flow of nested loops.
// outerLoop: for (let x = 1; x <= 3; x++) {
//     for (let y = 1; y <= 3; y++) {
//         if (x === 2 && y === 2) {
//             console.log("Breaking out of outer loop");
//             break outerLoop; // break out of the outer loop
//         }
//         console.log(`x: ${x}, y: ${y}`);
//     }
// }

// infinite loop example (commented out to prevent actual infinite loop)
// while (true) {
//     console.log("This is an infinite loop");
// }

console.log("Loops demonstration completed.");
