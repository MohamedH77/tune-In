const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
  username: String,
  friendhipDuration: String,
  friendSince: Date,
  id: false,
  // timestamps: true,
});


// Add a virtual property for formatted created_at date
friendSchema.virtual("formattedCreatedAt").get(function () {
  return this.created_at.toLocaleString();
});


const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;

