//  Expected Result: True if objects are identical, false if objects are different ({ a: 1, b: 1 }, { a: 1, b: 1 }) => true

function isEqual(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}

// console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 1 }));
// console.log(isEqual({ a: 1, b: 1 }, { a: 1, b: 2 }));

// ============================================================================

// Expected Result: True if objects are equal, false if objects are different ({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }) => true

function isEqualDeep(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }

    for (let key in obj1) {
        if (obj1[key] !== obj2[key]) {
            if (typeof obj1[key] !== 'object' || typeof obj2[key] !== 'object') {
                return false;
            }
            return isEqualDeep(obj1[key], obj2[key]);
        }
    }
    return true;
}

console.log(isEqualDeep({ a: 1, b: { c: 1 } }, { a: 1, b: { c: 1 } }));
