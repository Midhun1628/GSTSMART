import bcrypt from "bcryptjs";
import { UserModel } from "../models/userModel.js";
import { generateAccessToken, generateRefreshToken } from "../config/jwt.js";


export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findByEmail(email);
    if (!user) return res.status(401).json({ message: "Invalid email " });

 
    if(password != user.password) return res.status(401).json({ message: "Invalid password" });
 

    const accessToken = generateAccessToken(user);

    const refreshToken = generateRefreshToken(user);

    res.json({ accessToken,  refreshToken });
  } catch (error) {
    res.status(500).json({ error:error.message});
  }
};

export const createUser = async (req, res) => {
  try {
    const { username,email,password,first_name,last_name } = req.body;

    console.log(username,email,password,first_name,last_name);
    const userExists = await UserModel.findByEmail(email);
    if (userExists) return res.status(400).json({ message: "User already exists" });

    // const hashedPassword = await bcrypt.hash(password, 10);
    const userId = await UserModel.createUser(username,email,password,first_name,last_name);

    res.json({ message: "User registered successfully", userId });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};