function extractChar(str, index) {
    if (typeof str !== "string" || typeof index !== "number") return [];
    if (index < 0 || index >= str.length) return [];

    return str.slice(0, index);
}

console.log(extractChar("jatin jethava", 5))