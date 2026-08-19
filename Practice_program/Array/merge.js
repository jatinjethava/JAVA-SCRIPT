function merge(arr1, arr2) {
    const array = arr1.concat(arr2);
    let newArr = [];

    for (let i = 0; i < array.length; i++) {
        if (!newArr.includes(array[i])) {
            newArr.push(array[i]);
        }
    }

    return newArr;
}

console.log(merge([1, 2, 3], [2, 30, 1]))