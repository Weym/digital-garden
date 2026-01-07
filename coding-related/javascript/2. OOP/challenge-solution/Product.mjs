export class Product {
  // Private fields definition
  #id
  #price

  constructor(name, price, stock, category) {
    // Generate a random ID between 1 and 100000
    this.#id = Math.floor(Math.random() * 100000)
    this.name = name
    this.stock = stock
    this.category = category

    // Use the setter to initialize price to ensure validation runs
    this.price = price
  }

  // Getter for ID (Read-only)
  get id() {
    return this.#id
  }

  // Getter for Price
  get price() {
    return this.#price
  }

  // Setter for Price with Validation
  set price(value) {
    if (value < 0) {
      throw new Error("Price cannot be negative.")
    }
    this.#price = value
  }

  getInfo() {
    return `ID: ${this.#id} | Name: ${this.name} | Price: $${this.#price}`
  }

  // Static Method: Returns a value, does not modify the instance
  static applyDiscount(product, percentage) {
    const discountAmount = product.price * (percentage / 100)
    return product.price - discountAmount
  }
}
