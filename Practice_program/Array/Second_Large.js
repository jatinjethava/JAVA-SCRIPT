const arr = [-10, 62, -13, 54, 15, -6, 27, 8, 39, 10];

const large = arr.sort((a, b) => b - a);
console.log("second large:", large);

const small = arr.sort((a, b) => a - b);
console.log("second small:", small);

// =========================================================

// const arr = [10, 62, 13, 54, 15, 6, 27, 8, 39, 10];

// const large = [...arr].sort((a, b) => b - a);
// const small = [...arr].sort((a, b) => a - b);

// console.log(large[1]);
// console.log(small[1]); 

// =========================================================

let lg = arr[0];
let secLg = arr[0];
let sml = arr[0];
let secSml = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > lg) {
        secLg = lg;
        lg = arr[i];
    }
    if (arr[i] > secLg && arr[i] < lg) {
        secLg = arr[i];
    }
    if (arr[i] < sml) {
        secSml = sml;
        sml = arr[i];
    }
    if (arr[i] < secSml && arr[i] > sml) {
        secSml = arr[i];
    }
}
// console.log("Largest element: ", lg);
// console.log("Smallest element: ", sml);
// console.log("Second Largest element: ", secLg);
// console.log("Second Smallest element: ", secSml);

// =========================================================