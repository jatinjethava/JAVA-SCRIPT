// 1. for loop
function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return result;
}
console.log(reverseString("JATIN"));

// 2. reduce
function reverseString(str) {
    return str.split("").reduce((rev, char) => char + rev, "");
}
console.log(reverseString("jatin"))

// 3. recursion
function reverseStr(str) {
    if (str === "") return "";
    return reverseStr(str.slice(1)) + str[0];
}
// reverseStr("jatin") = reverseStr("atin") + "j"
// reverseStr("atin") = reverseStr("tin") + "a"
// reverseStr("tin") = reverseStr("in") + "t"
// reverseStr("in") = reverseStr("n") + "i"
// reverseStr("n") = reverseStr("") + "n"
// reverseStr("") = reverseStr("") + ""
// "" → "n" → "ni" → "nit" → "nita" → "nitaj"

// console.log(reverseStr("jatin")); // "nitaj"

// 4. while loop
// function reverseString(str) {
//     let i = str.length - 1;
//     let result = "";
//     while (i >= 0) {
//         result += str[i];
//         i--;
//     }
//     return result;
// }