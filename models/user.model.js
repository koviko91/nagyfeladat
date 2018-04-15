const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  /* id: {
     type: mongoose.Schema.Types.ObjectId,
     default: new mongoose.Types.ObjectId()
   }, */
  /*  type: {
    type: String,
    enum: ['Html', 'Css', 'JavaScript'],
    required: true,
  }, */
  email: {
    type: String,
    required: true,
  },
  pass: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Methods
UserSchema.method({});

// Static Methods
UserSchema.static({});

module.exports = mongoose.model('User', UserSchema);
