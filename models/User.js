const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String, 
    required: true
  },
  thought: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Thought"
  }
},
{
  toJSON: {
    virtuals: true,
  },
  id: false,
});

userSchema.virtual('fullname').get(function () {
  return `${this.fname} ${this.lname}` ;
});

const User = mongoose.model('User', userSchema);

module.exports = User;

