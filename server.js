// Require in dependencies
require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const bugsController = require("./Controllers/bugs");
const usersController = require("./Controllers/users");

// Define port
const PORT = process.env.PORT;

// Create express app
const app = express();

// Accept json as req.body
app.use(express.json());

// Use logger middleware
app.use(logger("dev"));

// Bugs routes
app.use("/bugs", bugsController);

// Users routes
app.use("/users", usersController);

// Start app on port
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
