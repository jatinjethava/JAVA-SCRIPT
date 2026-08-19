function leap(start, end) {
    for (let i = start; i < end; i++) {
        if (i % 4 === 0 && i % 100 !== 0) {
            console.log(i);
        }
    }
}

console.log(leap(2000, 2026))