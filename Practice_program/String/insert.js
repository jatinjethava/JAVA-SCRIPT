function inserStr(str, word, pos) {
    if (typeof (pos) == "undefined") {
        pos = 0;
    }

    if (typeof (word) == "undefined") {
        word = '';
    }

    return str.slice(0, pos) + word + str.slice(pos);
}

console.log(inserStr('We are doing some exercises.'));
console.log(inserStr('We are doing some exercises.', 'JavaScript '));
console.log(inserStr('We are doing some exercises.', 'JavaScript ', 18));