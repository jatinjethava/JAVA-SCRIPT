function Armstrong(n) {
    let num = n;
    let sum = 0;

    while (n > 0) {
        let r = n % 10;
        sum = sum + r * r * r;
        n = Math.floor(n / 10);
    }

    return num === sum;
}

const result = Armstrong(153);
console.log(result ? "Number is Armstrong" : "Number is Not Armstrong");


// function palindromeCheck(n){
//   let reversed=0;
//   let original=n;
//   while(n>0){
//     let lastDigit=n%10;
//     reversed=(reversed*10)+lastDigit;
//     n=Math.floor(n/10);
//   }
//   if(reversed==original){
//     return true;
//   }else{
//     return false;
//   }
// }

// console.log(palindromeCheck(121))