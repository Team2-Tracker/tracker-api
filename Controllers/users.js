const express = require("express");
const User = require("./../Models/user.js");

const router = express.Router();

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

module.exports = router;
