function count(str, sub) {
    if (typeof str !== 'string') {
        return new Error("type is not string");
    }

    let arrStr = str.toLocaleLowerCase().split(" ");
    let count = 0;

    for (let i = 0; i < arrStr.length; i++) {
        if (arrStr[i] === sub.toLocaleLowerCase()) {
            count++;
        }
    }

    return count;
}

console.log(count("The quick brown fox jumps over the lazy dog", 'the'));
console.log(count("The quick brown fox jumps over the lazy dog", 'fox'));
// console.log(count(122))

// =============================================================

function subStrAfterChars(str, char, pos) {
    if (pos == 'b')
        return str.substring(str.indexOf(char) + 1);
    else if (pos == 'a')
        return str.substring(0, str.indexOf(char));
    else
        return str;
}

console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a'));
console.log(subStrAfterChars('w3resource: JavaScript Exercises hi', 'E', 'b'));