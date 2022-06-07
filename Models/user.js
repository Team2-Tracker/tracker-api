const mongoose = require("./../db/connection.js");

const userSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  bugs: [
    {
      ref: "Bug",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("User", userSchema);
