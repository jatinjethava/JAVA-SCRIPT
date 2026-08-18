// Expected Result: ([1, 2], [2, 3]) => [2]

function intersection(arr1, arr2) {
    let returnArray = [];

    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            returnArray.push(arr1[i]);
        }
    }
    return returnArray;
}

console.log(intersection([1, 2, 2, 1], [2, 2, 2]));

