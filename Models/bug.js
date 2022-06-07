const mongoose = require("../db/connection.js");

const bugSchema = new mongoose.Schema({
  bugName: String,
  issues: String,
  priority: Number,
  timeEstimate: Number,
  dateDue: Date,
  dateCreated: Date,
  assigned: String,
  isActive: Boolean,
  user: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],
});

module.exports = mongoose.model("Bug", bugSchema);
