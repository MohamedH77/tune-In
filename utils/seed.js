const mongoose = require("mongoose");
const { users, thoughts, friends } = require("./data");
const { User, Thought, Friend } = require("../models");

const db = require("../config/connection");

async function seedData() {
  try {
    // Seed user data
    await User.deleteMany(); // Clear existing user data
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users seeded`);

    // Seed thought data
    await Thought.deleteMany(); // Clear existing thought data
    const createdThoughts = await Thought.insertMany(thoughts);
    console.log(`${createdThoughts.length} thoughts seeded`);

    // Seed friend data
    await Friend.deleteMany(); // Clear existing friend data
    const createdFriends = await Friend.insertMany(friends);
    console.log(`${createdFriends.length} friends seeded`);
    // Update user data with thoughts

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Data seeding completed");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

seedData();
