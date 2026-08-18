// Expected Result: [0, 1, false, 2, undefined, '', 3, null] => [1, 2, 3]

function compact(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(compact([0, 1, false, 2, undefined, '', 3, null]));
