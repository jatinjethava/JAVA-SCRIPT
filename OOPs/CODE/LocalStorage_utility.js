// LocalStorage utility class
class StorageService {

    // Set value in local storage
    static set(key, value) {

        localStorage.setItem(
            key,
            JSON.stringify(value)
        );
    }

    // Get value from local storage

    static get(key) {

        const data =
            localStorage.getItem(key);

        return data ? JSON.parse(data) : null;
    }

    // Remove value from local storage

    static remove(key) {
        localStorage.removeItem(key);
    }
}

StorageService.set("user", {
    name: "Jatin"
});

console.log(
    StorageService.get("user")
);

// Why Better?
// ✅ Prevents repeated JSON parsing
// ✅ Cleaner architecture
// ✅ Centralized storage logic