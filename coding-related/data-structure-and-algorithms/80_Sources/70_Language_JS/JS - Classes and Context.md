# JS - Classes and Context

**Source:** [[80_Sources/ZTM - Ch 6]]

## 1. Context vs Scope

- **Scope:** Created when we see curly brackets `{}`. It defines where variables are accessible.
- **Context:** Refers to the object that "owns" the current executing code. It is accessed via the keyword `this`.
  - _Example:_ In `object.method()`, the context inside the method is `object`.

## 2. Instantiation

The process of creating an instance (copy) of an object using `class`. This is the standard way to build Nodes, Trees, and Graphs in JS.

### The Class Template

```javascript
class Player {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  introduce() {
    console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type) // Passes name/type to the Player constructor
  }
  play() {
    console.log(`I am a ${this.type}`)
  }
}

const wizard1 = new Wizard("Shelly", "Healer")
```
