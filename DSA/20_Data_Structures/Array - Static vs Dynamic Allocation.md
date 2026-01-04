# Array - Static vs Dynamic Allocation

**MOC:** [01_System/🗺️ MOC - Data Structures](../01_System/MOC%20-%20Data%20Structures.md)

## Overview

Arrays store items **sequentially** in memory. Because they are contiguous, we can use math to access any index in $O(1)$ time.

### Static Arrays

- **Fixed Size:** You must specify the number of elements ahead of time.
- **Memory:** If the guess is too high, memory is wasted. If too low, it overflows.

### Dynamic Arrays

- **Resizing:** When the array fills up, it automatically creates a new, larger array (usually 50%–100% larger) and copies the old elements over.
- **Performance Hit:** While `append` is usually $O(1)$, it becomes $O(n)$ during a resize operation (Copying $n$ elements).

- JAvaScript (and Python) automatically allocate memory according to the increase in size.

## Big O Complexity

| Operation      | Time Complexity | Note                                     |
| :------------- | :-------------- | :--------------------------------------- |
| Lookup (Index) | $O(1)$          | Direct memory access.                    |
| Lookup (Value) | $O(n)$          | Must iterate to find item.               |
| Insert         | $O(n)$          | Requires shifting items to the right.    |
| Delete         | $O(n)$          | Requires shifting items to the left.     |
| Push (End)     | $O(1)$          | $O(n)$ only when resizing dynamic array. |

---

**Links:** [10_Foundations/Big O - Time Complexity](../10_Foundations/Big%20O%20-%20Time%20Complexity.md) | [40_Methodology/Problem Solving - String Manipulation](../60_Exercise_Bank/Problem%20Solving%20-%20String%20Manipulation.md)
