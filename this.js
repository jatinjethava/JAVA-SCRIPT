// 👉 this refers to the object that is currently calling the function.
// Its value changes depending on how and where the function is called.
// this is decided at runtime, not when the function is written.

const obj1 = {
    id: 1,
    title: 'Dynamic Death',
    price: 113.95,
    getDescription() {
        return this.title + " new book";
    }
};
console.log(obj1.getDescription());

// function User(name) {
//     this.name = name;
// }

// const u1 = new User("Jatin");
// console.log(u1.name); // Jatin

class User {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }
}

const u = new User("Jatin");
u.greet();

const obj = {
    name: "Jatin",
    show() {
        // find here
        setTimeout(function () {
            console.log(this.name); // undefined
        }, 1000);
    }
};
// fix this using,
// 👉 Does NOT have its own this
// 👉 It inherits this from parent scope
setTimeout(() => {
    console.log(this.name);
}, 1000);