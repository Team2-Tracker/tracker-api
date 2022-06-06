// Require in dependencies
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const bugsController = require("./controllers/bugs");

// Define port
const PORT = process.env.PORT;

// Create express app
const app = express();

// Accept json as req.body
app.use(express.json());

//App will use CORS
app.use(cors());

// Use logger middleware
app.use(logger("dev"));

// Bugs routes
app.use("/bugs", bugsController);

// Start app on port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
