const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['new', 'started', 'finished', 'deleted'],
    default: 'new',
  },
  name: {
    type: String,
    required: true,
  },
  userId: {
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
TodoSchema.method({});

// Static Methods
TodoSchema.static({});

module.exports = mongoose.model('Todo', TodoSchema);
