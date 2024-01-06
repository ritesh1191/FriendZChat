const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://{DB_USERNAME}:{DB_PASSWORD}@cluster0.xyy7dox.mongodb.net/mernChat?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
