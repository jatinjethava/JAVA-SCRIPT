function repeat(str, n) {

    let repeatStr = "";
    for (let i = 0; i < n; i++) {
        repeatStr += str
    }
    return repeatStr;
}
console.log(repeat("hi", 3))