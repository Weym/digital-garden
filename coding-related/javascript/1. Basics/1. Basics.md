# JavaScript Basics

## 1. Variables

- Used to **store data temporarily** in memory.
- Think of a variable as a **box**:
  - The **label** on the box → variable **name**.
  - The **content** inside → variable **value** (data).

```js
const name = "Name"
console.log(name)
```

### `var` vs `let` / `const`

- `var` has function-scoped behavior and can cause subtle bugs (hoisting, re-declaration, for-loop index).
- Prefer **`let`** (reassignable) and **`const`** (non‑reassignable) in modern code.

Example of a bug that can be caused on the for loop:

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

// Expectation: 0, 1, 2
// Reality: 3, 3, 3
```

Why?

1. The loops finishes almost instantly, by the time it is done `i` is `3`.
2. A second later, `setTimeout` triggers.
3. They all look at the variable `i`, which is shared. They all see `3`.

The expected behavior with `let`:

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i)
  }, 1000)
}

// 0, 1, 2
```

With `let`, each `closure` inside the loop captures the value of `i` specific for that "round" of the loop.

| Feature            | `var`                                                          | `let`                                              |
| :----------------- | :------------------------------------------------------------- | :------------------------------------------------- |
| **Scope**          | **Function Scope**: Accessible throughout the entire function. | **Block Scope**: Only accessible within the `{}`.  |
| **Loop Behavior**  | Shares the **same variable** across every iteration.           | Creates a **unique variable** for every iteration. |
| **Hoisting**       | Initialized as `undefined`.                                    | Remains in "Temporal Dead Zone".                   |
| **Re-declaration** | Allowed in the same scope.                                     | Throws a SyntaxError.                              |

### Naming rules and conventions

- Cannot use a **reserved keyword** like `if`, `for`, `let`, `class`.
- Should be **meaningful** / descriptive.
- Cannot **start with a number**.
- Cannot contain **spaces** or **hyphens** (`-`).
- **Case sensitive**: `firstName` and `firstname` are different.
- Best practice: **one variable per line** for readability.
- Common style: **camelCase**

`let firstName = 'John';`

---

## 2. Constants

Use **`const`** when the variable’s value should **not change**.

- `const` prevents **reassignment** of the binding.
- The value itself can still be **mutable** if it is an object or array, but the variable cannot point to a new value.

```js
const firstName = "John"
firstName = "Sally"

// This will throw an error. You cannot reassign a constant.

const person = {
  firstName: "John",
}

person.firstName = "Sally"

// This is fine
```

Think of it this way: A variable in a primitive value points to the value. If you change the value, you effectively change what it is pointing to. You change what it represents.

But in a Reference Type like an Object, the variable points to an address in memory, a **reference** rather than to the actual data itself.

Think of it like a house:

- `const` means you have "locked" the house address. You cannot tear down the house and move the address to a different land (reassignment).
- However, you are free to go inside the house and paint the wall or change the furniture.

---

## 3. Primitive Types

Two main categories of values:

- **Primitive types**
- **Reference types**

### Primitive types (built-in):

- `string`
- `number`
- `boolean`
- `undefined`
- `null`

```js
let name = "Name" // string literal
let age = 30 // number literal
let isApproved = true // boolean literal
let firstName // undefined (no value assigned)
let lastName = null // null (explicitly "no value")
```

Use `null` when you want to explicitly clear the value of a variable.

- Why not use `undefined`? Semantics. `undefined` says the value was never defined to begin with.

---

## 4. Dynamic Typing

JavaScript is **dynamically typed**:

- **Static (statically typed)** languages:
  Type is declared and cannot change.

```js
let name = "John"
typeof name // 'string'
name = 1
typeof name // 'number'
```

- The **type** is attached to the **value**, not the variable name.
- `typeof` is the operator to inspect the runtime type.

---

## 5. Objects

**Reference types** in JS include:

- `Object`
- `Array`
- `Function`

### Object basics

An **object** represents a real-world entity with **properties** (key–value pairs).

```js
let person = {
  name: "Name",
  age: 30,
} // object literal
```

