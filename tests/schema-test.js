const expect = require("chai").expect;

const testFunctions = require("../db/test-functions");
const db = require("../db/connection");

describe("authors and blogposts", () => {
  let authorId, blogPostId;
  const authorData = {
    name: "Ali",
    age: 22,
    gender: "Male",
    nationality: "Iraqi",
    areasOfExpertise: ["coding", "design", "databases"],
  };
  const blogPostData = {
    title: "A new post",
    content: "Lorem ipsum lorem ipsum",
    tags: ["blog", "lifestyle"],
  };

  step("author model should save author to database", async () => {
    const newAuthor = await testFunctions.addAuthor(authorData);
    expect(newAuthor).to.be.an("object");
    expect(testFunctions.isValidObjectId(newAuthor._id)).to.be.equal(true);
    authorId = newAuthor._id;
  });

  step("author model should have correct schema", async () => {
    const author = await testFunctions.getAuthor(authorId);
    expect(author).to.be.an("object");
    expect(author.name).to.equal(authorData.name);
    expect(author.age).to.equal(authorData.age);
    expect(author.gender).to.equal(authorData.gender);
    expect(author.nationality).to.equal(authorData.nationality);
    expect(author.areasOfExpertise).to.deep.equal(authorData.areasOfExpertise);
  });

  step("blogpost model should save blogpost to database", async () => {
    const newBlogPost = await testFunctions.addBlogPost({
      ...blogPostData,
      authorRef: authorId,
    });
    expect(newBlogPost).to.be.an("object");
    expect(testFunctions.isValidObjectId(newBlogPost._id)).to.be.equal(true);
    blogPostId = newBlogPost._id;
  });

  step("blogpost model should have correct schema", async () => {
    const blogPost = await testFunctions.getBlogPost(blogPostId);
    expect(blogPost).to.be.an("object");
    expect(blogPost.title).to.equal(blogPostData.title);
    expect(blogPost.content).to.equal(blogPostData.content);
    expect(blogPost.tags).to.deep.equal(blogPostData.tags);
    expect(blogPost.authorRef).to.deep.equal(authorId);
  });
});
