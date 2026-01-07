# Problem Solving - String Manipulation

**MOC:** [01_System/🗺️ MOC - Methodology](../01_System/MOC%20-%20Methodology.md)

## The Core Rule

**Treat string questions as array questions.** In most technical interviews, strings are simply arrays of characters. If you need to manipulate a string (reverse, sort, or filter), the most efficient path is often:

1. Convert String $\rightarrow$ Array.
2. Perform Array operations.
3. Join Array $\rightarrow$ String.

## Common Patterns

- **Reverse a String:** Use a "Two-Pointer" approach or built-in methods.
- **Merge Sorted Arrays:** Use two pointers to compare elements from both arrays simultaneously.

'''javascript
// Modern JS Reverse
const reverse = str => [...str].reverse().join('');
'''

---

**Links:** [20_Data_Structures/Array - Static vs Dynamic Allocation](../20_Data_Structures/Array%20-%20Static%20vs%20Dynamic%20Allocation.md)
