class MyPromise {

    constructor(executor) {
        // console.log(executor) // [Function (anonymous)]
        this.successCallback = null;

        const resolve = (value) => {
            // console.log(value) // success
            if (this.successCallback) {
                this.successCallback(value);
            }
        };

        executor(resolve);
    }

    then(callback) {
        this.successCallback = callback;
    }
}

const promise = new MyPromise((resolve) => {
    setTimeout(() => {
        resolve("Success");
    }, 1000);
});

promise.then(data => {
    console.log(data);
});