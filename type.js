// Primitive types store single values and are immutable (cannot be changed directly).
const PREMITIVE_TYPE = [
    'string',
    'number',
    'bigint',
    'boolean',
    'undefined',
    'symbol',
    'null'
];
console.log(PREMITIVE_TYPE);
// let a = 10;
// let b = a; // b gets a copy of the value of a
// b = 20; // changing b does not affect a
// console.log(a); // 10
// console.log(b); // 20

//===================================================================================

// non premerive type.js
// Stored by key, not by value.
const NON_PREMITIVE_TYPE = [
    'object',
    'function'
];
console.log(NON_PREMITIVE_TYPE);
// let obj1 = { name: 'jatin' };
// let obj2 = obj1; // obj2 gets a reference to the same object as obj1
// obj2.name = 'jethava'; // changing obj2 affects obj1
// console.log(obj1.name); // 'jethava'
// console.log(obj2.name); // 'jethava'

//===================================================================================

// reference type.js
// A reference type is a data type where the variable does not store the actual value, but instead stores a reference (memory address) to the value.
const REFERENCE_TYPE = [
    'array',
    'date',
    'regexp',
    'map',
    'set',
    'weakmap',
    'weakset'
];
console.log(REFERENCE_TYPE);
// ex.
// const arr = [1, 2, 3, 4, 5];
// b = arr;
// b.pop();
// console.log(arr); // [ 1, 2, 3, 4 ]
