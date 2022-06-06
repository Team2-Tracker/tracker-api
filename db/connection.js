const mongoose = require("mongoose");

// mongoose.connect("mongodb://localhost/tracker-api");
mongoose.connect("mongodb://127.0.0.1/tracker-api");

module.exports = mongoose;
