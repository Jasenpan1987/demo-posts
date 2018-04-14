const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const static = require

const keys = require("./config");

require("./models/Post");

const routeConfig = require("./routes/apis");

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(keys.MONGO_URI, () => {
  console.log("mongo is connected");
});

routeConfig(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    return res.sendFile(
      path.resolve(__dirname, "client", "build", "index.html")
    );
  })
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("server listen to localhost: " + PORT);
});
