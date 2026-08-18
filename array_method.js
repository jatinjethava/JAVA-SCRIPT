// In JavaScript, Array Methods are built-in functions used to perform operations on arrays like:
// adding elements
// removing elements
// searching
// sorting
// filtering
// transforming data

// const arr = [1, 2, 3];
// arr.forEach((value, index) => {
//     console.log(value, index);
// });


// const numbers = [10, 25, 30, 5];
// const result = numbers.filter(num => num > 20);
// console.log(result); // [25, 30]


// reduce() is used to combine all array values into a single value
// (like sum, product, max, object, etc.)
// const arr1 = [1, 2, 3, 4];
// const sum = arr1.reduce((old, curr) => {
//     return old + curr;
// }, 0); // Initial value is 2
// console.log(sum); // 10


// const users = [{ id: 1 }, { id: 2 }];
// const user = users.find(u => u.id === 2);
// console.log(user); // { id: 2 }

// const index = users.findIndex(u => u.id === 2);

// [1, 2, 3].includes(2); // true

// [1, 2, 3].some(num => num > 2); // trues
// Checks if ANY ONE element passes the condition
// Stops as soon as it finds one true

// [2, 4, 6].every(num => num % 2 === 0); // true
// Checks if EVERY element passes the condition
// If one fails → result is false

// // 🔁 map() in JavaScript – Simple to Advanced Example
// // The map() method is used to transform each element of an array and return a new array.
// const num = [1, 2, 3, 4];
// const doubled = num.map(num => num * 2);
// console.log(doubled);
// // [2, 4, 6, 8]

// const fruits = ["apple", "banana", "mango"];

// const res = fruits.map((fruit, index) => {
//     return `${index + 1}. ${fruit}`;
// });

// console.log(res);
// // ["1. apple", "2. banana", "3. mango"]


// const user1 = [
//     { name: "Jatin", age: 22 },
//     { name: "Amit", age: 25 }
// ];

// const names = user1.map(user => user.name);
// console.log(names);
// // ["Jatin", "Amit"]

// // 🔹 map() to Add New Property
// const products = [
//     { name: "Book", price: 100 },
//     { name: "Pen", price: 10 }
// ];
// const updated = products.map(item => ({
//     ...item,
//     priceWithGST: item.price * 1.18
// }));
// console.log(updated);


// fetch("https://fakestoreapi.com/products")
//     // .then(res => res.json())
//     .then(data => {
//         const titles = data.map(item => item.title);
//         console.log(titles);
//     });
