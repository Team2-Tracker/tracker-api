const express = require("express");
const bug = require("./../models/bug.js");
const Bug = require("./../models/bug.js");

const router = express.Router();

// GET /bugs
router.get("/", function (req, res) {
  // Find all the bugs
  Bug.find()
    // Return bugs as json
    .then((bugs) => res.status(200).json({ bugs: bugs }));
});

// POST /bugs
router.post('/', function(req, res) {
    // get new bug data
    const data = req.body
    // save bugs to db
    Bug.create(data)
    // return bug as json
    .then((bug => res.status(201).json({bug: bug})))
})

module.exports = router;
