const mongoose = require("mongoose");
const { users, thoughts } = require("./data");
const User = require("../models/user");
const Thought = require("../models/thought");

async function seedData() {
  try {
    // Connect to MongoDB
    await mongoose.connect("mongodb://localhost:27017/mydatabase", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Seed user data
    await User.deleteMany(); // Clear existing user data
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users seeded`);

    // Seed thought data
    await Thought.deleteMany(); // Clear existing thought data
    const createdThoughts = await Thought.insertMany(thoughts);
    console.log(`${createdThoughts.length} thoughts seeded`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Data seeding completed");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

seedData();
