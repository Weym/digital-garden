# Hash Table vs Arrays

**MOC:** [🗺️ MOC - Data Structures](../01_System/MOC%20-%20Data%20Structures.md)
**Tags:** #data-structures #comparison #complexity

## Overview

Arrays and Hash Tables are the two most fundamental ways to store collections of data. While Arrays are optimized for **ordering** and **index-based access**, Hash Tables are optimized for **key-based retrieval**.

---

## Comparison Table

| Feature                | Array                        | Hash Table                    |
| :--------------------- | :--------------------------- | :---------------------------- |
| **Access Pattern**     | Ordered (Index 0, 1, 2...)   | Unordered (Key-Value)         |
| **Search (by Value)**  | $O(n)$                       | $O(1)$ (Average)              |
| **Insertion**          | $O(n)$ (requires shifting)\* | $O(1)$                        |
| **Deletion**           | $O(n)$ (requires shifting)   | $O(1)$                        |
| **Memory Layout**      | Contiguous blocks            | Scattered (via Hash Function) |
| **Order Preservation** | Yes                          | No (usually)                  |

> [!NOTE] > \*Pushing to the end of a Dynamic Array is $O(1)$ amortized, but inserting into the middle is $O(n)$.

---

## Key Differences

### 1. Memory and Retrieval

- **Arrays** store data sequentially in memory. This allows for **Random Access** ($O(1)$) if you know the index, but requires a linear scan ($O(n)$) if you only know the value.
- **Hash Tables** use a hash function to turn a key into an index. This allows you to find the value immediately ($O(1)$) regardless of where it is stored.

### 2. The Shift Problem

- In an **Array**, deleting or inserting an item in the middle requires shifting every subsequent item to maintain the index order.
- In a **Hash Table**, items are not stored in any particular order. To delete an item, you simply remove the key-value pair at that specific memory address. No shifting is required.

### 3. Space-Time Tradeoff

Hash Tables are often the "secret weapon" for optimizing algorithms.

- **The Tradeoff:** You use more memory (Space Complexity $O(n)$) to store a map of seen values, but you reduce your execution time (Time Complexity) from $O(n^2)$ to $O(n)$.

---

## When to Use Which?

**Use an Array when:**

- You need to keep the data in a specific **order**.
- You frequently need to iterate over the entire collection.
- You are memory-constrained (Hash Tables have overhead for the hashing mechanism and empty slots).

**Use a Hash Table when:**

- You need to **search** for items frequently.
- You have unique keys to map to specific values.
- You need to improve the time complexity of a nested loop.

---

**Links:** [📄 Array - Static vs Dynamic](./Array%20-%20Static%20vs%20Dynamic%20Allocation.md) | [📄 Hash Table - Properties](./Hash%20Table%20-%20Properties.md) | [[📄 Identifying Patterns (Two-Pointer, Sliding Window)]]
