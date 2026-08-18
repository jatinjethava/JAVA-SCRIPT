// 1. vowel count
function countVowels(str) {
    let count = 0;
    const vowels = "aeiou";

    for (let char of str.toLowerCase()) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

// console.log(countVowels("Hello"));
// =====================================================

// 1. vowel count without any methods
function countVowels(name) {
    let str = name.toLowerCase();
    let count = 0;
    const vowels = "aeiou";

    for (let i = 0; i < str.length; i++) {
        let ohk = true;
        for (let j = 0; j < vowels.length; j++) {
            if (str[i] === vowels[j]) {
                console.log(vowels[j])
                ohk = false;
                break;
            }
        }
        if (!ohk) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("JATIN"));

// ======================================================================
// 3. all count

function analyzeString(str) {
    let vowels = 0;
    let consonants = 0;
    let digits = 0;
    let spaces = 0;

    for (let char of str) {
        if (/[aeiou]/i.test(char)) {
            vowels++;
        } else if (/[a-z]/i.test(char)) {
            consonants++;
        } else if (/[0-9]/.test(char)) {
            digits++;
        } else if (char === " ") {
            spaces++;
        }
    }

    return { vowels, consonants, digits, spaces };
}

// console.log(analyzeString("Hello 123 World"));

