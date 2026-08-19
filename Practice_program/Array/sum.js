function sum(arr1, arr2) {
    if (!Array.isArray(arr1) && !Array.isArray(arr2)) {
        return new Error("type must be array");
    }
    let len = (arr1.length > arr2.length) ? arr1.length : arr2.length;
    let sum = [];
    for (let i = 0; i < len; i++) {
        sum.push((arr1[i]) ? arr1[i] : 0 + arr2[i]);
    }

    return sum;
}

console.log(sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]))