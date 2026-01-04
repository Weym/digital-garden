# Problem Solving - First Recurring Character

**MOC:** [🗺️ MOC - Algorithms](../01_System/MOC%20-%20Algorithms.md)
**Pattern:** [[Identifying Patterns (Two-Pointer, Sliding Window)]]
**Tags:** #algorithm #hashtable #interview-question #google

## Problem Statement

Given an array, return the **first character that repeats**. If no characters repeat, return `undefined`.

**Examples:**

- `[2, 5, 1, 2, 3, 5]` → Returns `2` (even though 5 also repeats, 2 repeats first).
- `[2, 1, 1, 2, 3]` → Returns `1`.
- `[2, 3, 4, 5]` → Returns `undefined`.

---

## 1. Brute Force Approach ($O(n^2)$)

Using nested loops to compare each element with every other element.

```javascript
function firstRecurringCharacter(input) {
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      if (input[i] === input[j]) {
        return input[i]
      }
    }
  }
  return undefined
}
```

**Downside:** This is inefficient. Additionally, it can return "false positives" depending on the requirement (e.g., in `[2, 5, 5, 2]`, it might return `2` instead of `5` because the outer loop starts at `2`).

---

## 2. Optimized Approach ($O(n)$)

Using a **Hash Table** (or JavaScript Object/Set) to keep track of items we have already seen. This is a classic **Space-Time Tradeoff**.

```ts
function firstRecurringCharacter<T extends string | number>(
  input: T[],
): T | undefined {
  const seen: Record<T, boolean> = {} as Record<T, boolean>

  for (const item of input) {
    if (seen[item]) {
      return item
    }

    seen[item] = true
  }

  return undefined
}
```

### Complexity Analysis

- **Time Complexity:** $O(n)$ — We only iterate through the array once.
- **Space Complexity:** $O(n)$ — In the worst case (no repeats), we store every element in the hash table.

---

## 3. Alternative: Using a Set

If we don't need to store the index and only care about the value, a `Set` is more semantically correct in modern JavaScript.

```ts
function firstRecurringCharSet(input: string) {
  const seen = new Set()
  for (const char of input) {
    if (seen.has(char)) return char
    seen.add(char)
  }
  return undefined
}
```

---

## Key Takeaways

- **Hash Tables** are the most common tool for improving time complexity from $O(n^2)$ to $O(n)$.
- Always clarify with the interviewer: "Do you want the first character that _has_ a repeat later, or the first character to _actually_ repeat?" (The difference between index `i` and index `j`).

---

**Links:** [📄 Hash Table - Properties](../20_Data_Structures/Hash%20Table%20-%20Properties.md) | [📄 Big O - Time Complexity Classes](../10_Foundations/Big%20O%20-%20Time%20Complexity.md) | [[📄 Identifying Patterns (Two-Pointer, Sliding Window)]]
