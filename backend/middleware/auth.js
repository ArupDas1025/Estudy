const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    let token = null;

    // ✅ 1. Check cookie first
    if (req.cookies && req.cookies.token) {
      token = req.cookies.token;
    }

    // ✅ 2. Check Authorization header (Bearer token)
    if (!token && req.headers.authorization) {
      const parts = req.headers.authorization.split(" ");

      if (parts.length === 2 && parts[0] === "Bearer") {
        token = parts[1];
      }
    }

    // ❌ No token
    if (!token) {
      return res.status(401).json({ message: "Unauthorized - No token" });
    }

    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ Attach user info to request
    req.user = {
      id: decoded.id,
      role: decoded.role
    };

    next();

  } catch (err) {
    console.error("Auth Error:", err.message);
    return res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
};

module.exports = auth;