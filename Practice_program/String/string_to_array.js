function stringToArray(str) {
    if (str === null || str === undefined) return [];
    if (typeof str !== "string") return [];

    return str.split(" ");
}

console.log(stringToArray("jatin jethava"));