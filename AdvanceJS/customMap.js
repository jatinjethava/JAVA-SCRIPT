Array.prototype.myMap = function (callback) {
    // callback = num => num * 2

    let result = [];

    for (let i = 0; i < this.length; i++) {
        // console.log(this[i], i, this) // 1 0 [1,2,3]
        result.push(callback(this[i]));
        callback(1)
    }

    return result;
};

const nums = [1, 2, 3];

const output = nums.myMap(num => num * 2);

console.log(output);