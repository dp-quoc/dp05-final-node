import mongoose from 'mongoose';
import { Role } from '../constants/enum';
const Schema = mongoose.Schema;

const UserSchema = new Schema(
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

export const User = mongoose.model('users', UserSchema);
