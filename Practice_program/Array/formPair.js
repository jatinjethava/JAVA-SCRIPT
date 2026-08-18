// Expected Result: [['a', 1], ['b', 2]] => { a: 1, b: 2 }
const arr = [['a', 1], ['b', 2]];
// const result = Object.fromEntries(arr);
// console.log(result);

// =============================================

// function formPair(arr) {
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         result[arr[i][0]] = arr[i][1];
//     }
//     return result;
// }
// console.log(formPair(arr));

// =============================================

const pairArray = arr.reduce((acc, item) => {
    acc[item[0]] = item[1];
    return acc;
}, {});
console.log(pairArray);