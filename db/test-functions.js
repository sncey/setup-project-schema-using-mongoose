const ObjectId = require("mongodb").ObjectId;

const Author = require("../models/author");
const BlogPost = require("../models/blog-post");

module.exports = {
  isValidObjectId: function isValidObjectId(id) {
    return ObjectId.isValid(id);
  },
  addAuthor: async function addAuthor(params) {
    const author = params;

    try {
      const newAuthor = await Author.create(author);
      return newAuthor;
    } catch (err) {
      return { message: err };
    }
  },
  getAuthor: async function getAuthor(id) {
    const author = await Author.findOne({ _id: new ObjectId(id) });
    return author;
  },
  addBlogPost: async function addBlogPost(params) {
    const blogPost = params;

    try {
      const newBlogPost = await BlogPost.create(blogPost);
      return newBlogPost;
    } catch (err) {
      return { message: err };
    }
  },
  getBlogPost: async function getBlogPost(id) {
    const blogPost = await BlogPost.findOne({
      _id: new ObjectId(id),
    });
    return blogPost;
  },
};
