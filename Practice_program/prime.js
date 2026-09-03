function showPrimeNumbers(n) {
    for (let i = 2; i <= n; i++) {
        if (isPrimeNumber(i)) {
            console.log('Prime Number:', i);
        }
    }
}

function isPrimeNumber(num) {
    for (let j = 2; j < num; j++) {
        if (num % j === 0) {
            return false;
        }
    }
    return true;
}

showPrimeNumbers(20);