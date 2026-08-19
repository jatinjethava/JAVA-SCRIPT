// 3 / 5

function Frequent(arr) {
    let most = 1;
    let max = 0;
    let item;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j])
                max++;

            if (most < max) {
                most = max;
                item = arr[i];
            }
        }
        max = 0;
    }
    return `${item} is ${most} time Frequent`;
}

console.log(Frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]));