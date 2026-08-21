function findNext(arr) {
    let maxProfit = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i - 1]) {
            maxProfit += arr[i] - arr[i - 1];
        }
    }

    return maxProfit;
}

console.log(findNext([100, 180, 260, 310, 40, 535, 695]));