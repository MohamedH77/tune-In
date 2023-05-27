const mongoose = require("mongoose");
const { users, thoughts, friends } = require("./data");
const { User, Thought, Friend } = require("../models");

const db = require("../config/connection");

async function seedData() {
  try {
    // Seed user data
    await User.deleteMany();
    const createdUsers = await User.insertMany(users);
    console.log(`${createdUsers.length} users seeded`);

    // Seed thought data
    await Thought.deleteMany();
    const createdThoughts = await Thought.insertMany(thoughts);
    console.log(`${createdThoughts.length} thoughts seeded`);

    // Seed friend data
    await Friend.deleteMany();
    const createdFriends = await Friend.insertMany(friends);
    console.log(`${createdFriends.length} friends seeded`);

    // Disconnect from MongoDB
    await mongoose.disconnect();
    console.log("Data seeding completed");
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

seedData();
