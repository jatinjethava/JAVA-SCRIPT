function isAnagram(a, b) {
    if (a.length !== b.length) return false;

    return a.split("").sort().join("") ===
        b.split("").sort().join("");
}

console.log(isAnagram("listen", "silent"));