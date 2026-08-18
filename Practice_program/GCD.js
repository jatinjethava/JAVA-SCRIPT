function gcd(a, b) {
    let min = Math.min(a, b);

    for (let i = min; i >= 1; i--) {
        if (a % i === 0 && b % i === 0) {
            return i;
        }
    }
}

console.log(gcd(45, 840));