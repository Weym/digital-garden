# JS - Objects as Arrays

**Source:** [[80_Sources/ZTM - Ch 6]]

## The Implementation Secret

In low-level languages like C, arrays are contiguous blocks of memory. In JavaScript, **Arrays are actually objects** with integer-based keys.

- **Keys as Indexes:** `myArray[0]` is essentially reaching into an object for the key `"0"`.
- **Dynamic Nature:** This is why JS arrays can store mixed types (strings, numbers, objects) and grow dynamically without manual memory management.

## Performance Note

Modern JS engines (V8) optimize "flat" arrays to act like real contiguous memory. However, if you create "holey" or "sparse" arrays (e.g., setting `arr[0]` and then `arr[100]`), the engine reverts to treating it like a standard hash-table object, which is slower.

---

**Links:** [[20_Data_Structures/Array - Static vs Dynamic Allocation]] | [[20_Data_Structures/Hash Table - Collision Handling]]
