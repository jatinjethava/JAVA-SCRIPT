const obj1 = {
    name: "Jatin",
    address: {
        city: "Surat"
    }
};

const obj2 = {
    name: "Jatin",
    address: {
        city: "Surat"
    }
};

function compare(obj1, obj2) {
    if (obj1 === null || obj2 === null || typeof obj1 !== "object" || typeof obj2 !== "object") {
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (!Object.hasOwn(obj2, key)) {
            return false;
        }

        if (typeof obj1[key] === "object" && obj1[key] !== null) {
            if (!compare(obj1[key], obj2[key])) {
                return false;
            }
        } else {
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }
    }

    return true;
}

console.log(compare(obj1, obj2));