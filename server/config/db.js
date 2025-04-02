import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Function to test the database connection
const testDBConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log("✅ Database connection successful!");
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    console.error("❌ Database connection failed:", error.message);
  }
};

// Call the function to test connection
testDBConnection();

export default pool;
