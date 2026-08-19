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
// console.log(longestStr("JatinJatin"))

// =============================================================

function remove_first_occurrence(str) {
    let newStr = str.toLowerCase().split(" ");
    let rtnStr = [];

    for (let i = 0; i < newStr.length; i++) {
        if (!rtnStr.includes(newStr[i])) {
            rtnStr.push(newStr[i]);
        }
    }

    return rtnStr.join(" ");
}

console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));