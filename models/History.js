const mongoose = require('mongoose');
const { TypeHistory } = require('../constants/enum');

const HistorySchema = new mongoose.Schema(
  {
    idlogoff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'requestlogoffs',
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },

    masters: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
    ],

    approval: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
      },
    ],

    logofffrom: {
      type: Date,
    },

    logoffto: {
      type: Date,
    },

    reason: {
      type: String,
    },

    comment: {
      type: String,
    },

    typelog: {
      type: String,
      enum: Object.values(TypeHistory),
    },

    contentlog: {
      type: String,
    },

    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('History', HistorySchema, 'histories');
