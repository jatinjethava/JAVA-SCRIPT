// Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
const arr = [['a', 1], ['b', 2]];
const result = Object.fromEntries(arr);
console.log(result);

// =============================================

function formPair(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        result[arr[i][0]] = arr[i][1];
    }
    return result;
}
console.log(formPair(arr));

// =============================================

const pairArray = arr.reduce((acc, [key, val]) => {
    acc[key] = val;
    return acc;
}, {});
console.log(pairArray);