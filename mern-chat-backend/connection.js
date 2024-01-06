const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://ritesh1191:8975096933@cluster0.xyy7dox.mongodb.net/mernChat?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
