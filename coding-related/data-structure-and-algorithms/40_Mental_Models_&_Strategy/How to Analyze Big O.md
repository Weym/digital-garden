# How to Analyze Big O

**MOC:** [01_System/🗺️ MOC - Methodology](../01_System/MOC%20-%20Methodology.md)

## The Step-by-Step Workflow

1. **Identify the Inputs:** Are there multiple collections? (Rule: Different terms for different inputs).
2. **Analyze the Operations:**
   - `+` for steps that happen in order (One loop after another).
   - `*` for steps that are nested (A loop inside a loop).
3. **Apply the Rule Book:**
   - **Rule 1: Always Worst Case.** Assume the item is at the very end.
   - **Rule 2: Remove Constants.** $O(3 + 4n) \rightarrow O(n)$.
   - **Rule 3: Different Variables.** Two separate arrays = $O(a + b)$.
   - **Rule 4: Drop Non-Dominants.** $O(n + n^2) \rightarrow O(n^2)$.

## Real-World Cost Cheat Sheet

| Operation                           | Time Complexity                           |
| :---------------------------------- | :---------------------------------------- |
| `array.push()` / `array.pop()`      | $O(1)$                                    |
| `array.shift()` / `array.unshift()` | $O(n)$ (Requires re-indexing)             |
| `array[index]`                      | $O(1)$                                    |
| `string.length`                     | $O(1)$ (In JS/Java, stored as a property) |
