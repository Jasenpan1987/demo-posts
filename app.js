const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const keys = require("./config");

require("./models/Post");

const routeConfig = require("./routes/apis");

const app = express();

mongoose.connect(keys.MONGO_URI, () => {
  console.log("mongo is connected");
});

routeConfig(app);

app.get('/', (req, res) => {
  return res.send("hello world");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server listen to localhost:" + PORT);
});
