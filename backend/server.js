const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const User = require("./models/User");
const PostQuest = require("./models/Quest");

const app = express();

// Set up CORS options
const corsOptions = {
  origin: ["http://localhost:8081"], // Add allowed origins
  methods: ["GET", "POST", "OPTIONS"], // Allow necessary methods
  allowedHeaders: ["Content-Type"], // Allow the Content-Type header
  credentials: true, // Include credentials if needed
};

app.use(cors(corsOptions));
app.use(cors()); // Allow all origins and headers
app.use(bodyParser.json()); // Parse JSON requests
app.use((req, res, next) => {
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).json({});
  }
  next();
});


// Connect to the database
mongoose.connect(
  "mongodb+srv://jedr112900:pas123@cluster0.wtsea.mongodb.net/questboardDB?retryWrites=true&w=majority&appName=Cluster0",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
  console.error("Error connecting to MongoDB:", error);
});

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

// Create Quest Endpoint
app.post("/api/user/quests", async (req, res) => {
  const { description, category, deadline, amount, paymentMethod, createdBy } = req.body;



  try {
    const newQuest = new PostQuest({
      description,
      category,
      deadline,
      amount,
      paymentMethod,
      createdBy,
    });

    await newQuest.save(); // Save the quest to the database
    res.status(201).json({ message: "Quest created successfully", quest: newQuest });
  } catch (error) {
    res.status(500).json({ message: "Error creating quest", error: error.message });
  }
});

// Fetch All Quests Endpoint
app.get("/api/user/quests", async (req, res) => {
  try {
    const quests = await PostQuest.find().populate("createdBy", "firstName lastName");
    res.status(200).json(quests);
  } catch (error) {
    res.status(500).json({ message: "Error fetching quests", error: error.message });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
