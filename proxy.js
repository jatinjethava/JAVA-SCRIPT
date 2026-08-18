// 👉 A Proxy lets you intercept and control operations performed on an object
// (like reading, writing, deleting properties, calling functions, etc.)
// 📌 Think of Proxy as a security guard between your object and the user.
// A Proxy allows you to customize and control object behavior by intercepting operations.

const user = {
    name: "jatin jethava",
    age: 25,
    Aadhar_no: 111213141516,
    account: 12546325315325,
    email: "jatinjethava@gmail.com",
    payment: ["ATM", "wallet", "credit-card"]
};

const userProxy = new Proxy(user, {
    // target is user object and prop is property name
    get(target, prop) {
        console.log(`Getting property "${prop}"`);
        if (prop === "Aadhar_no" || prop === "account") {
            return "*****hidden*****";
        }
        return target[prop];
    },

    set(target, prop, value) {
        console.log(`Setting property "${prop}" to "${value}"`);

        if (prop === "age" && typeof value !== "number") {
            throw new Error("Age must be a number");
        }
        if (prop === "email" && !value.includes("@")) {
            throw new Error("Invalid email");
        }

        return target[prop] = value;
    },

    deleteProperty(target, prop) {
        console.log(`Deleting property "${prop}"`); //optionlly
        if (prop === "Aadhar_no") {
            console.log("Cannot delete sensitive property!");
            return false;
        }
        delete target[prop];
        return true;
    }
});

console.log(userProxy.account);
// console.log(userProxy.Aadhar_no);

// userProxy.age = 20;

// delete userProxy.payment;
// delete userProxy.Aadhar_no;
// console.log(user);