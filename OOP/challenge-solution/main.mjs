import { Cart } from "./Cart.mjs"
import { Product } from "./Product.mjs"

const runSystemCheck = () => {
  console.log("⚡ STARTING SMARTCART SYSTEM DIAGNOSTIC ⚡\n")

  // --- HELPER FUNCTION FOR LOGGING ---
  const printQuickList = cart => {
    const list = cart.items
      .map(item => `${item.product.name} (x${item.quantity})`)
      .join(", ")
    console.log(`   🛒 Current Items: [ ${list || "Empty"} ]`)
  }

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

  // Add items and log results
  console.log("-> Adding 2 Laptops...")
  const addedLaptop = myCart.addProduct(p1, 2)
  printQuickList(myCart) // <--- LOGGING

  console.log("-> Adding 3 T-Shirts...")
  const addedShirt = myCart.addProduct(p2, 3)
  printQuickList(myCart) // <--- LOGGING

  console.log("-> Attempting to add 100 Coffee Makers (Exceeds stock)...")
  const failAdd = myCart.addProduct(p3, 100)
  printQuickList(myCart) // <--- LOGGING (Should not change)

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

  console.log("-> Removing Laptops...")
  myCart.removeProduct(p1Id)
  printQuickList(myCart) // <--- LOGGING (Laptops should be gone)

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
