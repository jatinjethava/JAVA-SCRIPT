function includes(arr, element) {
    for (let i of arr) {
        if (i === element) {
            return true;
        }
    }
    return false;
}

const versionArray = [1, 2, 5, 7, 2];
console.log(includes(versionArray, 2));

const ageArray = [21, 22, 25, 27, 25];
console.log(includes(ageArray, 30));