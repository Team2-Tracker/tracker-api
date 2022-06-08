// Require in dependencies
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const bugsController = require("./Controllers/bugs.js");
const usersController = require("./Controllers/users.js");
const cors = require("cors");

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

// Users routes
app.use("/users", usersController);

app.set("port", process.env.PORT || 8080);

// Start app on port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
