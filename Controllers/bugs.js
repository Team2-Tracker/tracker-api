const express = require("express");
const Bug = require("./../models/bug.js");

const router = express.Router();

// GET /bugs
router.get("/", function (req, res) {
  // Find all the bugs
  Bug.find()
    // Return bugs as json
    .then((bugs) => res.status(200).json({ bugs: bugs }));
});

module.exports = router;
