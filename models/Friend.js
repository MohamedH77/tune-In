const mongoose = require("mongoose");

const friendSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  friendhipDuration: String,
});


// Add a virtual property for formatted created_at date
friendSchema.virtual("formattedCreatedAt").get(function () {
  return this.created_at.toLocaleString();
});


const Friend = mongoose.model("Friend", friendSchema);

module.exports = Friend;

