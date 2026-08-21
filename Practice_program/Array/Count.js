function countOccurrences(arr) {
    return arr.reduce((acc, item) => {
        acc[item] = (acc[item] || 0) + 1;
        return acc;
    }, {});
}

// console.log(countOccurrences([1, 2, 2, 3, 1, 2]));
// {1: 2, 2: 3, 3: 1}

function countOccurrences(arr) {
    const result = {};

    for (let i = 0; i < arr.length; i++) {
        result[arr[i]] = (result[arr[i]] || 0) + 1;
    }

    return result;
}
console.log(countOccurrences([1, 2, 2, 3, 1, 2]));