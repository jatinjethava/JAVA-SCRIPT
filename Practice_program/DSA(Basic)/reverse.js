function reverse(num) {
    let rev = 0;
    while (num > 0) {
        let last = num % 10;
        rev = (rev * 10) + last;
        num = Math.floor(num / 10);
    }
    return rev;
}
const num = 123456;
console.log(reverse(num));