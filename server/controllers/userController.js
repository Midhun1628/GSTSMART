import { UserModel } from "../models/userModel.js";
import db from "../config/db.js";

export const getAllUsers = async (req, res) => {
  try {
    const [users] = await db.query("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, email, password, first_name, last_name, role_id } = req.body;
    const userExists = await UserModel.findByEmail(email);
    
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const userId = await UserModel.createUser(username, email, password, first_name, last_name, role_id);
    
    res.json({ message: "User created successfully", userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { username, email, first_name, last_name, role_id } = req.body;

    await UserModel.updateUser(user_id, username, email, first_name, last_name, role_id);

    res.json({ message: "User updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    
    await UserModel.deleteUser(user_id);

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
