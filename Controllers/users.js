const express = require("express");
const req = require("express/lib/request");
// const Bug = require("../Models/bug.js");
const User = require("../Models/user.js");
const router = express.Router();

// router.get("/", (req, res) => {
//   const data = User.find({}).populate("bugs");

//   res.json({ data: data });
// });

// GET /users
router.get("/", function (req, res) {
  // Find all the users
  User.find()
    // Return users as json
    .then((users) => res.status(200).json({ users: users }));
});

// PATCH /users
router.patch("/:id", function (req, res) {
  // get id from params
  const id = req.params.id;
  // get new user data from body of request
  const data = req.body;
  Users.findByIdAndUpdate(id, data, { new: true }).then((users) =>
    res.status(200).json({ users: users })
  );
});

// Write the route to update an author
router.patch("/:userId/bugs/:bugsId", (req, res) => {
  Bug.findByIdAndUpdate(
    req.params.bugId,
    { user: req.params.userId },
    { new: true }
  ).then(() => {
    User.findByIdAndUpdate(
      req.params.userId,
      { $push: { bugs: req.params.bugId } },
      { new: true }
    ).then((user) => res.status(200).json({ user: user }));
  });
});

module.exports = router;
