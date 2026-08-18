//  Expected Result: ({}) => true, ({ a: { b: undefined } }) => true, ({ a: { b: [] } }) => true

function isEmptyDeep(obj) {
    for (let key in obj) {
        if (obj[key] && !Array.isArray(obj[key])) {
            if (typeof obj[key] !== 'object') {
                return false;
            }
            return isEmptyDeep(obj[key]);
        }
    }
    return true;
}

console.log(isEmptyDeep({})); // true
console.log(isEmptyDeep({ a: undefined })); // true
console.log(isEmptyDeep({ a: null })); // true
console.log(isEmptyDeep({ a: 0 })); // true
console.log(isEmptyDeep({ a: false })); // true
console.log(isEmptyDeep({ a: {} })); // true
console.log(isEmptyDeep({ a: { b: undefined } })); // true
console.log(isEmptyDeep({ a: { b: 0 } })); // true
console.log(isEmptyDeep({ a: { b: false } })); // true
console.log(isEmptyDeep({ a: [] })); // true
console.log(isEmptyDeep({ a: { b: [] } })); // true

console.log(isEmptyDeep({ a: { b: 1 } })); // false
console.log(isEmptyDeep({ a: { b: 2 } })); // false
