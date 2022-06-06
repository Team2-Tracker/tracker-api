const mongoose = require("./../connection");

const bugSchema = new mongoose.Schema({
  bugName: String,
  Issues: String,
  Priority: Number,
  timeEstimate: Number,
  dateDue: Date,
  createdDate: Date,
  Assigned: String,
});

module.exports = mongoose.model("Bug", bugSchema);
