let name = ["jatin", "ashok", "nayana", "aarti", "mayur"];
let hieght = [165, 150, 140, 163, 175];

let map = new Map();

for (let i = 0; i < name.length; i++) {
    map.set(hieght[i], name[i]);
}

console.log([...map.key()].sort((a, b) => a - b));
