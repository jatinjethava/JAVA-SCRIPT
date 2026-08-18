// Debouncing is a technique used to limit how often a function runs.
// Both throttle and debounce are used to control how often a function runs, especially for performance-heavy events like scroll, resize, keyup, mousemove, API calls, etc.

// 👉 The function executes only after a certain time has passed since the last event.
// Debounce ensures a function runs only after a delay once the event stops firing.
// “Wait until the user stops doing something, then run the function.”
// ----- example -----
// Search input (API calls)
// Form validation
// Auto-save
// Resize calculations

function debounce(fn, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}
function searchApi(query) {
    console.log("API call for:", query);
}

const debouncedSearch = debounce(searchApi, 1000);
// Call on keyup
debouncedSearch("j");
debouncedSearch("ja");
debouncedSearch("jat");
debouncedSearch("jati");
debouncedSearch("jatin"); // only this runs after 500ms

const searchInput =
    document.getElementById("search");

searchInput.addEventListener(
    "input",
    debounce((e) => {
        console.log(e.target.value);
    }, 1000)
);
