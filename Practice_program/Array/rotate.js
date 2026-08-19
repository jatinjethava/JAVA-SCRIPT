function leftRotate(arr) {
    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;
    return arr;
}

// console.log(leftRotate([1, 2, 3, 4, 5]));

// ==============================================

function rightRotate(arr) {
    let last = arr[arr.length - 1];
    for (let i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = last;
    return arr;
}

// console.log(rightRotate([1, 2, 3, 4, 5]));

// ==============================================

function leftRotateBy(arr, k) {
    for (let j = 0; j < k; j++) {
        leftRotate(arr);
    }
    return arr;
}

// console.log(leftRotateBy([1, 2, 3, 4, 5], 3));

// ==============================================

function rightRotateBy(arr, k) {
    for (let j = k; j > 0; j--) {
        rightRotate(arr);
    }
    return arr;
}

// console.log(rightRotateBy([1, 2, 3, 4, 5], 2));

// ==============================================

function move(array, from, to) {
    [array[from], array[to]] = [array[to], array[from]]
    return array;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));