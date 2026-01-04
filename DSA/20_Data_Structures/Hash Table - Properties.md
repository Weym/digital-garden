# Hash Table - Properties

**MOC:** [🗺️ MOC - Data Structures](../01_System/MOC%20-%20Data%20Structures.md)
**Tags:** #data-structures #hashtable #complexity #basics

## Overview

A **Hash Table** (also known as Hash Map, Dictionary, or Object) is a data structure that stores data in **key-value pairs**. It is designed for high-performance data retrieval by using a **Hash Function** to map keys to specific memory addresses.

---

## 1. The Hash Function

The "engine" of the Hash Table. It takes an input (key) and converts it into a fixed-length integer (index).

- **Deterministic:** The same input will always result in the same output.
- **One-Way:** You cannot reverse the hash back into the original key.
- **Idempotent:** It should be fast to calculate so it doesn't bottleneck operations.
- **Efficiency:** While the function iterates through the key (e.g., a string), this is typically considered $O(1)$ because keys are usually much smaller than the total data set.

---

## 2. Big O Complexity

| Operation          | Average | Worst Case | Note                                                       |
| :----------------- | :------ | :--------- | :--------------------------------------------------------- |
| **Lookup**         | $O(1)$  | $O(n)$     | $O(1)$ assumes a good hash function with no collisions.    |
| **Insert**         | $O(1)$  | $O(n)$     | Directly puts the value in the calculated address.         |
| **Delete**         | $O(1)$  | $O(n)$     | Unordered nature means no shifting is required.            |
| **Search (Value)** | $O(n)$  | $O(n)$     | Must iterate through all buckets to find a specific value. |

> [!WARNING]
> The **Worst Case $O(n)$** occurs when many keys map to the same address, causing a collision that requires traversing a linked list.

---

## 3. Language Variations

- **JavaScript:** `Objects` are the most common implementation, though `Map` is used when insertion order matters or non-string keys are needed. `Set` is a variation that only stores unique keys.
- **Python:** Called `Dictionaries`.
- **Java:** `HashMap`.
- **C#:** `Dictionary`.

---

## 4. Pros and Cons

### Pros

- **Speed:** Extremely fast lookups and inserts.
- **Flexible Keys:** Unlike arrays, keys don't have to be integers (can be strings, or in some languages, objects).
- **Optimization:** The primary tool for reducing $O(n^2)$ algorithms to $O(n)$ by storing state in memory.

### Cons

- **Unordered:** Data is scattered in memory; there is no guaranteed sequence.
- **Slow Iteration:** To get all keys, you must loop through the entire memory allocation, which may include many empty slots.
- **Memory Overhead:** Uses more space than arrays to maintain the hash map and avoid frequent collisions.

---

**Links:** [📄 Hash Table - Collision Handling](./Hash%20Table%20-%20Collision%20Handling.md) | [📄 Hash Table vs Arrays](./Hash%20Table%20vs%20Arrays.md) | [📄 Big O - Space Complexity](../10_Foundations/Big%20O%20-%20Space%20Complexity.md)
