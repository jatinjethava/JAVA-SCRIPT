function capitalizeWords(str) {
    return str
        .split(" ") // ["hi", "i", "am", "jatin", "jethava!"]
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1) // Returns remaining string except first character.
        )
        .join(" ");
}

// console.log(capitalizeWords("hi i am jatin jethava!"));
// "Hi I Am Jatin Jethava!"

// =====================================================

function isUpperCaseAt(str, index) {
    if (typeof str !== "string") {
        return new Error("type must be string");
    }

    let itIs = true;
    for (let i = 0; i < str.length; i++) {
        if (str[index] !== str[index].toUpperCase()) {
            itIs = false;
            break;
        }
    }

    return itIs;
}

// console.log(isUpperCaseAt("JatinJethava", 0));