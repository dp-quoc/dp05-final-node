const mongoose = require('mongoose');
const { Role } = require('../constants/enum');

const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      length: 255,
    },

    phone: {
      type: String,
    },

    email: {
      type: String,
      unique: true,
      index: true,
    },

    password: {
      type: String,
    },

    IDstaff: {
      type: String,
    },

    avatar: {
      type: String,
    },

    groupsId: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'usergroups',
      },
    ],

    role: {
      type: String,
      enum: Object.values(Role),
      default: Role.STAFF,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', UserSchema, 'users');
