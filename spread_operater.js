// 👉 The spread operator (...) is used to expand (spread) elements of an array, object, or string into individual values.
// The spread operator (...) expands iterable values into individual elements.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = [...a];
console.log(b);

// let [first, second, ...rest] = a;
// console.log(first);
// console.log(second);

// console.log(rest);

// let obj = {
//     name: "jatin jethava",
//     phone_no: 8160082638,
//     email: "jatin@gmail.com",
// }

// let { name: first, phone_no: second, ...rest } = obj;
// console.log(first);
// console.log(second);
// console.log(rest);

let str = "JATIN";
let chars = [...str];
// console.log(chars);
console.log(chars.join(""));

// 1️⃣ Spread with Arrays
// ✅ Copy an Array
// ✅ Merge Arrays
// ✅ Add Elements While Copying

// 2️⃣ Spread with Objects(Very Important)
// ✅ Copy Object
// ✅ Merge Objects
// ✅ Update Object Property