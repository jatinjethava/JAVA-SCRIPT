// Common String Methods in JavaScript:

// length – Returns the number of characters in a string.
// charAt(index) – Returns the character at the specified index.
// slice(start, end) – Extracts a section of a string and returns it as a new string.
// substring(start, end) – Similar to slice(), but does not accept negative indices.
// toUpperCase() / toLowerCase() – Converts the string to uppercase or lowercase.
// trim() – Removes whitespace from both ends of a string.
// replace(searchValue, newValue) – Replaces a specified value with another value.
// split(separator) – Splits a string into an array based on a specified separator.
// includes(substring) – Checks if a string contains a given substring, returning true or false.
// concat(str1, str2, ...) – Joins two or more strings together.

// 1. reverse a string
let str = "hello";
let reversedStr = str.split("").reverse().join('');
// str.split("") = [ 'h', 'e', 'l', 'l', 'o' ]
// .reverse() = [ 'o', 'l', 'l', 'e', 'h' ]
// .join('') = olleh
// console.log(reversedStr);

let name = "jatin";
let reverseString = '';
for (let i = name.length - 1; i >= 0; i--) {
    reverseString += name[i];
}
// console.log(reverseString);

function rev_String(str) {
    console.log(str)
    if (str === "") {
        return str;
    } else {
        return rev_String(str.substr(1)) + str[0];
    }
}
console.log(rev_String("jatinjethava"));

let s = "GeeksforGeeks";
const ans = [...s].reverse().join("");
// console.log(ans);

// 2. palindrome string
function isPalindrome(str) {
    let rev = str.split("").reverse().join("");

    if (rev == str) {
        return true
    }
    return false

}

let str1 = "racecar";
// console.log(isPalindrome(str1));

