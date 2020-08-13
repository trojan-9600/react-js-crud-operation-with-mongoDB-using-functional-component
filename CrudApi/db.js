const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/reactCrud",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log("mongodb connection is successed!");
    else
      console.log(
        "ERROR while connection server".JSON.stringify(err, undefined, 2)
      );
  }
);
