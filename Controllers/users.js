const express = require("express");
// const Bug = require("../Models/bug.js");
const User = require("../Models/user.js");
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

//PUT user:id and add bug:id

// router.put("/:userId/addBugs/:bugId", (req, res) => {
//   const bug = Bug.findById(req.params.bugId);
//   const user = User.findByIdAndUpdate(
//     req.params.userId,
//     { $push: { bugs: bug._id } },
//     { new: true }
//   );
//   res.json(user);
// });

// router.get("/", (req, res) => {
//   const data = User.find({}).populate("bugs");

//   res.json({ data: data });
// });

module.exports = router;
