let array = [10, 20, 5, 15, 30];

// 1. logic to find max, min and average of an array without using built-in functions
// let max = array[0];
// let min = array[0];
// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     if (array[i] > max) {
//         max = array[i];
//     }

//     if (array[i] < min) {
//         min = array[i];
//     }
//     sum += array[i];
// }

// let avg = sum / array.length;

// console.log("Maximum:", max);
// console.log("Minimum:", min);
// console.log("Average:", avg);

// 2. logic to find max, min and average of an array using built-in functions
// let max = Math.max(...array);
// let min = Math.min(...array);
// let sum = array.reduce((acc, val) => acc + val, 0);
// let avg = sum / array.length;

// console.log("Maximum:", max);
// console.log("Minimum:", min);
// console.log("Average:", avg);

// 3. logic to find max, min and average of an array using reduce method
let max = array.reduce((old, cur) => old > cur ? old : cur)
console.log(max)
let min = array.reduce((old, cur) => old < cur ? old : cur)
console.log(min)
let sum = array.reduce((old, cur) => old + cur)
console.log(sum)

let avg = sum / array.length;
console.log("Average:", avg);
