function compress(str) {
    str = str.toLowerCase();
    let res = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            res += str[i] + count;
            count = 1;
        }
    }

    return res;
}

console.log(compress("aaabbbccc")); // a3b3c3


// console.log(typeof (4));
// console.log(typeof (4.5));
// console.log(typeof ("4"));
// console.log(1 + 2 + 3 + "4" + 5 + 6 + 7)

// function countDigits(n){
//   let count = 0;
//   while(n > 0){
//     n = Math.floor(n / 10);
//     count++;
//   }
//   return count;
// }
// console.log(countDigits(4985));