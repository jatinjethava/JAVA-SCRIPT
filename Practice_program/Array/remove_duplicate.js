// 1. Using Set (Best & Cleanest)
const arr = [1, 2, 2, 3, 4, 4];

const unique = [...new Set(arr)];

// console.log(unique);
// ====================================================
// // 2. Using filter()
// const arr1 = [1, 2, 2, 3, 4, 4];

// const unique = arr1.filter((item, index) =>
//     arr1.indexOf(item) === index
// );

// console.log(unique);
// ====================================================
function removeDuplicates(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }

    return result;
}
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

// ===============================================================

function longestStr(arr) {
    let subArr = [];

    for (let i = 0; i < arr.length; i++) {
        let found = false;
        for (let j = 0; j < subArr.length; j++) {
            if (arr[i] === subArr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            subArr.push(arr[i]);
        }
    }
    return subArr;
}
// console.log(longestStr([1, 2, 4, 1, 6, 3, 8, 5, 1, 4, 7, 6]))