const MARKSARRAY = [55, 85, 55, 65];

function calculateAverage(currentArray) {
    let total = 0;
    for (let curValue of currentArray) {
        total += curValue;
    }
    return (total / currentArray.length);
}

function calculateGrades(_currentArray) {
    const average = calculateAverage(_currentArray);

    if (average < 70) return grade = 'D';
    if (average < 80) return grade = 'C';
    if (average < 90) return grade = 'B';
    if (average <= 100) return grade = 'A';
}

console.log('Grade:', calculateGrades(MARKSARRAY));