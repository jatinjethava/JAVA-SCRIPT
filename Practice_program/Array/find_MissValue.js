function findMissing(arr, n) {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    return expectedSum - actualSum;
}

// const arr = [1, 2, 3, 4, 6];
// const up_To = 6;

// console.log(findMissing(arr, up_To));

// =======================================================================
function findMissing(arr, n) {
    const mySet = new Set(arr);

    for (let i = 1; i <= n; i++) {
        if (!mySet.has(i)) {
            return i;
        }
    }

    return -1;
}

console.log(findMissing(arr, up_To));