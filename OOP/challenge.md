# 🛒 Project Challenge: "SmartCart Ecosystem"

## 1. The Scenario

You are building the backend logic for an e-commerce inventory system. The system needs to manage products, handle inventory updates, calculate cart totals with complex tax logic, and ensure data integrity using private fields [conversation_history:1].

## 2. Technical Requirements

You must implement the following using **ES6 Modules**.

### A. The `Product` Class (File: `Product.js`)

- **Properties:**
  - `#id`: A private unique identifier (generated automatically in the constructor).
  - `name`: Public string.
  - `#price`: Private number.
  - `stock`: Public integer.
  - `category`: Public string (e.g., 'electronics', 'clothing').
- **Getters/Setters:**
  - `id`: Getter only (read-only).
  - `price`: Getter and Setter.
    - _Validation:_ The setter must throw an error if the new price is negative.
- **Methods:**
  - `getInfo()`: Returns a template literal string: `"ID: [id] | Name: [name] | Price: $[price]"`.
  - **Static Method** `applyDiscount(product, percentage)`: Returns a _new_ price (number) based on the percentage, without modifying the original product.

### B. The `Cart` Class (File: `Cart.js`)

- **Properties:**
  - `items`: An array to store products.
- **Methods (CRUD):**
  - `addProduct(product, quantity)`:
    - If the product exists, update the quantity.
    - If not, push it to the array.
    - _Logic Check:_ Ensure there is enough `stock` in the Product before adding. Return `true` if successful, `false` otherwise.
  - `removeProduct(productId)`: Filters the array to remove the item.
  - `findProduct(productId)`: Returns the product object or `undefined`.
  - `updateQuantity(productId, newQty)`: Updates the specific item's quantity.
- **Advanced Calculation:**
  - `calculateTotal()`: Uses `.reduce()` to calculate the total price of all items.
  - `getReceipt()`: Uses `.map()` and `.join()` to return a string list of all items formatted neatly.

### C. The Main Script (File: `main.js`)

- Import your classes.
- Execute the verification script provided below.

---

## 3. Verification Script

Copy this code into your `main.js` file. This script simulates a user interacting with your system. If your logic is correct, the output will match the expected logs [conversation_history:1].

```javascript
// main.js
// 1. IMPORT YOUR MODULES HERE
// import { Product } from './Product.js';
// import { Cart } from './Cart.js';

const runSystemCheck = () => {
  console.log("⚡ STARTING SMARTCART SYSTEM DIAGNOSTIC ⚡\n")

  // --- STEP 1: CLASS CREATION & ENCAPSULATION ---
  console.log("1. Creating Products...")
  const p1 = new Product("Laptop", 1200, 5, "Electronics")
  const p2 = new Product("T-Shirt", 20, 50, "Clothing")
  const p3 = new Product("Coffee Maker", 80, 10, "Home")

  // Test Private ID (Should not be accessible directly)
  if (p1["#id"] === undefined && p1.id !== undefined) {
    console.log("✅ Success: ID is properly encapsulated.")
  } else {
    console.error("❌ Error: ID encapsulation failed.")
  }

  // --- STEP 2: SETTERS & ERROR HANDLING ---
  console.log("\n2. Testing Validation...")
  try {
    p1.price = -500 // Should trigger error
  } catch (e) {
    console.log(`✅ Success: Caught invalid price error -> "${e.message}"`)
  }

  // --- STEP 3: STATIC METHODS & MATH ---
  console.log("\n3. Testing Static Calculation...")
  const discountedPrice = Product.applyDiscount(p1, 10) // 10% off $1200
  if (discountedPrice === 1080 && p1.price === 1200) {
    console.log(
      "✅ Success: Discount calculated without mutating original price.",
    )
  } else {
    console.error("❌ Error: Static method logic incorrect.")
  }

  // --- STEP 4: CART LOGIC (CREATE & UPDATE) ---
  console.log("\n4. Testing Cart Operations...")
  const myCart = new Cart()

  // Add items
  const addedLaptop = myCart.addProduct(p1, 2) // 2 Laptops
  const addedShirt = myCart.addProduct(p2, 3) // 3 Shirts
  const failAdd = myCart.addProduct(p3, 100) // Should fail (Stock is only 10)

  console.log(`Added Laptops: ${addedLaptop}`) // Expect true
  console.log(`Added Excessive Coffee: ${failAdd}`) // Expect false

  // Verify Inventory Check
  if (failAdd === false) {
    console.log("✅ Success: Inventory check prevented overselling.")
  }

  // --- STEP 5: ARRAY METHODS (FIND & REDUCE) ---
  console.log("\n5. Testing Totals...")
  // Math: (1200 * 2) + (20 * 3) = 2400 + 60 = 2460
  const total = myCart.calculateTotal()
  console.log(`Cart Total: $${total}`)

  if (total === 2460) {
    console.log("✅ Success: Total calculation is accurate.")
  } else {
    console.error(`❌ Error: Expected 2460, got ${total}`)
  }

  // --- STEP 6: DELETE OPERATION ---
  console.log("\n6. Testing Deletion...")
  const p1Id = p1.id
  myCart.removeProduct(p1Id) // Remove Laptops

  const found = myCart.findProduct(p1Id)
  if (!found) {
    console.log("✅ Success: Product successfully removed from cart.")
  } else {
    console.error("❌ Error: Product still exists in cart.")
  }

  // --- STEP 7: FORMATTING ---
  console.log("\n7. Final Receipt Generation:")
  // Should show only the T-Shirts now
  console.log(myCart.getReceipt())

  console.log("\n--- 🏁 DIAGNOSTIC COMPLETE ---")
}

runSystemCheck()
```
