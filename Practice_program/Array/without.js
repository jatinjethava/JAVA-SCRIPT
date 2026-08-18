// Expected Result: [1, 2, 3, 1, 2] without 1, 2 => [3]

function without(arr) {
    let returnArray = [];
    let sameVal = arr.filter((item, index) => arr.indexOf(item) !== index);

    for (let i = 0; i < arr.length; i++) {
        if (!sameVal.includes(arr[i])) {
            returnArray.push(arr[i]);
        }
    }
    return returnArray;
}
console.log(without([1, 2, 3, 1, 2]));