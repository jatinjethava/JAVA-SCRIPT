const user = {
    name: "Jatin",
    age: 20,
    city: "Surat",
    active: true
};

const newUser = {
    ...user,
    email: "jatin@gmail.com"
}

// =====================================================
let count = 0;
for (let key in newUser) {
    if (key === "age") {
        user[key] = 21;
    }
    count++;
}

console.log(newUser)
// console.log(user.hasOwnProperty("email"))
// console.log(`user length is : ${count}`)
// console.log(Object.keys(newUser))
// console.log(Object.values(newUser))

// =====================================================
// let result = [];
// for(let key in newUser){
//     result.push([key,newUser[key]])
// }
// console.log(result)

// =====================================================
// let swap = {};
// for (let key in newUser) {
//     swap[newUser[key]] = key
// }
// console.log(swap)

// =====================================================
const scores = {
    Jatin: 80,
    Rahul: 95,
    Amit: 75
};

let max = 0, item;
for (let key in scores) {
    if (max < scores[key]) {
        max = scores[key]
        item = key;
    }
}
// console.log(item, max)

// =====================================================
const numbers = {
    a: 50,
    b: 20,
    c: 80,
    d: 10
};
let min;
for (let key in numbers) {
    min = numbers[key]
    if (min > numbers[key]) {
        min = numbers[key]
    }
}
// console.log(min)

// ====================================================
const prices = {
    shirt: 500,
    jeans: 1200,
    shoes: 2000
};

let sum = 0;
for (let key in prices) {
    sum += prices[key];
}
// console.log(sum)

// ====================================================
const obj = {
    a: 10,
    b: 20,
    c: 10,
    d: 30,
    e: 20
};

let duplicate = Object.values(obj);
let dip = [];
for (let i = 0; i < duplicate.length; i++) {
    for (let j = i + 1; j < duplicate.length; j++) {
        if (duplicate[i] === duplicate[j]) {
            dip.push(duplicate[i])
        }
    }
}
// console.log(obj)

let newObj = {};
let dup = [];
for (let key in obj) {
    if (!dup.includes(obj[key])) {
        dup.push(obj[key])
        newObj[key] = obj[key]
    }
}

// console.log(dup)
// console.log(newObj)

// =====================================================
const obj2 = {
    a: "apple",
    b: "banana",
    c: "apple",
    d: "orange",
    e: "banana"
};
let arr = Object.values(obj2);

const countF = arr.reduce((acc, item) => {
    const key = item;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
}, {})
// console.log(countF)

// =====================================================
const obj3 = {
    name: "Jatin",
    age: 20,
    city: "Surat"
};

const obj4 = {
    name: "Rahul",
    age: 25,
    country: "India"
};

let key1 = Object.keys(obj3);
let key2 = Object.keys(obj4);
let newKey = [];

for (let i = 0; i < key1.length; i++) {
    if (key2.includes(key1[i])) {
        newKey.push(key1[i])
    }
}
// console.log(newKey)

// =====================================================
let numaric = [];
for (let key in user) {
    if (typeof user[key] === "number") {
        numaric.push(key)
    }
}
console.log(numaric)

// ====================================================

const people = [
    { name: "Jatin", age: 20 },
    { name: "Rahul", age: 25 },
    { name: "Amit", age: 22 },
    { name: "Raj", age: 25 },
    { name: "Raju", age: 22 }

];

// const names = people.map((item) => item.name);
// console.log(names)

const oldest = people.reduce((max, item) => {
    return max.age > item.age ? max : item
});
// console.log(oldest)

const older = people.filter((item) => item.age > 21);
// console.log(older)

const avg = people.reduce((sum, item) => sum + item.age, 0)
// console.log(avg / people.length)

const sotedByAge = people.sort((a, b) => a.age - b.age)
// console.log(sotedByAge)

const nameFind = people.find((item) => item.name === "Jatin")
// console.log(nameFind)

const countByAge = people.reduce((acc, item) => {
    const key = item.age;
    acc[key] = (acc[key] || 0) + 1;
    return acc;
}, {});
// console.log(countByAge)

const userByAge = people.reduce((acc, item) => {
    const key = item.age;

    if (!acc[key]) {
        acc[key] = [];
    }

    acc[key].push(item);
    return acc;
}, {});
// console.log(userByAge)

const users = [
    { id: 1, name: "Jatin" },
    { id: 2, name: "Rahul" },
    { id: 1, name: "Jatin" }
];
const uniqueUsers = [...new Map(users.map(user => [user.id, user])).values()];
// console.log(uniqueUsers);

const user1 = {
    name: "Jatin",
    address: {
        city: "Surat",
        location: {
            area: "Hirabag",
            pincode: 395006
        }
    }
};

// user1.address.city = "Ahmedabad";
// console.log(user1.address);

const input = {
    name: "Jatin",
    address: {
        city: "Surat",
        state: "Gujarat"
    }
};

const output = {
    name: input.name,
    city: input.address.city,
    state: input.address.state
};

// console.log(output);

const clone = { ...user1 }
console.log(clone)

// ====================== REAL WORL EXAMPLE =======================

const products = [
    { id: 1, name: "T-Shirt", price: 599 },
    { id: 2, name: "Jeans", price: 1299 },
    { id: 3, name: "Shoes", price: 2499 }
];

const cart = [
    { name: "T-Shirt", price: 599, qty: 2 },
    { name: "Jeans", price: 1299, qty: 1 },
    { name: "Shoes", price: 2499, qty: 1 }
];

// Find highest-priced product
const highest = products.reduce((max, item) => {
    return max.price > item.price ? max : item
});
// console.log(highest)

// Calculate total cart price
const totalPrice = cart.reduce((max, item) => max + (item.price * item.qty), 0);
// console.log(totalPrice) // 4996

const productBy = [
    { name: "T-Shirt", category: "Clothing" },
    { name: "Shoes", category: "Footwear" },
    { name: "Jeans", category: "Clothing" }
];

// Find products by category
const category = productBy.reduce((acc, item) => {
    const key = item.category;

    if (!acc[key]) {
        acc[key] = [];
    }

    acc[key].push(item)
    return acc;
}, {})
// console.log(category)

const onlyCategory = productBy.filter((item) => item.category === "Clothing")
// console.log(onlyCategory)

// Find products below a price
const belowPrice = products.filter((item) => item.price > 1000);
// console.log(belowPrice)

let discount = 20;
let discountProduct = products.map((item) => {
    discount = Math.floor(item.price / 20);

    return {
        ...item,
        discount: discount,
        discountPrice: item.price - discount
    };
})
// console.log(discountProduct) // MOST IMP

// update product price
function updatePrice(products, id, price) {
    return products.map((item) =>
        item.id === id
            ? { ...item, price: price }
            : item
    );
}
// console.log(updatePrice(products, 1, 999))

function removeProduct(products, id) {
    return products.filter((item) =>
        item.id !== id
    );
}
console.log(removeProduct(products, 1));