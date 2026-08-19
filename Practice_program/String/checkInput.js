function checkString(str) {
    for (let i = 0; i < str.length; i++) {
        if (typeof str[i] !== "string") {
            return false;
        }
    }
    return true;
}

// console.log(checkString(["jatin", "ashok", "nayana", "aarti", "mayur"]))
// console.log(checkString([20, 40, 60, 80, 100]))

// ========================================================

function blankString(str) {
    if (typeof str !== "string" || str === "") return true;
    return false;
}

console.log(blankString(""))