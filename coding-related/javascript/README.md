## JavaScript Learning Notes — Digital Garden

This repository contains curated learning notes and small projects covering fundamental JavaScript concepts and object-oriented patterns. The content is organized into two main sections: `1. Basics` (core language topics and a mini-project) and `2. OOP` (prototypes, classes, modules, and related exercises).

## Table of contents

- `1. Basics`

  - [`1. Basics.md`](./1.%20Basics/1.%20Basics.md) — Overview and starting notes for JavaScript fundamentals
  - [`2. Operators.md`](./1.%20Basics/2.%20Operators.md) — Operators: arithmetic, logical, comparison, assignment, etc.
  - [`3. Control Flow.md`](./1.%20Basics/3.%20Control%20Flow.md) — Control flow: conditionals and loops
  - [`4. Objects.md`](./1.%20Basics/4.%20Objects.md) — Objects: creation, properties, and manipulation
  - [`5. Arrays.md`](./1.%20Basics/5.%20Arrays.md) — Arrays: methods and common patterns
  - [`6. Functions.md`](./1.%20Basics/6.%20Functions.md) — Functions: declarations, expressions, scopes, and closures
  - [`mini-project.md`](./1.%20Basics/mini-project.md) — Mini project that applies basic concepts

- `2. OOP`
  - [`1. Prototypes.md`](./2.%20OOP/1.%20Prototypes.md) — Prototype-based inheritance and prototype chains
  - [`2. Prototypal Inheritance.md`](./2.%20OOP/2.%20Prototypal%20Inheritance.md) — Patterns of inheriting via prototypes
  - [`3. ES6 Classes.md`](./2.%20OOP/3.%20ES6%20Classes.md) — Class syntax and sugar over prototypes
  - [`4. ES6 Modules.md`](./2.%20OOP/4.%20ES6%20Modules.md) — Modules: import/export and module organization
  - [`5. AsynchronousJavaScript`](./2.%20OOP/5.%20Asynchronous%20JavaScript.md) — Asynchronous patterns (promises, async/await, callbacks)
  - [`challenge.md`](./2.%20OOP/challenge.md) — Challenge descriptions
  - [`challenge-solution.md`](./2.%20OOP/challenge-solution.md) — Solutions to challenges

## How to use

- Open the repository in your editor (VS Code recommended) and open the markdown files under `1. Basics` and `2. OOP` to read the notes.
- To preview a markdown file in VS Code, open the file and press Ctrl+Shift+V (or use the built-in Markdown preview).

- The `.mjs` example modules are ES modules. There's an `index.html` (added to the project) that loads the modules in the browser. To run the examples in a browser you should serve the project and then open `index.html`. Here is how:

  - VS Code Live Server: open `index.html` in VS Code, right-click and choose "Open with Live Server".

- Alternatively: You can run them with Node.js (v14+); for example, from the `2. OOP/challenge-solution` folder you can run `node ./challenge-solution/main.mjs`.
