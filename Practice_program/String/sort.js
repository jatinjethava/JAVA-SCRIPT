function alphabetize_string(str) {
    if (typeof str !== "string") {
        return new Error("type must be String.");
    }

    return sortedStr = str.split(' ').sort().join('');
}

console.log(alphabetize_string('United States'));