// Expected Result: True if object is plain, false otherwise. ({ a: 1 }) => true, ([1, 2, 3]) => false

function plainObject(obj) {
    if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
        return true;
    }
    return false;
}

console.log(plainObject([1, 2, 3]));
console.log(plainObject({ a: 1 }));