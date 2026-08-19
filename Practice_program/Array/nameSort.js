let name = ["jatin", "ashok", "nayana", "aarti", "mayur"];
let hieght = [165, 150, 140, 163, 175];

let map = new Map();

for (let i = 0; i < name.length; i++) {
    map.set(hieght[i], name[i]);
}

const sort = [...map.keys()].sort((a, b) => a - b);

let arr = [];
for (let val of sort) {
    arr.push(map.get(val));
}
console.log("name", arr);
