const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");

const app = express();

// Set up CORS options
const corsOptions = {
  origin: "http://localhost:8081", // Frontend URL (change to production URL later)
  methods: ["GET", "POST"],
  credentials: true, // Allow cookies or authorization headers if needed
};

app.use(cors(corsOptions)); // Apply CORS middleware
app.use(bodyParser.json()); // Parse JSON requests

// Connect to the database
mongoose.connect(
  "mongodb+srv://jedr112900:pas123@cluster0.wtsea.mongodb.net/questboardDB?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

// Register User Endpoint
app.post("/api/user/register", async (req, res) => {
  const { firstName, lastName, age, phoneNumber, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  if (!firstName || !lastName || !age || !phoneNumber || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: "Please fill in all fields" });
  }

  try {
    const newUser = new User({
      firstName,
      lastName,
      age,
      phoneNumber,
      email,
      password,
    });

    await newUser.save(); // Save the new user to the database
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
