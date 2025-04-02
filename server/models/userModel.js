import db from "../config/db.js";

export class UserModel {
  static async findByEmail(email) {
    const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
  }

  static async createUser(username, email, password, first_name, last_name, role_id) {
    const [result] = await db.query(
      "INSERT INTO users (username, email, password, first_name, last_name, role_id) VALUES (?, ?, ?, ?, ?, ?)",
      [username, email, password, first_name, last_name, role_id]
    );
    return result.insertId;
  }

  static async getUserById(user_id) {
    const [rows] = await db.query("SELECT * FROM users WHERE user_id = ?", [user_id]);
    return rows[0];
  }

  static async updateUser(user_id, username, email, first_name, last_name, role_id) {
    await db.query(
      "UPDATE users SET username = ?, email = ?, first_name = ?, last_name = ?, role_id = ? WHERE user_id = ?",
      [username, email, first_name, last_name, role_id, user_id]
    );
  }

  static async deleteUser(user_id) {
    await db.query("DELETE FROM users WHERE user_id = ?", [user_id]);
  }
}
