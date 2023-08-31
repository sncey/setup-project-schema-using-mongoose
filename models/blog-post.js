const mongoose = require('mongoose');

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  tags: [
    {
      type: String,
      required: true
    }
  ],
  authorRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  }
});

const BlogPost = mongoose.model('BlogPost', blogPostSchema);

module.exports = BlogPost;
