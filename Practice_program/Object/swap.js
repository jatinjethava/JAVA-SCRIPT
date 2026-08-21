const person = {
    name: "Jatin",
    age: 20,
    city: "Surat",
    isStudent: true
};

const swap = {};

for (let key in person) {
    swap[person[key]] = key
}

console.log(swap);