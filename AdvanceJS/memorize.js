function memoize(fn) {

    let cache = {};
    // console.log(cache)
    return function (num) {
        // console.log(num)
        if (cache[num]) {
            // console.log(cache[num])
            return cache[num];
        }

        const result = fn(num);

        cache[num] = result;

        return result;
    };
}

function square(n) {
    console.log("Calculating...");
    return n * n;
}

const optimizedSquare = memoize(square);

console.log(optimizedSquare(5));
// console.log(optimizedSquare(5));