function OTP(n) {
    let otp = "";

    for (let i = 0; i <= n; i++) {
        otp += Math.floor(Math.random() * 10);
    }
    return otp;
}

console.log(OTP(4));