function fact(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function isStrong(num) {
    let sum = 0;
    let temp = num;
    while (temp > 0) {
        let last = temp % 10;
        sum += fact(last);
        temp = Math.floor(temp / 10);
    }
    return sum === num;
}
const num = 145;
if (isStrong(num)) {
    console.log(`${num} is a strong number`);
} else {
    console.log(`${num} is not a strong number`);
}