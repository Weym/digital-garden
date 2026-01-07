# Implementation - Hash Table Methods

**Path:** 📁 60_Exercise_Bank / 📄 Hash Table - Implementation.md
**MOC:** [🗺️ MOC - Data Structures](../01_System/MOC%20-%20Data%20Structures.md)
**Tags:** #coding-exercise #hashtable #javascript #implementation

## 1. Core Logic: Set and Get

Implementing a basic Hash Table requires a hashing function and logic to handle data storage. Note that `_hash` is a common naming standard to signal that the property should be treated as **private**.

```javascript
class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }

  _hash(key) {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  set(key, value) {
    let address = this._hash(key)
    if (!this.data[address]) {
      this.data[address] = []
      this.data[address].push([key, value])
    }
    this.data[address].push([key, value])
    return this.data
  }

  get(key) {
    let address = this._hash(key)
    const currentBucket = this.data[address]
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }
}

const myHashTable = new HashTable(50)
myHashTable.set("grapes", 1000)
myHashTable.set("apples", 54)
myHashTable.set("oranges", 2)
myHashTable.get("grapes")
```

### Performance Notes

- **Hash Function:** Even though `_hash` loops through the key, keys are typically short, so it is considered $O(1)$.
- **Set:** $O(1)$ constant time.
- **Get:** Most of the time $O(1)$, assuming no significant collisions.

---

## 2. Extraction: keys()

To retrieve all keys, we must iterate through the entire underlying data array.

```javascript
class HashTable {
  // ...
  keys() {
    const keysArray = []
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0])
      }
    }
    return keysArray
  }
}
```

### Downsides

- **Iteration Cost:** You must loop through all memory slots, regardless of how many items are stored.
- **Lack of Order:** There is no guaranteed order for the returned keys, as the hash function scatters them throughout memory.

---

**Links:** [📄 Hash Table - Properties](../20_Data_Structures/Hash%20Table%20-%20Properties.md) | [📄 Hash Table - Collision Handling](../20_Data_Structures/Hash%20Table%20-%20Collision%20Handling.md) | [📄 Big O - Rules of Simplification](../10_Foundations/Big%20O%20-%20Rules%20of%20Simplification.md)
