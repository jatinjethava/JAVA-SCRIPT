// function countByKey(arr, key) {
//     return arr.reduce((acc, item) => {
//         const k = item[key];
//         acc[k] = (acc[k] || 0) + 1;
//         return acc;
//     }, {});
// }

// const products = [
//     { name: "iPhone", category: "mobile" },
//     { name: "Samsung", category: "mobile" },
//     { name: "TV", category: "electronics" },
// ];

// console.log(countByKey(products, "category"));
// { mobile: 2, electronics: 1 }

const user = {
    name: "Jatin"
};

const updatedUser = {
    ...user,
    city: "Surat"
};

console.log(user);
console.log(updatedUser);