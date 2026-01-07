# Exercise - Merge Sorted Arrays

**Source:** [[80_Sources/ZTM - Ch 6]]
**MOC:** [[01_System/🗺️ MOC - Data Structures]]

## Problem

Merge two sorted arrays into a single, larger sorted array.

- **Input A:** `[0, 3, 4, 31]`
- **Input B:** `[4, 6, 30]`
- **Output:** `[0, 3, 4, 4, 6, 30, 31]`

## Implementation

This approach uses a two-pointer strategy to compare elements from both arrays sequentially.

```ts
/**
 * Merges two sorted arrays into a single sorted array.
 * Time Complexity: O(n + m) - We visit each element exactly once.
 * Space Complexity: O(n + m) - We create a new array to hold all elements.
 */
function mergeSortedArrays<T>(array1: readonly T[], array2: readonly T[]): T[] {
  // Input Validation / Edge Cases
  if (array1.length === 0) return [...array2]
  if (array2.length === 0) return [...array1]

  const mergedArray: T[] = []
  let i = 0
  let j = 0

  // We loop until we've exhausted both arrays
  while (i < array1.length || j < array2.length) {
    const item1 = array1[i]
    const item2 = array2[j]

    /**
     * Logic: Push from array1 if:
     * 1. array2 is exhausted (item2 is undefined)
     * 2. array1 still has items AND item1 is smaller than item2
     */
    if (item2 === undefined || (item1 !== undefined && item1 < item2)) {
      mergedArray.push(item1)
      i++
    } else {
      mergedArray.push(item2)
      j++
    }
  }

  return mergedArray
}

// Example usage:
const result = mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])
console.log(result) // [0, 3, 4, 4, 6, 30, 31]
```

---

**Links:** [20_Data_Structures/Array - Static vs Dynamic Allocation](../20_Data_Structures/Array%20-%20Static%20vs%20Dynamic%20Allocation.md)
