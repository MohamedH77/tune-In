const { Thought } = require("../models");

const getAllThoughts = async () => {
  console.log("Getting all thoughts...");
  try {
    const thoughts = await Thought.find();
    console.log("All thoughts retrieved:", thoughts);
    return thoughts;
  } catch (err) {
    console.error("Error getting all thoughts:", err);
    throw new Error("Error getting all thoughts");
  }
};

const getThoughtById = async (id) => {
  console.log(`Getting thought by id: ${id}`);
  try {
    const thought = await Thought.findById(id);
    console.log("Thought retrieved:", thought);
    return thought;
  } catch (err) {
    console.error("Error getting thought by id:", err);
    throw new Error("Error getting thoughts by id");
  }
};

const createThought = async (data) => {
  console.log("Creating a new thought...");
  try {
    const { reactions, ...thoughtData } = data;
    const thought = new Thought({
      ...thoughtData,
      reactions, // Pass the reactions array from the request payload
    });
    const newThought = await thought.save();
    console.log("New thought created:", newThought);
    return newThought;
  } catch (err) {
    console.error("Error creating a new thought:", err);
    throw new Error("Error creating a new thought");
  }
};

const updateThoughtById = async (id, data) => {
  console.log(`Updating thought by id: ${id}`);
  try {
    const { reactions, ...thoughtData } = data;
    const thought = await Thought.findByIdAndUpdate(
      id,
      {
        ...thoughtData,
        reactions, // Pass the updated reactions array from the request payload
      },
      { new: true }
    );
    console.log("Thought updated:", thought);
    return thought;
  } catch (err) {
    console.error("Error updating thought by id:", err);
    throw new Error("Error updating thought by id");
  }
};


module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
};
