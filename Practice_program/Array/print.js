function print(array) {
    if (!Array.isArray(array)) {
        return new Error("type must be array");
    }

    for (let i = 0; i < array.length; i++) {
        console.log(`===== row ${i} =====`)
        for (let j = 0; j < array[i].length; j++) {
            console.log(array[i][j])
        }
    }
}

console.log(print([[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]]));

// ===============================================================================================

function num_string_range(start, end, step) {
    let result = [];

    for (
        let i = start.charCodeAt(0);
        i <= end.charCodeAt(0);
        i += step
    ) {
        result.push(String.fromCharCode(i));
    }

    return result;
}

console.log(num_string_range("a", "z", 2));