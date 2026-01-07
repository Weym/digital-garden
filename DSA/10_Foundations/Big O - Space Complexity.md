# Space Complexity

While [[Big O - Time Complexity Classes]] measures time, Space Complexity measures the **additional memory** an algorithm uses relative to the input size.

## What Causes Space Complexity?

When analyzing code, look for these four memory consumers:

1. **Variables:** Storing individual values.
2. **Data Structures:** Storing collections (Arrays, Hash Maps).
3. **Function Calls:** Each call adds a frame to the **Stack**.
4. **Allocations:** Dynamically reserving memory.

- We do **not** count the space taken up by the original input. We only look at new variables or data structures created inside the function.

## The Trade-off

Often, to improve **Time Complexity**, we must increase **Space Complexity** (e.g., using a Hash Map to avoid a nested loop).

### O(1) Space Example

```java
/**
 * Time Complexity: O(n) - Iterates through the array once.
 * Space Complexity: O(1) - Uses a constant amount of memory for 'name'.
 */
function greet(names: readonly string[]): void {
  for (const name of names) {
    console.log(`Hi ${name}`);
  }
}
```

### O(n) Space Example

```java
/**
 * Time Complexity: O(n) - We must touch every element to copy it.
 * Space Complexity: O(n) - We allocate a new array of size 'n'.
 */
function copyArray(names: readonly string[]): string[] {
  const copy = [...names];

  return copy;
}
```

---

**Links:** [Big O - Definition](BIg%20O%20-%20Definition.md) | [Array - Static vs Dynamic Allocation](../20_Data_Structures/Array%20-%20Static%20vs%20Dynamic%20Allocation.md)
