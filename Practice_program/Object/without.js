//  Expected Result: ({ a: 1, b: 2 }, 'b') => { a: 1 }

function without(obj, val) {
    let returnObj = {};
    for (let key in obj) {
        if (key !== val) {
            returnObj[key] = obj[key];
        }
    }
    return returnObj;
}
console.log(without({ a: 1, b: 2 }, 'b'));
// result : { a: 1 }

// ========================================================

function without(obj, val) {
    return Object.fromEntries(Object.entries(obj).filter(([key]) => key !== val));
}

console.log(without({ a: 1, b: 2 }, 'b'));
// result : { a: 1 }

// ========================================================

function without(obj, val) {
    let returnObj = {};
    for (let [key, value] of Object.entries(obj)) {
        if (key !== val) {
            returnObj[key] = value;
        }
    }
    return returnObj;
}

console.log(without({ a: 1, b: 2 }, 'b'));
// result : { a: 1 }