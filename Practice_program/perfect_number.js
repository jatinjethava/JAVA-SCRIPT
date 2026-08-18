function perfect(number) {

    let num = number;
    let sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            // console.log(i)
            sum += i;
        }
    }

    if (num === sum) {
        console.log(`${num} number is perfect.`);
    } else {
        console.log(`${num} number is not perfect.`);
    }
}

perfect(6);