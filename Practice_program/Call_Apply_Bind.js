// ✅ 1. call(Immediate execution)
function greet(city) {
    // { name: "Jatin" }
    console.log(this.name, city);
}

const user = { name: "Jatin" };
greet.call(user, "Ahmedabad"); // Jatin Ahmedabad

// ✅ 2. apply(Arguments as array)
greet.apply(user, ["Ahmedabad"]);

// ✅ 3. bind(Returns new function)
const boundFn = greet.bind(user, "Ahmedabad");
boundFn(); // Jatin Ahmedabad