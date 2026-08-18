function myLogic(arr) {

    const printedPair = new Set();
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            let a = arr[i];
            let b = arr[j];

            let pair = [Math.min(a, b), Math.max(a, b)].toString();

            if (a + b === 10 && !printedPair.has(pair)) {
                console.log("sum pair :", a, b)
                printedPair.add(pair);
                count++;
            }
            if (Math.abs(a - b) === 10 && !printedPair.has(pair)) {
                console.log("sub pair :", a, b)
                printedPair.add(pair);
                count++;
            }
        }
    }
    return count;
}

console.log("Number of pairs:", myLogic([1, 5, 3, 7, 8, 9, 20, 15, 30, 5, -10]));

function SumPair(arr, target) {
    const printed = new Set();

    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            let a = arr[i];
            let b = arr[j];
            let pair = [Math.min(a, b), Math.max(a, b)].toString();

            if (a + b === target && !printed.has(pair)) {
                console.log(a, b);
                printed.add(pair);
            }
        }
    }
}
// SumPair([2, 7, 11, 15, 3, 6], 9);

function sumPair(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {

            if (arr[i] + arr[j] === target) {
                console.log(arr[i], arr[j]);
            }

        }
    }
}
// sumPair([2, 7, 11, 15, 3, 6], 9);