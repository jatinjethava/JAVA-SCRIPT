class ApiService {

    static async request(url, options = {}) {

        try {

            const response = await fetch(url, {
                headers: {
                    "Content-Type": "application/json"
                },
                ...options
            });

            if (!response.ok) {
                throw new Error(`HTTP Error: ${response.status}`);
            }

            return await response.json();

        } catch (error) {

            console.error("API Error:", error.message);

            throw error;
        }
    }
}

async function getUsers() {

    try {

        const users = await ApiService.request("/users");

        console.log(users);

    } catch (error) {

        console.log("Failed to load users");
    }
}