// JavaScript Function Binding
// Function binding refers to the process of associating a function with a particular context, object, or set of arguments so that it behaves in a specific way when called.

// Function binding means permanently attaching a specific object to a function’s this keyword.

// const fun = user.greet;
// fun();

const user = {
    name: "Jatin",

    clickHandler: function () {
        console.log(this.name);
    }
};
button.addEventListener(
    "click",
    user.clickHandler.bind(user)
);

// 1. bind() Method
// The bind() method is used to create a new function that, when called, has its this value set to a specified value, regardless of how the function is invoked.

const person = {
    name: 'GFG',
    greet: function () {
        console.log('Hello, ' + this.name);
    }
};
const greet = person.greet;
const boundGreet = greet.bind(person);
boundGreet();

// 2. call() Method
// The call() method immediately invokes a function, allowing you to set the value of this and pass arguments to the function.
const person = {
    name: 'GFG',
    greet: function (city) {
        console.log('Hello, ' + this.name + ' from ' + city);
    }
};
person.greet('Delhi');
const greet = person.greet;
greet.call(person, 'Noida');

// 3. apply() Method
// Similar to call(), the apply() method invokes a function and allows you to set the value of this, but the difference is that the arguments are passed as an array (or an array-like object).
// const person = {
//     name: 'GFG',
//     greet: function (city, country) {
//         console.log('Hello, ' + this.name + ' from ' + city + ', ' + country);
//     }
// };
// person.greet('Delhi', 'India');
// const greet = person.greet;

// Arrow Functions and this Binding
// Arrow functions behave differently when it comes to the this keyword. They do not have their own this context. Instead, arrow functions inherit the this value from the surrounding lexical context.
// const person = {
//     name: 'GFG',
//     greet: function () {
//         const arrowGreet = () => {
//             console.log('Hello, ' + this.name);
//         };
//         arrowGreet();
//     }
// };
// person.greet();
// greet.apply(person, ['Noida', 'Delhi']);