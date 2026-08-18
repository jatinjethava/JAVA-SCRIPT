function countSearchOccurances(arr, val) {

    return arr.reduce((acc, curElement) => {
        let count = (curElement === val) ? 1 : 0;
        return acc + count;
    }, 0)
}

const arr1 = [1, 2, 5, 7, 2];
const count1 = (countSearchOccurances(arr1, 2));
console.log('count1: ', count1);

console.log('---------');

const arr2 = [21, 25, 22, 25, 30, 25, 30];
const count2 = (countSearchOccurances(arr2, 25));
console.log('count2: ', count2);