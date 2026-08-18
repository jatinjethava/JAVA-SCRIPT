// Expected Result: ({}) => true, ({ a: undefined }) => true, ({ a: 1 }) => false

function isEmpty(obj) {
    for (let key in obj) {
        if (obj[key]) {
            return false;
        }
    }
    return true;
}

console.log(isEmpty({}));
console.log(isEmpty({ a: undefined }));
console.log(isEmpty({ a: null }));
console.log(isEmpty({ a: NaN }));
console.log(isEmpty({ a: 0 }));
console.log(isEmpty({ a: false }));
console.log(isEmpty({ a: 1 }));
