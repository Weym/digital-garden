# JS - Reference vs Value

**Source:** [[80_Sources/ZTM - Ch 6]]
**MOC:** [[01_System/🗺️ MOC - JS Specifics]]

## Overview

JavaScript handles data differently based on its type. This is crucial for DSA because it affects how we pass data structures into functions.

### 1. Primitives (Passed by Value)

- **Types:** `string`, `number`, `boolean`, `null`, `undefined`, `symbol`.
- When you assign a primitive to a new variable, JS creates a **copy** of the data.
- **Memory:** Stored on the **Stack**.

### 2. Objects (Passed by Reference)

- **Types:** `objects`, `arrays`, `functions`.
- When you assign an object to a variable, you are storing a **pointer** (reference) to the address where the object lives.
- **Copying:** Copying a reference variable just copies the "address," not the actual data. Both variables point to the same object.
- **Memory:** Stored on the **Heap**.

---

**Links:** [[20_Data_Structures/Array - Static vs Dynamic Allocation]]
