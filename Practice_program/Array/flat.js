// array flattening — converting a nested array into a single-level array.

const arr = [1, [2, [3, [4]], 5]];

console.log(arr.flat());       // [1, 2, [3, [4]], 5] (depth = 1)
console.log(arr.flat(2));      // [1, 2, 3, [4], 5]
console.log(arr.flat(Infinity)); // [1, 2, 3, 4, 5]

function flatten(arr) {
    return arr.reduce((acc, item) => {
        return acc.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

console.log(flatten([1, [2, [3, [4]], 5]]));