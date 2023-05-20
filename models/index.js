const mongoose = require("mongoose");
const thoughtSchema = require("./Thought");
const userSchema = require("./User");

const Thought = mongoose.model("Thought", thoughtSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Thought,
  User,
};
