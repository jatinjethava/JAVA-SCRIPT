function longestSTr(array) {
    if (!Array.isArray(array)) {
        return new Error("type must be array");
    }

    let a = array[0]; b = array[array.length - 1];
    let i = 0;

    while (a.charAt(i) === b.charAt(i)) {
        i++
    }

    return a.slice(0, i);
}

// console.log(longestSTr(["jatin", "jatin jethava"]));

// ====================================================

function nthlargest(array, n) {
    const sorted = array.sort((a, b) => a - b);
    return sorted[n];
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4));