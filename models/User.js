const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },

  birthday: {
    type: Date,
    // required: true,
  },

  avatar: {
    type: String,
  },

  gender: {
    type: Boolean,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  // admin, user, manager
  role: {
    type: String,
    default: "user",
    required: true,
  },

  dateCreate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

module.exports = mongoose.model("User", UserSchema, "users");
