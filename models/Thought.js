const mongoose = require("mongoose");
const ReactionSchema = require("./Reaction");
const { Reaction } = require(".");


const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    // reactions: {
    //   type: String,
    //   ref: "Reaction",

    // }
  },
  {
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
    id: false,
    timestamps: true,
  }
);

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;


