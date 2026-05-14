const { pool } = require("../config/db"); // ✅
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  console.log("Register...");

  const { name, email, password } = req.body;

  // ✅ Validate input
  if (!name || !email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    // ✅ Check if email already exists
    const existingUser = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingUser.rows.length > 0) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // ✅ Hash password
    const hashed = await bcrypt.hash(password, 10);

    // ✅ Insert new user
    await pool.query(
      "INSERT INTO users(name, email, password) VALUES($1,$2,$3)",
      [name, email, hashed]
    );

    res.json({ message: "Registered successfully" });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

exports.login = async (req, res) => {
  console.log("Login...");

  const { email, password } = req.body;

  try {
    const user = await pool.query(
      "SELECT * FROM users WHERE email=$1",
      [email]
    );

    if (user.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const userData = user.rows[0];

    const valid = await bcrypt.compare(password, userData.password);

    if (!valid) {
      return res.status(400).json({ message: "Wrong password" });
    }

    // ✅ include role in token (optional but good)
    const token = jwt.sign(
      { id: userData.id, role: userData.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // ✅ send cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, sameSite: "lax",
    });

    // ✅ IMPORTANT: send role to frontend
    res.json({
      message: "Login successful",
      token,
      role: userData.role   // 👈 THIS WAS MISSING
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};