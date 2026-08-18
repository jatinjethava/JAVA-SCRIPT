// Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]

function makePair(obj) {
    let returnArray = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            returnArray.push([key, obj[key]]);
        }
    }
    return returnArray;
}
console.log(makePair({ a: 1, b: 2 }));

// ===========================================================

function makePair(obj) {
    return Object.entries(obj);
}
console.log(makePair({ a: 1, b: 2 }));
// result : [['a', 1], ['b', 2]]