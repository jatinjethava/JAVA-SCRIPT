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

// ======================================================================

function findNext(arr) {
    arr.sort((a, b) => a - b);
    let pos = arr.filter((i) => i === Math.abs(i))

    let miss = 0;
    for (let i = pos[0]; i < pos[pos.length - 1]; i++) {
        if (!pos.includes(i)) {
            miss = i;
            break;
        }
    }

    return (miss === 0) ? 1 : miss;
}

console.log(findNext([2, -3, 4, 1, 1, 7]));