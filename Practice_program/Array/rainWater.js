function rainCount(arr) {
    let left = new Array(arr.length);
    let right = new Array(arr.length);
    let maxLeft = arr[0], maxRight = arr[arr.length - 1];
    left[0] = maxLeft, right[arr.length - 1] = maxRight;

    for (let i = 1; i < arr.length; i++) {
        maxLeft = Math.max(arr[i], maxLeft);
        left[i] = maxLeft;
    }
    for (let i = arr.length - 2; i >= 0; i--) {
        maxRight = Math.max(arr[i], maxRight);
        right[i] = maxRight;
    }
    // left = [4,4,4,4,4,5]
    // right = [5,5,5,5,5,5]
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        count += Math.min(left[i], right[i]) - arr[i]; // 0 + 2 + 4 + 1 + 2 + 0 = 9
    }
    return count;
}

console.log(rainCount([4, 2, 0, 3, 2, 5]));
// https://media.geeksforgeeks.org/img-practice/prod/addEditProblem/701211/Web/Other/blobid0_1741784862.png
