// const Students = {
//     name: 'jatin',
//     age: 20,
//     rank: 12,
//     country: 'India',
// }

// const Address = {
//     street: 'Rambag society',
//     city: 'Surat',
//     pinCode: 395006,
//     state: 'Gujarat',
//     country: 'India',
// }

// function showObjectDetails(obj) {
//     for (let key in obj) {
//         console.log(key, ' : ', obj[key]);
//     }
// }

// showObjectDetails(Students);
// console.log('----------');
// showObjectDetails(Address);

// ======================================================================

function createObjFactoryMethod(name, age, rank, country) {
    return {
        name,
        age,
        rank,
        country
    }
}

let Students1 = createObjFactoryMethod('Dinanath', 35, 5, 'India');
console.log('Students1', Students1);

function Student(name, age, rank, country) {
    this.name = name;
    this.age = age;
    this.rank = rank;
    this.country = country;
}

let Students2 = new Student('Amit', 30, 4, 'Hindustan');
console.log('Students2', Students2);