- Each property is a **key–value pair**.
- This syntax is called an **object literal**.

### Accessing / changing properties

```js
// Dot notation
person.name = "John"

// Bracket notation
person["name"] = "Sally"

// Using a variable for the property name
let selection = "name"
person[selection] = "Sally"
```

- **Dot notation** is generally preferred for readability.
- **Bracket notation** is useful when the property name is dynamic or not a valid identifier.

---

## 6. Arrays

An **array** stores a **list of values** in a specific order.

- Arrays are **zero-based**: first element is index `0`.
- The types of elements in an array can be **mixed** and **change over time**.

```js
let selectedColors = ["red", "green", "blue"]
selectedColors[2] // 'blue'
selectedColors[3] // undefined
selectedColors[3] = 1
console.log(selectedColors) // ['red', 'green', 'blue', 1]
```

Technically, arrays are objects

```js
typeof [] // 'object'
```

---

## 7. Functions

A **function** is a reusable block of code that performs a task.

```js
function greet() {
  // body of the function
  console.log("Hello World")
}

greet() // function call
```

### Parameters vs arguments

```js
function greet(name) {
  console.log("Hello", name) // 'name' is a parameter
}

greet("John") // 'John' is an argument
```

- **Parameter**: variable in the function **definition**.
- **Argument**: actual value passed when the function is **called**.

---

## 8. Types of Functions

Two common categories:

1. **Functions that perform a task** (side effects)
2. **Functions that calculate and return a value**

### Function that returns a value

```js
function square(number) {
  return number * number
}

square(2) // 4 (function call)
console.log(square(2)) // 4, but here there are 2 function calls:
// 1) square(2)
// 2) console.log(...)
```

- `return` sends a value back to the caller.
- You can **compose** functions by passing the result of one into another (as with `console.log(square(2))`).

### Function Statement (Declaration) vs function Expression

#### Function Statement

A function statement is the traditional way of defining a function. It starts with the function keyword.

```js
function greet() {
  return "Hello!"
}
```

- **Hoisting**: These are fully hoisted. You can call the function before you define it in the code.
- **Scope**: It is hoisted to the top of its current scope (global or function).

#### Function Expression

A function expression is when a function is assigned to a variable. The function can be anonymous (no name) or named.

```js
const greet = function () {
  return "Hello!"
}
```

