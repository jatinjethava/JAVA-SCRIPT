const obj1 = {
    a: 1,
    b: {
        c: 3
    }
};

const obj2 = {
    c: 1,
    b: {
        c: 3
    }
};

function intersectionDeep(obj1, obj2) {
    let returnObj = {};
    for (let key in obj1) {

        if (obj1[key] === obj2[key]) {
            returnObj[key] = obj1[key];
        } else if (obj1[key] !== null && obj2[key] !== null && typeof obj1[key] === "object" && typeof obj2[key] === "object") {
            const res = intersectionDeep(obj1[key], obj2[key]);
            if (Object.keys(res).length > 0) {
                returnObj[key] = res;
            }
        }
    }
    return returnObj;
}


console.log(intersectionDeep(obj1, obj2));