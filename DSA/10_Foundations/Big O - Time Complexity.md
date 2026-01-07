# Big O - Time Complexity Classes

This note catalogues the specific growth patterns identified in [[Big O - Definition]].

## O(1) - Constant Time

The execution time does not change regardless of input size.

```ts
function logFirstElement(numbers: number[]): void {
  if (numbers.length > 0) {
    console.log(numbers[0])
  }
}
```

## O(log n) - Logarithmic Time

Extremely scalable. The amount of data to process is halved at every step.

- **Classic Example:** Binary Search.
- **Visual:** As $n$ increases by 10x, the operations only increase by a tiny amount.

## O(n) - Linear Time

The number of operations grows in direct proportion to the input size.

```ts
for (const number of numbers) {
  console.log(number)
}
```

## O(n log n) - Linearithmic Time

This is the "sweet spot" for high-performance sorting algorithms. It occurs when you perform a logarithmic operation ($log\ n$) for every item in your input ($n$).

- **Efficiency:** Much faster than $O(n^2)$ but slower than $O(n)$.
- **Common Examples:**
  - **Merge Sort** and **Quick Sort** (on average).
  - Most built-in language sorting methods (e.g., `Arrays.sort()` in Java or `sort()` in JS).
- **The Visual:** If you double your data, the work slightly more than doubles.

## O(n²) - Quadratic Time

The complexity grows exponentially relative to the input (usually nested loops).

```ts
for (const first of numbers) {
  for (const second of numbers) {
    console.log(`${first}, ${second}`)
  }
}
```

## O(2^n) - Exponential Time

- **Growth:** Operations double with each addition to the input.
- **Occurrence:** Recursive algorithms that solve a problem of size $N$ (e.g., a naive Fibonacci sequence).

## O(n!) - Factorial Time

- **The "Oh No" Notation:** The most expensive growth possible.
- **Occurrence:** Usually happens when you add a nested loop for every single element in the input.

---

**Links:** [[Big O - Rules of Simplification]] | [Searching - Binary Search](../30_Algortihms/Searching%20-%20Binary%20Search.md)
