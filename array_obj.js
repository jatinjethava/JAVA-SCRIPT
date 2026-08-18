// Array in js
// An Array is a special object used to store multiple values in a single variable.
// In your MERN stack apps (products, orders, users, cart items), arrays are everywhere.

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// a.push(11, 12, 13, 14, 15);
// a.pop(); // delete at the end
// a.shift(); // delete at the beganing
// a.unshift(10); // add at the beganing
// a.splice(2, 3); // delete with range
// console.log([3, 1, 2, 4].sort());
// const newArr = arr1.concat(arr2);
// console.log(a.slice(1, 5));
console.log(a);

let obj = {
    name: "jatin jethava",
    phone_no: 8160082638,
    email: "jatin@gmail.com",
}

const person = {
    name: "Jatin",
    age: 22,
    isDeveloper: true,
    greet: function () {
        console.log("Hello!");
    }
};
// delete person.greet;

// console.log(obj);
// console.log(person);
// console.log(person.greet());