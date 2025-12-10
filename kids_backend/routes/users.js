const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Get all users (admin only)
router.get("/", async (req, res) => {
  if (!req.session.isAdmin) return res.status(403).json({ error: "Not authorized" });
  const users = await User.find().select("-password").sort({ createdAt: -1 });
  res.json(users);
});

module.exports = router;
