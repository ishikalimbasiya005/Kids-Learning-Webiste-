const express = require("express");
const router = express.Router();
const User = require("../models/User");

const ADMIN_USERNAME = "weadmin";
const ADMIN_PASSWORD = "Admin@07";

// Login Code
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    req.session.isAdmin = true; //yaha session set ho raha hai
    return res.status(200).json({ message: "Login successful" });
  }

  return res.status(401).json({ error: "Invalid credentials" });
});

// Seession Check 
router.get("/check", (req, res) => {
  if (req.session.isAdmin) {
    return res.status(200).json({ isAdmin: true });
  }
  return res.status(403).json({ isAdmin: false });
});

// Logout Code
router.post("/logout", (req, res) => {
  req.session.destroy(); //yaha session destroy ho raha hai
  res.status(200).json({ message: "Logged out successfully" });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;

  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ error: "Password must be at least 6 characters, with uppercase, lowercase, number, and special character" });
  }

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    req.session.isAdmin = true;
    return res.status(200).json({ message: "Login successful" });
  }

  return res.status(401).json({ error: "Invalid credentials" });
});


//  Get all users 
router.get("/users", async (req, res) => {
  if (!req.session.isAdmin) {
    return res.status(403).json({ error: "Not authorized" });
  }

  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Error fetching users" });
  }
});

module.exports = router;
