# Implementation - Custom Array Class

## The Goal

Understand how a dynamic array handles memory and resizing by building one from scratch using a static array as the base.

### Java Implementation (Dynamic Logic)

```ts
\*
- A custom implementation of a dynamic array.
- Time Complexities:
- - Access: O(1)
- - Push/Pop: O(1)
- - Delete/Shift: O(n)
    */
    class MyArray<T> {
    public length: number;
    private data: Record<number, T>;

constructor() {
this.length = 0;
this.data = {};
}

public get(index: number): T | undefined {
return this.data[index];
}

public push(item: T): number {
this.data[this.length] = item;
this.length++;
return this.length;
}

public pop(): T | undefined {
if (this.length === 0) return undefined;

    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;

}

public delete(index: number): T | undefined {
const item = this.data[index];
this.shiftItems(index);
return item;
}

private shiftItems(index: number): void {
// O(n) - We must re-index all subsequent items
for (let i = index; i < this.length - 1; i++) {
this.data[i] = this.data[i + 1];
}
delete this.data[this.length - 1];
this.length--;
}
}

// Usage with Type Safety
const newArray = new MyArray<string>();

newArray.push('hi');
newArray.push('you');
newArray.push('!');
newArray.pop(); // Removes '!'
newArray.delete(0); // Removes 'hi', shifts 'you' to index 0

console.log(newArray);
```

### Complexity of Custom Methods

- `max()`: $O(n)$ - requires a full pass to find the largest value.
- `reverse()`: $O(n)$ - requires swapping elements up to the midpoint.
- `intersect()`: $O(n)$ - if using a Hash Set for lookups.

---

**Links:** [20_Data_Structures/Array - Static vs Dynamic Allocation](../20_Data_Structures/Array%20-%20Static%20vs%20Dynamic%20Allocation.md)
