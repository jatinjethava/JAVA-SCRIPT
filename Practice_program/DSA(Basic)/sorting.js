function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
// console.log(bubbleSort([5, 1, 4, 2]));

// ===========================================================================

function selectionSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let minIndex = i;

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    return arr;
}
// console.log(selectionSort([64, 25, 12, 22, 11]));

// ======================================================

function sort(arr) {
    let i = 0;
    while (i < arr.length) {
        let curr = arr[i] - 1;
        // console.log(curr)
        if (arr[i] != arr[curr]) {
            [arr[i], arr[curr]] = [arr[curr], arr[i]];
        } else i++;
    }
    return arr;
}
console.log(sort([1, 5, 8, 9, 6, 4, 7, 3, 2]))