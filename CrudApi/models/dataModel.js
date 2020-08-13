const mongoose = require("mongoose");
var Data = mongoose.model(
  "Data",
  {
    FirstName: { type: String },
    MiddleName: { type: String },
    LastName: { type: String },
    Email: { type: String },
    date: { type: String },
    bio: { type: String },
  },
  "user"
);
module.exports = { Data };
