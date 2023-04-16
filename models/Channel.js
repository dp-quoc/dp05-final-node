const mongoose = require('mongoose');

const ChannelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    slackId: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Channel', ChannelSchema, 'channels');
