Array.prototype.myFilter = function (callback) {
    // collback = num => num > 2
    let result = [];

    for (let i = 0; i < this.length; i++) {
        // console.log(callback(this[i], i, this)) // 1 0 [1,2,3,4]
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }

    return result;
};

const nums = [1, 2, 3, 4];

const output = nums.myFilter(num => num > 2);

console.log(output);