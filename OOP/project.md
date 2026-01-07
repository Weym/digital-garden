# Final Project: Async User Manager

What is: User Portfolio Manager that pulls data from a remote API

'''js
// 1. Base Class (Inheritance & Abstraction)
class Service {
#baseUrl = 'https://jsonplaceholder.typicode.com'; // Private field

    async getResource(endpoint) {
        const response = await fetch(`${this.#baseUrl}${endpoint}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    }

}

// 2. Specialized Class (Inheritance)
class UserManager extends Service {
constructor() {
super();
this.users = [];
}

    // 3. Async Method with Error Handling
    async loadUsers() {
        try {
            console.log('Loading users...');
            const data = await this.getResource('/users');

            // Map data to local state
            this.users = data.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email
            }));

            console.log('Users loaded successfully.');
        } catch (error) {
            UserManager.logError(error.message);
        }
    }

    // 4. Instance Method (Logic)
    findUserByName(name) {
        return this.users.find(u => u.name.toLowerCase().includes(name.toLowerCase()));
    }

    // 5. Static Method (Utility)
    static logError(msg) {
        console.error(`[System Error]: ${msg} at ${new Date().toLocaleTimeString()}`);
    }

}

// --- Implementation ---

const myManager = new UserManager();

// Using top-level await (available in modern modules)
async function run() {
await myManager.loadUsers();

    const user = myManager.findUserByName('Leanne');
    console.log('Found User:', user);

}

run();
'''

---

### Why this works (The Theory)

1.  **Inheritance:** `UserManager` inherits the `getResource` method from `Service`. This follows the **DRY (Don't Repeat Yourself)** principle.
2.  **Abstraction:** The `#baseUrl` is private. The user of the `UserManager` class doesn't need to know (or be able to change) the URL. They only care about the results.

3.  **Async Flow:** `loadUsers` is non-blocking. The UI could stay responsive while the data is being fetched.
4.  **Static Utility:** `logError` is static because it doesn't need data from a specific instance of a manager; it just performs a generic task (logging).

---

### Key Takeaways for your "Brain Index"

- **Base Classes** are for shared logic (like network requests).
- **Derived Classes** are for specific data types (Users, Posts, Products).
- **Private Fields (#)** prevent external "tampering" with your object's internal state.
- **Async/Await** is the gold standard for clean, readable code in modern apps.
