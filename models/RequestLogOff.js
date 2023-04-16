const mongoose = require('mongoose');
const { RequestSTT } = require('../constants/enum');

const RequestLogOffSchema = new mongoose.Schema(
  {
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

    logofftype: {
      type: String,
    },

    contentlog: {
      type: String,
    },

    quantity: {
      type: Number,
    },

    reason: {
      type: String,
    },

    status: {
      type: String,
      enum: Object.values(RequestSTT),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'RequestLogOff',
  RequestLogOffSchema,
  'requestlogoffs'
);
