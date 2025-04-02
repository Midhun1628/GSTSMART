import db from "../config/db.js";

export class ProductModel {
  static async getAllProducts() {
    const [rows] = await db.query("SELECT * FROM products");
    return rows;
  }

  static async getProductById(product_id) {
    const [rows] = await db.query("SELECT * FROM products WHERE product_id = ?", [product_id]);
    return rows[0];
  }

  static async createProduct(name, description, price, stock) {
    const [result] = await db.query(
      "INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)",
      [name, description, price, stock]
    );
    return result.insertId;
  }

  static async updateProduct(product_id, name, description, price, stock) {
    await db.query(
      "UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE product_id = ?",
      [name, description, price, stock, product_id]
    );
  }

  static async deleteProduct(product_id) {
    await db.query("DELETE FROM products WHERE product_id = ?", [product_id]);
  }
}
