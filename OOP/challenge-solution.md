# 🛒 SmartCart Ecosystem: Solution Code

### 1. Product.js

Handles data encapsulation and static utility methods.

'''javascript
export class Product {
// Private fields definition
#id;
#price;

    constructor(name, price, stock, category) {
        // Generate a random ID between 1 and 100000
        this.#id = Math.floor(Math.random() * 100000);
        this.name = name;
        this.stock = stock;
        this.category = category;

        // Use the setter to initialize price to ensure validation runs
        this.price = price;
    }

    // Getter for ID (Read-only)
    get id() {
        return this.#id;
    }

    // Getter for Price
    get price() {
        return this.#price;
    }

    // Setter for Price with Validation
    set price(value) {
        if (value < 0) {
            throw new Error("Price cannot be negative.");
        }
        this.#price = value;
    }

    getInfo() {
        return `ID: ${this.#id} | Name: ${this.name} | Price: $${this.#price}`;
    }

    // Static Method: Returns a value, does not modify the instance
    static applyDiscount(product, percentage) {
        const discountAmount = product.price * (percentage / 100);
        return product.price - discountAmount;
    }

}
'''

### 2. Cart.js

Manages the logic of adding/removing items and calculating totals using array methods.

'''javascript
export class Cart {
constructor() {
this.items = []; // Stores objects looking like: { product: ProductObj, quantity: 5 }
}

    addProduct(product, quantity) {
        // 1. Stock Check
        if (product.stock < quantity) {
            return false;
        }

        // 2. Check if product is already in cart
        const existingItem = this.items.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            // Store a reference to the product and the specific cart quantity
            this.items.push({ product: product, quantity: quantity });
        }

        return true;
    }

    removeProduct(productId) {
        // Filter out the item with the matching ID
        this.items = this.items.filter(item => item.product.id !== productId);
    }

    findProduct(productId) {
        return this.items.find(item => item.product.id === productId);
    }

    updateQuantity(productId, newQty) {
        const item = this.findProduct(productId);
        if (item) {
            item.quantity = newQty;
        }
    }

    calculateTotal() {
        // Use reduce to sum up (Price * Quantity) for every item
        return this.items.reduce((total, item) => {
            return total + (item.product.price * item.quantity);
        }, 0);
    }

    getReceipt() {
        // Use map to transform objects into strings, then join them with newlines
        return this.items
            .map(item => `- ${item.product.name} x${item.quantity} ($${item.product.price * item.quantity})`)
            .join('\n');
    }

}
'''

### 3. main.js

The entry point that runs the verification script.

'''javascript
import { Product } from './Product.js';
import { Cart } from './Cart.js';

const runSystemCheck = () => {
console.log("⚡ STARTING SMARTCART SYSTEM DIAGNOSTIC ⚡\n");

    // --- STEP 1: CLASS CREATION & ENCAPSULATION ---
    console.log("1. Creating Products...");
    const p1 = new Product("Laptop", 1200, 5, "Electronics");
    const p2 = new Product("T-Shirt", 20, 50, "Clothing");
    const p3 = new Product("Coffee Maker", 80, 10, "Home");

    // Test Private ID (Should not be accessible directly)
    if (p1['#id'] === undefined && p1.id !== undefined) {
        console.log("✅ Success: ID is properly encapsulated.");
    } else {
        console.error("❌ Error: ID encapsulation failed.");
    }

    // --- STEP 2: SETTERS & ERROR HANDLING ---
    console.log("\n2. Testing Validation...");
    try {
        p1.price = -500; // Should trigger error
    } catch (e) {
        console.log(`✅ Success: Caught invalid price error -> "${e.message}"`);
    }

    // --- STEP 3: STATIC METHODS & MATH ---
    console.log("\n3. Testing Static Calculation...");
    const discountedPrice = Product.applyDiscount(p1, 10); // 10% off $1200
    if (discountedPrice === 1080 && p1.price === 1200) {
        console.log("✅ Success: Discount calculated without mutating original price.");
    } else {
        console.error("❌ Error: Static method logic incorrect.");
    }

    // --- STEP 4: CART LOGIC (CREATE & UPDATE) ---
    console.log("\n4. Testing Cart Operations...");
    const myCart = new Cart();

    // Add items
    const addedLaptop = myCart.addProduct(p1, 2); // 2 Laptops
    const addedShirt = myCart.addProduct(p2, 3); // 3 Shirts
    const failAdd = myCart.addProduct(p3, 100);  // Should fail (Stock is only 10)

    console.log(`Added Laptops: ${addedLaptop}`); // Expect true
    console.log(`Added Excessive Coffee: ${failAdd}`); // Expect false

    // Verify Inventory Check
    if (failAdd === false) {
        console.log("✅ Success: Inventory check prevented overselling.");
    }

    // --- STEP 5: ARRAY METHODS (FIND & REDUCE) ---
    console.log("\n5. Testing Totals...");
    // Math: (1200 * 2) + (20 * 3) = 2400 + 60 = 2460
    const total = myCart.calculateTotal();
    console.log(`Cart Total: $${total}`);

    if (total === 2460) {
        console.log("✅ Success: Total calculation is accurate.");
    } else {
        console.error(`❌ Error: Expected 2460, got ${total}`);
    }

    // --- STEP 6: DELETE OPERATION ---
    console.log("\n6. Testing Deletion...");
    const p1Id = p1.id;
    myCart.removeProduct(p1Id); // Remove Laptops

    const found = myCart.findProduct(p1Id);
    if (!found) {
        console.log("✅ Success: Product successfully removed from cart.");
    } else {
        console.error("❌ Error: Product still exists in cart.");
    }

    // --- STEP 7: FORMATTING ---
    console.log("\n7. Final Receipt Generation:");
    // Should show only the T-Shirts now
    console.log(myCart.getReceipt());

    console.log("\n--- 🏁 DIAGNOSTIC COMPLETE ---");

};

runSystemCheck();
'''
