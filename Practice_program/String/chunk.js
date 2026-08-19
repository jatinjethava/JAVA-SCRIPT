function string_chop(str, chunk) {
    let arr = [];

    if (typeof chunk === 'undefined') {
        arr.push(str);
    } else {
        for (let i = 0; i < str.length; i += chunk) {
            arr.push(str.slice(i, i + chunk));
        }
    }

    return arr;
}

console.log(string_chop('w3resource'));
console.log(string_chop('w3resource', 2));
console.log(string_chop('w3resource', 3));