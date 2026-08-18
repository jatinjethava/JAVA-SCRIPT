// let a = 5, b = 10;
// [a, b] = [b, a];
// console.log(a, b); // 10 5

// let a = 5;
// let b = 10;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

const a = 5;
const b = 10;
const [newA, newB] = [b, a];
console.log(newA, newB);

// const swap = (x, y) => [y, x];

// const [newA, newB] = swap(a, b);
// console.log(newA, newB);