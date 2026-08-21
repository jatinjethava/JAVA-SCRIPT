const data = [
    { id: 1, name: "iPhone", category: "mobile" },
    { id: 2, name: "Samsung", category: "electronics" },
    { id: 3, name: "OnePlus", category: "mobile" },
    { id: 4, name: "TV", category: "electronics" },
];

const result = data.reduce((acc, item) => {
    const key = item.category;

    if (!acc[key]) {
        acc[key] = [];
    }

    acc[key].push(item.name);
    return acc;
}, {});

console.log(result);

// ==================================================

let nums = {
    a: 100,
    b: 200,
    title: 'My nums'
};

function multiplyByTwo(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            obj[key] *= 2;
        }
    }
}

multiplyByTwo(nums);
console.log(nums);