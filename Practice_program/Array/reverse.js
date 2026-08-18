// Expected Result: [1, 2, 3] => [3, 2, 1]

function reverse(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.unshift(arr[i]);
    }
    return newArr;
}

console.log(reverse([1, 2, 3]));