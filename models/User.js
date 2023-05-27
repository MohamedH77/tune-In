const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      minlength: 1,
      maxlength: 7,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    thought: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Thought",
    },
    friend: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Friend",
    },
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



const User = mongoose.model("User", userSchema);

module.exports = User;

//  reactions: [ReactionSchema],
