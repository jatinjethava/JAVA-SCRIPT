function capital(str) {
    let str2 = str.split(" ");
    return str2.map(item => item[0].toUpperCase() + item.slice(1)).join(" ");
}

console.log(capital("jatin jethava"))

// =============================================

function capitalFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalFirstLetter("jatin jethava"))