let arr = [2, 3, 5, 7, 11, 13, 17, 19];

function findNum(num) {
    let start = 0, end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === num) {
            return mid;
        }
        else if (arr[mid] < num) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return start;
}
console.log(findNum(20));