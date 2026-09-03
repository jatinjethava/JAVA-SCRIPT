function capital(str) {
    let str2 = str.split(" ");
    let newStr = "";

    for (let i = 0; i < str2.length; i++) {
        newStr += str2[i].charAt(0).toUpperCase() + str2[i].slice(1);
    }

    return newStr;
}

console.log(capital("jatin jethava"))

// =============================================

function capitalFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalFirstLetter("jatin jethava"))