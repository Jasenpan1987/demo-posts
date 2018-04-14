const mongoose = require("mongoose");
const _ = require("lodash");

const Posts = mongoose.model("posts");

module.exports = app => {
  // get all posts /post/*
  app.get("/api/posts", async (req, res) => {
    const posts = await Posts.find({});
    return res.send(posts);
  });

var counter = 0;
  // create posts
  app.get('/api/new', async (req, res) => {
    const newPost = new Posts({
      title: `title ${++counter}`,
      body: `body ${counter}`,
      category: "random"
    });

    const result = await newPost.save()
    return res.send({ result });
  });
};
