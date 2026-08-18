// Throttling is a technique to limit how often a function can run.
// Both throttle and debounce are used to control how often a function runs, especially for performance-heavy events like scroll, resize, keyup, mousemove, API calls, etc.
// 👉 The function executes at most once in a given time interval, no matter how many times the event fires.
// Throttle ensures a function runs at most once in a given time interval.
// “Run this function every X milliseconds, no matter how many times the event fires.”

function throttle(fn, delay) {
    let lastCall = 0;

    return function (...args) {
        const now = Date.now();

        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

function handleScroll() {
    console.log("Scroll event fired");
}

const throttle_fun = throttle(handleScroll, 500);
throttle_fun("hi");
throttle_fun("hii");
throttle_fun("hiii");
throttle_fun("hiiii");
