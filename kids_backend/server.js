const express = require("express");
const session = require("express-session");
const mongoose = require("./config/db");
const feedbackRoutes = require("./routes/feedback");
const adminRoutes = require("./routes/admin");
const booksRouter = require("./routes/books");
const authRoutes = require("./routes/auth");
const cors = require("cors");
const searchRoutes = require("./routes/search");
const usersRoutes = require("./routes/users");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Session Code
app.use(
  session({
    secret: process.env.SESSION_SECRET || "mySecretKey",
    resave: false,
    saveUninitialized: false,
     cookie: {
      httpOnly: true,
      secure: false, 
      maxAge: 1000 * 60 * 60, // 1 hour
    }, 
  })
);

app.use("/feedback", feedbackRoutes);
app.use("/admin", adminRoutes);
app.use("/books", booksRouter);
app.use("/auth", authRoutes);
app.use("/api/search", searchRoutes);
app.use("/users", usersRoutes);

// Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
