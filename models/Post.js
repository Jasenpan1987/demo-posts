const mongoose = require("mongoose");
const { Schema } = mongoose;

const PostSchema = new Schema({
  title: String,
  body: String,
  category: String
});

mongoose.model("posts", PostSchema);
