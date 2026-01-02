# Mini-Project: The Task Manager Engine

This project applies almost every topic we've covered: Objects, Array filtering/reducing, Error Handling, and `this` context.

'''js
const taskManager = {
owner: 'John',
tasks: [],

    // Getter to see progress
    get stats() {
        const completed = this.tasks.filter(t => t.isDone).length;
        return `${this.owner}'s Progress: ${completed}/${this.tasks.length} tasks done.`;
    },

    // Method using Rest Operator to add multiple tasks at once
    addTasks(...taskNames) {
        taskNames.forEach(name => {
            this.tasks.push({ id: Date.now() + Math.random(), name, isDone: false });
        });
    },

    // Method using Setters and Error Handling
    set updateTaskStatus(taskId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (!task) throw new Error("Task ID not found.");
        task.isDone = true;
    },

    // Using Arrow Functions to maintain 'this' context while iterating
    printSummary() {
        console.log(`Summary for ${this.owner}:`);
        this.tasks.forEach(task => {
            const status = task.isDone ? '✅' : '❌';
            console.log(`${status} - ${task.name}`);
        });
    }

};

// --- Execution ---
try {
taskManager.addTasks('Learn Objects', 'Master Arrays', 'Understand Functions');

    // Simulating completing the first task
    const firstId = taskManager.tasks[0].id;
    taskManager.updateTaskStatus = firstId;

    console.log(taskManager.stats);
    taskManager.printSummary();

} catch (e) {
console.error(e.message);
}
'''

---

## What this demonstrates:

1.  **Objects & Methods**: The `taskManager` stores both data (`tasks`) and logic (`addTasks`).
2.  **Getters/Setters**: `stats` acts like a property but calculates data on the fly; `updateTaskStatus` allows us to change data with an assignment operator.
3.  **The Rest Operator**: `...taskNames` allows the function to accept any number of strings.
4.  **Array Methods**: We used `.filter()` for stats and `.find()` to locate a specific task.
5.  **Arrow Functions & `this`**: Inside `printSummary()`, the arrow function ensures `this.owner` refers to the `taskManager` object, not the global window.
6.  **Try/Catch**: Defensive programming ensures that if we provide a wrong ID, the app doesn't crash.

---

## Final Review Checklist

Before moving on to even more advanced JavaScript (like Prototypes or Classes), ensure you are comfortable with:

- The difference between **Primitives** (value) and **Objects** (reference).
- When to use **Arrow Functions** (to preserve `this`) vs **Regular Functions**.
- How **Hoisting** affects where you place your code.
- Which Array methods **mutate** the original (like `splice`) vs those that **return new ones** (like `map`).
