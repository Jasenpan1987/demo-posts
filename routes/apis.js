const mongoose = require("mongoose");
const _ = require("lodash");

const Posts = mongoose.model("posts");

module.exports = app => {
  // get all posts /post/*
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await Posts.find({});
      return res.send(posts);
    } catch(error) {
      return res.send({ error });
    }
  });

  // create posts
 app.post('/api/post', async (req, res) => {
   const { title, body, category } = req.body;
    const newPost = new Posts({
      title,
      body,
      category
    });

    try {
      const result = await newPost.save()
      return res.send({ status: "success", ...result });
    } catch (error) {
      return res.send({ error });
    }
  });

  // get post by id
  app.get('/api/post/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const post = await Posts.findById(id);
      return res.send(post);
    } catch (error) {
      return res.send({ error });
    }
  });
  
  // get post by query
  app.get('/api/post', async (req, res) => {
    const category = req.query.category;
    try {
      const post = await Posts.find({ category });
      return res.send(post);
    } catch (error) {
      return res.send({ error });
    }
  });

  // update post
  app.put('/api/post/:id', async (req, res) => {
    const { id } = req.params;
    const { title, body, category } = req.body
    try {
      const result = await Posts.findByIdAndUpdate(id, { title, body, category });
      return res.send({ status: "success", ...result });
    } catch (error) {
      return res.send({ error });
    }
  });

  // delete post
  app.delete('/api/post/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await Posts.findByIdAndRemove(id);
      return res.send({ status: "success" });
    } catch (error) {
      return res.send({ error });
    }
  });
};
