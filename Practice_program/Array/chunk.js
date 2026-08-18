//  Expected Result: ([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]

function chunk(arr, size) {
    let returnArray = [];

    for (let i = 0; i < arr.length; i += size) {
        returnArray.push(arr.slice(i, i + size));
    }

    return returnArray;
}

console.log(chunk([1, 2, 3, 4, 5], 2));