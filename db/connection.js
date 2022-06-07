const mongoose = require("mongoose");

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
  mongoURI = process.env.DB_URL;
} else {
  mongoURI = "mongodb://127.0.0.1/tracker-api";
}

mongoose.connect(mongoURI);

// mongoose.connect("mongodb://localhost/tracker-api");
// mongoose.connect("mongodb://127.0.0.1/tracker-api");

module.exports = mongoose;
