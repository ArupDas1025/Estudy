const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const { connectDB } = require("./config/db"); // 👈 import
// ✅ Check DB before starting server
connectDB();


const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: "http://localhost:4000",
  credentials: true,
}));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Server is running on http://localhost:4500");
});
app.use("/api/auth", require("./routes/authroutes"));
app.use("/api/courses", require("./routes/courseroutes"));
// app.use("/api/user", require("./routes/user.routes"));



app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);