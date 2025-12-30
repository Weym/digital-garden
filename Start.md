# JavaScript Basics

## 1. Introduction

Introduction to the fundamentals of JavaScript — one of the most widely used programming languages in the world.

---

## 2. What is JavaScript?

### Definition

JavaScript (JS) is one of the most popular and versatile programming languages used for building interactive and dynamic web experiences.

### What can you do with it?

JavaScript can be used in multiple areas of development:

- **Front-end development**: Creating interactive user interfaces.
- **Back-end development**: Using environments like Node.js using the V8 engine\*.
- **Full Stack development**: Combining both front-end and back-end logic.
- **Web applications**: Using frameworks like React, Vue, Angular.
- **Mobile applications**: With React Native.
- **Real-time networking apps** (e.g., chat applications).
- **Games**: On the browser with Canvas or WebGL or using engines like Phaser and Babylon.js.

- V8 compiles JS directly to native machine code using JIT (Just-In-Time) compilation.

### Where does JS code run?

- In the **browser** (client-side).
- In **Node.js** (server-side).

### JavaScript vs. ECMAScript

- **ECMAScript**: The official specification or standard that defines the rules of the language.
- **JavaScript**: A programming language that implements and conforms to the ECMAScript specification.

---

## 3. JavaScript in Browsers

JavaScript can be included in an HTML file — for example, in a project like `js-basics/index.html`.

### Script Tag

You can add a script inside the `<head>` or `<body>` tag.

**Best Practice:**
Place the script **at the end of the `<body>`** for better performance and user experience because:

- The browser parses the document **from top to bottom**. Putting the script tag at the bottom ensures it doesn't block the HTML parsing and rendering.
- A con of loading at the bottom: If you rely on scripts for critical above the-fold-content, users may briefly see a non-interactive page.

Script in `<head>`:

- Ensures scripts are loaded and executed **before** the rest of the page, which can be useful for some early configuration.

What `defer` changes:

- Tells the browser to download the script in **parallel** with the HTML parsing, but **execute it only after the document has finished parsing**.
- Deferred scripts **do not block** HTML parsing and are guaranteed to execute in document order.

- `defer` has [partial support since IE6-9](https://caniuse.com/?search=defer). So unless you as you need to support older browsers for some reason, Now you can safely put `<script>` at the head as long as you correctly use defer. We can also make use of the `fetchpriority` attribute to signal to complement `prealoading`.

- The script might interact with HTML elements — putting it at the end ensures all elements are fully loaded before the script runs.

**Example:**

```html
<script>
  console.log("Hello World")
</script>
```
