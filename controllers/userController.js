const { User } = require("../models");

const getAllUsers = async () => {
  console.log("Getting all users...");
  try {
    const users = await User.find().populate({ path: "thought" });
    console.log("All users retrieved:", users);
    return users;
  } catch (err) {
    console.error("Error getting all users:", err);
    throw new Error("Error getting all users");
  }
};

const getUserById = async (id) => {
  console.log(`Getting user by id: ${id}`);
  try {
    const user = await User.findById(id).populate({ path: "thought" });
    console.log("User retrieved:", user);
    return user;
  } catch (err) {
    console.error("Error getting user by id:", err);
    throw new Error("Error getting user by id");
  }
};

const createUser = async (data) => {
  console.log("Creating a new user...");
  try {
    const user = await User.create(data);
    console.log("New user created:", user);
    return user;
  } catch (err) {
    console.error("Error creating a new user:", err);
    throw new Error("Error creating a new user");
  }
};

const updateUserById = async (id, data) => {
  console.log(`Updating user by id: ${id}`);
  try {
    const user = await User.findByIdAndUpdate(id, data, { new: true });
    console.log("User updated:", user);
    return user;
  } catch (err) {
    console.error("Error updating user by id:", err);
    throw new Error("Error updating user by id");
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
};
