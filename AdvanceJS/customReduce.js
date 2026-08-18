Array.prototype.myReduce = function (callback, initialValue) {
    // callback = (acc, curr) => acc + curr
    // initialValue = 0
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {

        accumulator = callback(
            accumulator,
            this[i]
        );
    }

    return accumulator;
};

const nums = [1, 2, 3];

const sum = nums.myReduce((acc, curr) => acc + curr, 0);

console.log(sum);