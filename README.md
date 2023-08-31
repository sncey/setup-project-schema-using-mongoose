# Setup project schema using Mongoose

## Objectives
- Practice setting up MongoDB collection schemas and models using mongoose
- Practice relating documents to each other using referencing method

## Overview
In the previous lab we practiced building schemas using MongoDB driver. In this lab we will build the same schemas but using mongoose and see the difference between working with MongoDB and an ODM like mongoose as well as relating the blog posts document to the author document using referencing method.

## Starter Code
You will find the following starter code in the project folder:

- Basic Express application setup in `index.js`
- Database connection setup in `db/connection.js`
- Some test functions in `db/test-functions.js`

All the necessary packages are already listed in `package.json`. So just run `npm install` and `npm start` to get started.

**Note**: Make sure MongoDB is running on your local machine.

## Instructions
Add the code in the `models` folder to create models for BlogPost and Author. Your code must include:

- the base structure of each document using mongoose built-in methods for schemas

### Part 0: Building the blog post schema
Our first collection is the collection for blog posts. In `models/blog-post.js`, design the schema and model for a document representing a blog post. It should include:

- Title as a string
- Content as a string
- Array of tags where each tag is a string
- Reference to author document in the authors collection, this will be an ObjectId

### Part 1: Building the author schema
Our second collection is the collection for authors. In `models/author.js`, design the schema and model for an author document. It should include:

- Name as string
- Age as number
- Gender as string
- Nationality as string
- Array for areas of expertise where each is a string

**Hint**: Look at the test files in order to visualize how the schema and model should look like. And ofcourse Google and documentation!

## Submission
Run `npm test` to test your code. If it shows all tests have passed then you're good to go.

You can also manually test your models by creating a few API endpoints on the `index.js` file for adding and finding authors and blogposts. Then call these endpoints to test your models. You can also verify the database operations by checking the collections using any MongoDB GUI tool or Mongo shell.

Once you're ready to submit the assignment, follow these steps on your terminal:

1. Stage your changes to be committed: `git add .`
2. Commit your final changes: `git commit -m "solve assignment"`
3. Push your commit to the main branch of your assignment repo: `git push origin main`

After your changes are pushed, return to this assignment on Canvas for the final step of submission.
