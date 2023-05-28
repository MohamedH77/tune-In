const { User, Thought} = require("../models");

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


// Delete user by ID
const deleteUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await Thought.deleteMany({ user: req.params.id });
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "User and associated thoughts deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting user and associated thoughts" });
  }
};


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
