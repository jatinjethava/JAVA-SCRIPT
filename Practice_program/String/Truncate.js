function text_truncate(str, pos, sep) {
    if (!pos && !sep) {
        return str;
    }
    return (sep) ? str.slice(0, pos - sep.length) + "" + sep : str.slice(0, pos - 6) + '...';
}

// console.log(text_truncate('We are doing JS string exercises.'))
// console.log(text_truncate('We are doing JS string exercises.', 19))
// console.log(text_truncate('We are doing JS string exercises.', 15, '!!'))

// ==============================================================================

function truncate(str, pos) {
    let truncStr = str.split(' ');
    let newStr = "";

    for (let i = 0; i < pos; i++) {
        newStr += " " + truncStr[i];
    }

    return `"${newStr} "`;
}

console.log(truncate('The quick brown fox jumps over the lazy dog', 4));