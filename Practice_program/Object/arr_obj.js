const users = [
    { id: 1, name: "Jatin" },
    { id: 1, name: "Jatin" },
    { id: 2, name: "Rahul" }
];

const userMap = users.reduce((acc, user) => {
    if (!acc[user.id]) {
        acc[user.id] = user;
    }
    return acc;
}, {});
console.log(userMap)

function removeDuplicate(arr) {
    return arr.filter((value, index) => arr.indexOf(value) === index);
}
console.log(removeDuplicate([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]));

const products = [
    { id: 1, name: "Shirt", price: 500 },
    { id: 2, name: "Shoes", price: 1500 },
    { id: 3, name: "Watch", price: 2500 }
];

const maxPrice = products.reduce((max, product) => Math.max(max, product.price), 0);
console.log("Maximum Price:", maxPrice);

const minPrice = products.reduce((min, product) => Math.min(min, product.price), Infinity);
console.log("Minimum Price:", minPrice);

const expensive = products.filter(product => product.price > 1000);
console.log(expensive);

const product = products.find(product => product.id === 2);
console.log(product);

const names = products.map(product => product.name);
console.log(names);

products.push({ id: 4, name: "Bag", price: 800 });

const updated = products.filter(product => product.id !== 2);
console.log(updated);

const updatedProducts = products.map(p =>
    p.id === 1 ? { ...p, price: 700 } : p
);

// ascending
products.sort((a, b) => a.price - b.price);

// descending
products.sort((a, b) => b.price - a.price);

const orders = [
    { user: "A", total: 100 },
    { user: "B", total: 200 },
    { user: "A", total: 300 }
];

const grouped = orders.reduce((acc, order) => {
    acc[order.user] = (acc[order.user] || 0) + order.total;
    return acc;
}, {});
console.log(grouped);

// 15. Convert array → object
const obj = Object.fromEntries(
    products.map(p => [p.id, p])
);
console.log(obj);

const hasExpensive = products.some(p => p.price > 2000);
console.log(hasExpensive);
// Check if any product has price > 2000
// Returns true or false

const allAffordable = products.every(p => p.price < 2000);
console.log(allAffordable);
// Check if all products have price < 2000
// Returns true or false

const total = products.reduce((sum, p) => sum + p.price, 0);
console.log(total);
