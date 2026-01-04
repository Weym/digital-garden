# Hash Table - Collision Handling

**MOC:** [🗺️ MOC - Data Structures](../01_System/MOC%20-%20Data%20Structures.md)
**Tags:** #data-structures #computer-science #optimization

## The Collision Problem

A **Collision** occurs when the Hash Function generates the same memory address for two distinct keys. Because memory is limited, collisions are mathematically inevitable (based on the Pigeonhole Principle).

---

## 1. Separate Chaining (Linked Lists)

In this strategy, each "bucket" or slot in the hash table array does not store a single value, but rather a pointer to another data structure (usually a **Linked List**).

- **How it works:** When multiple keys hash to the same index, they are simply added to the linked list at that index.
- **Time Complexity:** \* **Average:** $O(1)$
  - **Worst Case:** $O(n)$ (if all items hash to the same bucket, the table degrades into a linked list).

---

## 2. Open Addressing

Instead of using external storage, Open Addressing finds another empty slot within the existing array.

### A. Linear Probing

If `index` is full, check `index + 1`, then `index + 2`, and so on.

- **Pros:** Easy to implement.
- **Cons:** Causes **Primary Clustering**, where long sequences of occupied slots build up, slowing down future searches.

### B. Quadratic Probing

Increments the index by a quadratic function: $(hash(key) + i^2) \pmod{tablesize}$.

- **Pros:** Reduces clustering compared to Linear Probing.
- **Cons:** Can lead to **Secondary Clustering** and may fail to find an empty slot even if one exists (infinite loop) if the table size isn't a prime number.

### C. Double Hashing

Uses a second hash function to determine the step size for probing.

```math
Index = (hash1(key) + i \cdot hash2(key)) \pmod{tablesize}
```

- **Note:** The second hash function must never result in zero.

---

## 3. Implementation Example (JavaScript - Separate Chaining)

```ts
/**
 * A simple Hash Table using Separate Chaining for collision resolution.
 * T represents the type of value stored in the table.
 */
class HashTable<T> {
  // Use a private property to prevent external access
  // The structure is an array of buckets, where each bucket is an array of [key, value] pairs
  private data: [string, T][][]

  constructor(size: number) {
    this.data = new Array(size)
  }

  /**
   * Private hash function to generate an index for a key.
   */
  private _hash(key: string): number {
    let hash = 0
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }

  /**
   * Stores a key-value pair.
   */
  public set(key: string, value: T): void {
    const address = this._hash(key)

    if (!this.data[address]) {
      this.data[address] = []
    }

    // Optional: Check if key already exists to update it instead of pushing a duplicate
    const existingEntry = this.data[address].find(entry => entry[0] === key)
    if (existingEntry) {
      existingEntry[1] = value
    } else {
      this.data[address].push([key, value])
    }
  }

  /**
   * Retrieves a value by its key. Returns undefined if not found.
   */
  public get(key: string): T | undefined {
    const address = this._hash(key)
    const bucket = this.data[address]

    if (bucket) {
      const entry = bucket.find(pair => pair[0] === key)
      return entry ? entry[1] : undefined
    }

    return undefined
  }
}
```

---

**Links:** [📄 Hash Table - Properties](./Hash%20Table%20-%20Properties.md) | [📄 Linked List - Singly vs Doubly](../20_Data_Structures/Linked%20List%20-%20Singly%20vs%20Doubly.md) | [📄 Big O - Time Complexity](../10_Foundations/Big%20O%20-%20Time%20Complexity.md)
