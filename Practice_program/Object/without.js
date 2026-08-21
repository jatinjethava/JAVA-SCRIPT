const obj = {
    a: 1,
    b: 2,
    a: 3
};

for (let key in obj) {
    key = obj[key]
}
// console.log(obj);

//  Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }

function without(obj, val) {
    for (let key in obj) {
        if (key !== val) {
            obj[key] = obj[key];
        }
    }
    return obj;
}
console.log(without({ a: 1, b: 2, c: 5 }, 'b'));

// ========================================================

function without(obj, val) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => key !== val));
}

// console.log(without({ a: 1, b: 2 }, 'b'));
// result : { a: 1 }