const Friend = require("../models/Friend");

const getAllFriend = async (req, res) => {
  console.log("Getting all friends...");
  try {
    const friends = await Friend.find();
    console.log("All friends retrieved:", friends);
    res.status(200).json({ status: "success", payload: friends });
  } catch (err) {
    console.error("Error getting all friends:", err);
    res.status(500).send({ error: err.message });
  }
};

const getFriendById = async (req, res) => {
  console.log(`Getting friend by id: ${req.params.id}`);
  try {
    const friend = await Friend.findById(req.params.id);
    console.log("Friend retrieved:", friend);
    res.status(200).json({ status: "success", payload: friend });
    if (!friend) {
      res.status(404).send({ error: "Friend not found" });
    }
  } catch (err) {
    console.error("Error getting friend by id:", err);
    res.status(500).send({ error: err.message });
  }
  
};

const deleteFriendById = async (req, res) => {
  try {
    const friend = await Friend.findById(req.params.id);
    if (!friend) {
      return res.status(404).json({ error: "Friend not found" });
    }
    await Friend.findByIdAndDelete(req.params.id);
    res.status(200).json({ status: "success", message: "Friend deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting friend" });
  }
};

module.exports = {
  getAllFriend,
  getFriendById,
  deleteFriendById,
};
