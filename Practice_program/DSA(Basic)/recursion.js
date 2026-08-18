// Recursion is a technique where a function calls itself to solve a problem by breaking it into smaller subproblems.

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; // base case
    }

    return n * factorial(n - 1); // recursive case
}
// console.log(factorial(5));

function print(n) {
    if (n === 0) return;
    console.log(n)
    print(n - 1);
}
// print(5);

function sum(n) {
    if (n === 0 || n === 1) return 1;
    return n + sum(n - 1);
}
console.log(sum(5));