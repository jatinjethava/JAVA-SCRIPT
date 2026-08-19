function swapCase(str) {
    let swapStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) swapStr += str[i].toLowerCase();
        else swapStr += str[i].toUpperCase();
    }
    return swapStr;
}

// console.log(swapCase("JaTin JetHava"))

// ==========================================================

function camelize(str) {
    let camel = str.split(" ");

    let camelCase = "";
    for (let i = 0; i < camel.length; i++) {
        camelCase += camel[i][0].toUpperCase() + camel[i].slice(1);
    }
    return camelCase;
}
// console.log(camelize("jatin jethava"))

// ===========================================================

function unCamelize(str, separator) {
    if (typeof (separator) == "undefined") {
        separator = " ";
    }

    var str = str.replace(/[A-Z]/g, function (letter) {
        return separator + letter.toLowerCase();
    });

    return str.replace("/^" + separator + "/", '');
}
console.log(unCamelize("JatinJethava", "-"))