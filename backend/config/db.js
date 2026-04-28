const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

const connectDB = async () => {
    try {
      const client = await pool.connect();
      console.log("✅ PostgreSQL connected");
      client.release();
    } catch (err) {
      console.error("❌ DB connection failed:", err.message);
      process.exit(1); // stop server if DB fails
    }
  };

  module.exports = { pool, connectDB };