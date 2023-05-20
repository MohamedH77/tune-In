const { Thought } = require("../models");

const getAllThoughts = async () => {
  try {
    const thoughts = await Thought.find();
    return thoughts;
  } catch (err) {
    throw new Error("Error getting all thoughts");
  }
};

const getThoughtById = async (id) => {
  try {
    const thought = await Thought.findById(id);
    return thought;
  } catch (err) {
    throw new Error("Error getting thought by id");
  }
};

const createThought = async (data) => {
  try {
    const thought = await Thought.create(data);
    return thought;
  } catch (err) {
    throw new Error("Error creating a new thought");
  }
};

const updateThoughtById = async (id) => {
  try {
    const thought = await Thought.findByIdAndUpdate(id, data, { new: true });
    return thought;
  } catch (err) {
    throw new Error("Error updating thoughts by id");
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
};
