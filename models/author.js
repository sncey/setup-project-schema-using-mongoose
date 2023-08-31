const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  areasOfExpertise: {
    type: [String],
    default: [],
  },
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;