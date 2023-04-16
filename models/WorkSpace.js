const mongoose = require('mongoose');

const WorkSpaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },

    hrchannel: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'channels',
      },
    ],

    dayoffchannel: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'channels',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('WorkSpace', WorkSpaceSchema, 'workspaces');
