function isPalindromeNumber(num) {
    let original = num;
    let reversed = 0;

    while (num > 0) {
        let digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reversed;

}

const result = isPalindromeNumber(454);
console.log(result ? "Number Is Palindrome" : "Number Is Not Palindrome");