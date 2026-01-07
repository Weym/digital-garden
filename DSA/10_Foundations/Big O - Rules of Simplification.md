# Big O - Rules of Simplification

When calculating complexity for algorithms in [Algorithms](../01_System/MOC%20-%20Algorithms.md), use these rules to arrive at the final [Big O - Definition](BIg%20O%20-%20Definition.md).

### Rule 1: Worst Case

We always assume the worst-case scenario (e.g., the item we are searching for is the last one in the array).

### Rule 2: Remove Constants

We care about the trend, not the specific number.

- $O(2n) \rightarrow O(n)$
- $O(n/2) \rightarrow O(n)$

### Rule 3: Different Terms for Different Inputs

If an algorithm takes two different arrays as input, we must use different variables.

```ts
// Complexity: O(a + b)
function log(arrA: number[], arrB: number[]): void {
    for (const val of arrA) { ... }
    for (const val of arrB) { ... }
}
```

### Rule 4: Drop Non-Dominant Terms

Only keep the most expensive growth factor.

- $O(n + n^2) \rightarrow O(n^2)$

---

**Links:** [Big O - Time Complexity](Big%20O%20-%20Time%20Complexity.md)
