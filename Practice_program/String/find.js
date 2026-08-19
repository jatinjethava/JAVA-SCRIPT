function search_word(str, search) {
    if (typeof str !== "string") {
        return new Error("type must be string");
    }

    str = str.split(" ");
    console.log(str)
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === search) {
            count++;
        }
    }

    return `"${search}" was find ${count} times`;
}

// console.log(search_word('The quick brown fox', 'fox'));

// =========================================================

function remove_non_word(str) {
    if (typeof str !== "string") {
        return new Error("type must be string");
    }

    let pattern = /[a-zA-Z ]/g;
    let newStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(pattern)) {
            newStr += str[i];
        }
    }

    return newStr;
}

// console.log(remove_non_word('PHP ~!@#$%^&*()+`-={}[]|\\:";\'/?><.,MySQL'));

// =========================================================================

function case_insensitive_search(str, match) {
    if (typeof str !== "string") {
        return new Error("type must be string");
    }

    str = str.toLocaleLowerCase().split(" ");
    let matched = false;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === match.toLocaleLowerCase()) {
            matched = true;
            break;
        }
    }

    return (matched) ? "matched" : "not matched";
}

console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));