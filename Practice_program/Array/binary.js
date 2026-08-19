const item = [1, 2, 3, 4, 5, 7, 8, 9]

function binary_Search(array, index) {
    if (!Array.isArray(array)) {
        return new Error("type must be array");
    }
    return array.indexOf(index);
}

console.log(binary_Search(item, 1)); //0
console.log(binary_Search(item, 5)); //4