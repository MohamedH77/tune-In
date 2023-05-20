const { Thought } = require("../models");

const getAllThoughts = async () => {
  try {
    const groups = await Thought.find();
    return groups;
  } catch (err) {
    throw new Error("Error getting all groups");
  }
};

const getThoughtById = async (id) => {
  try {
    const group = await Thought.findById(id);
    return group;
  } catch (err) {
    throw new Error("Error getting group by id");
  }
};

const createThought = async (data) => {
  try {
    const group = await Thought.create(data);
    return group;
  } catch (err) {
    throw new Error("Error creating a new group");
  }
};

const updateThoughtById = async (id) => {
  try {
    const group = await Thought.findByIdAndUpdate(id, data, { new: true });
    return group;
  } catch (err) {
    throw new Error("Error updating group by id");
  }
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
};
