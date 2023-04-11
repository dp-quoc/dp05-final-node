const mongoose = require("mongoose");

const Request = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Tag", TagSchema, "tags");
