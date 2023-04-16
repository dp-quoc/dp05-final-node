const mongoose = require('mongoose');

const UserGroupSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      length: 255,
    },

    staffs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
    ],

    masters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('UserGroup', UserGroupSchema, 'usergroups');