- **Hoisting**: These are **not** hoisted in the same way. Since the function is assigned to a variable (`const`, `let`, or `var`), the variable follows its own hoisting rules.
  - If you use `const` or `let`, you cannot call it before the line where it is defined (it's in the [Temporal Dead Zone](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)).
  - If you use `var`, the variable is hoisted as `undefined`, so calling it will throw `TypeError: greet is not a function`.

| Feature            | Function Statement (Declaration)                                            | Function Expression                                               |
| :----------------- | :-------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| **Syntax**         | `function name() { ... }`                                                   | `const name = function() { ... }`                                 |
| **Hoisting**       | **Fully Hoisted**: You can call the function before it appears in the code. | **Not Hoisted**: You must define it before you can call it.       |
| **Initialization** | Loaded into memory at the start of the script execution.                    | Created only when the execution reachs that specific line.        |
| **Naming**         | Must have a name.                                                           | Can be anonymous (often used with arrow functions).               |
| **Best Use Case**  | For global utility functions or "helper" methods.                           | For callbacks, closures, and logic that shouldn't exist globally. |

#### When use one over the other?

- Use Statements when you want your functions to be available globally throughout the file, regardless of order (like a "library" of tools at the bottom of your script). This eay you can keep your main logic at the top.

- Use Expressions when you want to limit where a function can be used, or when passing functions around as "data" (callbacks). This leads to cleaner, more predictable code because it enforces a top-to-bottom flow.

Use these for **functional programming and scope control**

- **Callbacks**: When you need to pass a function into another function as an argument. Happens with `.map()`, `.filter()`, or an event listener.

```js
// this is an anonymous function expression, because it doesn't have a name and is being passed as an argument to another method.
button.addEventListener("click", function () {
  console.log("Clicked!")
})
```

- **IIFE (Immediately Invoked Function Expressions)**: When you want to run a block of code immediately and then "throw away" the function so it doesn't pollute the global scope.

```js
;(function () {
  const message = "I run immediately!"
  console.log(message)
})()
```

- **Closures**: When you are returning a function from inside another function to "capture" some private data.

```js
function vault() {
  let secretCode = "12345" // Defined in the outer scope

  return function () {
    console.log(`The secret code is: ${secretCode}`)
  }
}

const revealSecret = vault()

// The 'vault' function has finished running,
// but 'revealSecret' still has the code in its memory
revealSecret() // Output: "The secret code is: 12345"
```

- **Conditional Logic**: If you want to define a function differently based on an if statement. Statements are technically not supposed to be inside blocks (though most browsers allow it), whereas expressions are perfectly suited for this.

```js
let greet
if (language === "es") {
  greet = function () {
    console.log("Hola")
  }
} else {
  greet = function () {
    console.log("Hello")
  }
}
```

## 9. Arrow Function

**Arrow Functions** provide a shorter, cleaner syntax for writing function expressions.

- They are always **anonymous** functions and are commonly assigned to a `const` variable.

### Syntax

```js
// Traditional Function Expression
const add = function (a, b) {
  return a + b
}

// Arrow Function
const add = (a, b) => {
  return a + b
}
```

If the function body is a single line, you can remove the curly braces {} and the return keyword. The return is implicit.

```js
// Explicit return
const square = number => {
  return number * number
}

// Implicit return (Cleaner)
const square = number => number * number
```

**Note**: If you have exactly **one parameter**, you can also omit the parentheses (). If you have zero or multiple parameters, parentheses are required.

#### Returning Objects

A common "gotcha" happens when trying to implicitly return an object. Since `{}` usually represents a code block, JS gets confused. You must wrap the object in parentheses `()`.

```js
// ❌ WRONG: JS thinks {} is the function body block
const makePerson = name => {
  name: name
} // Returns undefined

// ✅ CORRECT: Wrap object in ()
const makePerson = name => ({ name: name })
```

The `this` Keyword

The biggest technical difference between a traditional function and an arrow function is how they handle the `this` keyword.

1. **Traditional Function**: `this` is dynamic. It depends on how the function is called.

2. **Arrow Function**: `this` is lexical. It inherits `this` from the surrounding code (where the function was defined).

```js
const person = {
  name: "John",
  talk: function () {
    // Traditional function inside setTimeout
    setTimeout(function () {
      console.log("Traditional:", this.name)
    }, 100)

    // Arrow function inside setTimeout
    setTimeout(() => {
      console.log("Arrow:", this.name)
    }, 100)
  },
}

person.talk()

// Output:
// Traditional: undefined (or Window/Global object)
// Arrow: "John"
```

#### When NOT to use Arrow Functions

Do not use arrow functions for **Object Methods**, because you usually want this to refer to the object itself.

```js
const user = {
  name: "Sally",
  // ❌ Bad: 'this' will be Window/Global, not 'user'
  getName: () => {
    return this.name
  },
  // ✅ Good: 'this' refers to 'user'
  getNameRegular: function () {
    return this.name
  },
  // ✅ Good (ES6 Method Shorthand):
  getNameShort() {
    return this.name
  },
}
```

| Feature          | Traditional Function (`function`)                   | Arrow Function (`=>`)                               |
| :--------------- | :-------------------------------------------------- | :-------------------------------------------------- |
| **Syntax**       | Verbose (requires `function`, `return`, `{}`).      | Concise, supports implicit return.                  |
| **`this` Scope** | **Dynamic**: Depends on how the function is called. | **Lexical**: Inherits `this` from the parent scope. |
| **Constructors** | Can be used with `new` keyword.                     | **Cannot** be used as a constructor (throws error). |
| **Arguments**    | Has access to the `arguments` object.               | Does not have access to `arguments`.                |
| **Best Use**     | Object methods, top-level definitions.              | Callbacks (`.map`, `.filter`), preserving `this`.   |
