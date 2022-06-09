const express = require("express");
const Bug = require("../Models/bug.js");

const router = express.Router();

// GET /bugs
router.get("/", function (req, res) {
  // Find all the bugs
  Bug.find({})
    // Return bugs as json
    .populate("user", ["userName", "firstName", "lastName"])
    .then((bugs) => res.status(200).json({ bugs: bugs }));
});

// POST /bugs
router.post("/", function (req, res) {
  // get new bug data
  const data = req.body;
  // save bugs to db
  Bug.create(data)
    // return bug as json
    .then((bug) => res.status(201).json({ bug: bug }));
});

// GET /:id
router.get("/:id", function (req, res) {
  const id = req.params.id;
  //Find bug by id
  Bug.findById(id)
    //Return bug as json
    .populate("user", ["userName", "firstName", "lastName"])
    .then((bug) => res.status(200).json({ bug: bug }));
  console.log(id);
});

// DELETE /:id
router.delete("/:id", (req, res) => {
  //Find bug by id and delete
  Bug.findByIdAndDelete(req.params.id).then((bug) => {
    res.json({ data: bug });
  });
});

// PATCH /:id
router.patch("/:id", (req, res) => {
  //Find bug by id and update
  Bug.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .populate("user", ["userName", "firstName", "lastName"])
    .then((bug) => {
      res.json({ data: bug });
    });
});

module.exports = router;
