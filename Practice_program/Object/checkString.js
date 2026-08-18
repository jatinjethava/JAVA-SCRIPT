function showStringProperties(curObj) {
    for (let key in curObj) {
        if (typeof curObj[key] === "string") {
            console.log(`${key} : ${curObj[key]}`);
        }
    }
}

const Person = {
    name: 'jatin',
    age: 40,
    height: 5.6,
    country: 'India',
    designation: 'UI Developer'
}

showStringProperties(Person);