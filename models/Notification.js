const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },

    to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },

    logoff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'requestlogoffs',
    },

    description: {
      type: String,
    },

    chanel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'workspaces',
    },

    isSeen: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  'Notification',
  NotificationSchema,
  'notifications'
);
