function randomArray(array) {
    const randomIdx = Math.floor(Math.random() * array.length);
    return array[randomIdx];
}

console.log(randomArray([10, 50, 60, 80, 70, 20, 30, 40, 90, 100]))