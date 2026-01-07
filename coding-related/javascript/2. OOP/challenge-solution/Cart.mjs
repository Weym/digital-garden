export class Cart {
  constructor() {
    this.items = [] // Stores objects looking like: { product: ProductObj, quantity: 5 }
  }

  addProduct(product, quantity) {
    // 1. Stock Check
    if (product.stock < quantity) {
      return false
    }

    // 2. Check if product is already in cart
    const existingItem = this.items.find(item => item.product.id === product.id)

    if (existingItem) {
      existingItem.quantity += quantity
    } else {
      // Store a reference to the product and the specific cart quantity
      this.items.push({ product: product, quantity: quantity })
    }

    return true
  }

  removeProduct(productId) {
    // Filter out the item with the matching ID
    this.items = this.items.filter(item => item.product.id !== productId)
  }

  findProduct(productId) {
    return this.items.find(item => item.product.id === productId)
  }

  updateQuantity(productId, newQty) {
    const item = this.findProduct(productId)
    if (item) {
      item.quantity = newQty
    }
  }

  calculateTotal() {
    // Use reduce to sum up (Price * Quantity) for every item
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity
    }, 0)
  }

  getReceipt() {
    // Use map to transform objects into strings, then join them with newlines
    return this.items
      .map(
        item =>
          `- ${item.product.name} x${item.quantity} ($${
            item.product.price * item.quantity
          })`,
      )
      .join("\n")
  }
}
