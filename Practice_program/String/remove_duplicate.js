function longestStr(str) {
    let subStr = "";

    for (let i = 0; i < str.length; i++) {
        if (!subStr.includes(str[i])) {
            subStr += str[i];
        }
    }
    return subStr;
}
// console.log(longestStr("JatinJatin"))

// ===================================================================

// without any methods 
function longestStr(str) {
    let subStr = "";

    for (let i = 0; i < str.length; i++) {
        let found = false;
        for (let j = 0; j < subStr.length; j++) {
            if (str[i] === subStr[j]) {
                found = true;
                break;
            }
        }
        if (!found) {
            subStr += str[i];
        }
    }
    return subStr;
}
console.log(longestStr("JatinJatin"))