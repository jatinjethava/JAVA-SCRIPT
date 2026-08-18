// Expected Result: ({ a: 1, b: 2 }, { c: 1, b: 2 }) => { b: 2 }

function intersection(obj1, obj2) {
    let returnObj = {};

    for (let key in obj1) {
        if (obj1[key] === obj2[key]) {
            returnObj[key] = obj1[key];
            // console.log(key, obj1[key]);
        }
    }

    return returnObj;
}

// console.log(intersection({ a: 1, b: 2 }, { c: 1, b: 2 }));

// =====================================================================
//  Expected Result: ({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }) => { b: { c: 3 } }

function intersectionDeep(obj1, obj2) {
    let returnObj = {};
    for (let key in obj1) {
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            returnObj[key] = intersectionDeep(obj1[key], obj2[key]);
        } else if (obj1[key] === obj2[key]) {
            returnObj[key] = obj1[key];
        }
    }
    return returnObj;
}

console.log(intersectionDeep({ a: 1, b: { c: 3 } }, { c: 1, b: { c: 3 } }));