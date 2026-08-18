function createArray(start, end) {
    let returnArray = [];
    for (let i = start; i <= end; i++) {
        returnArray.push(i);
    }
    return returnArray;
}

const range1 = createArray(1, 5);
console.log(range1);

const range2 = createArray(-5, 0);
console.log(range2);