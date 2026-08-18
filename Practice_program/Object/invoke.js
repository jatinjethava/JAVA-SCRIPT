//  Expected Result: ({ a: { b: [1, 2, 3] } }, 'a.b', splice, [1, 2]) => [2, 3]

function invoke(obj, path, method, ...args) {
    const keys = path.split('.');
    const value = keys.reduce((acc, key) => acc[key], obj);
    return value[method](...args);
}

console.log(invoke({ a: { b: [1, 2, 3] } }, 'a.b', 'splice', 1, 2));