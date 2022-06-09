const express = require("express");
const req = require("express/lib/request");
const Bug = require("../Models/bug.js");
const User = require("../Models/user.js");
const router = express.Router();

// GET /users
router.get("/", function (req, res) {
  // Find all the users
  User.find()
    // Return users as json
    .populate("bugs", [
      "bugName",
      "issues",
      "priority",
      "timeEstimate",
      "dateDue",
      "dateCreated",
      "assigned",
      "isActive",
    ])
    .then((users) => res.status(200).json({ users: users }));
  console.log("test");
});

// GET /:id
router.get("/:id", function (req, res) {
  const id = objectId(req.params.id);
  //Find user by id
  User.findById(id)
    //Return user as json
    .populate("bugs", [
      "bugName",
      "issues",
      "priority",
      "timeEstimate",
      "dateDue",
      "dateCreated",
      "assigned",
      "isActive",
    ])
    .then((user) => res.status(200).json({ user: user }));
});

// Write the route to get user by name
router.get("/name/:name", (req, res) => {
  User.find({
    $or: [
      { firstName: req.params.name },
      { lastName: req.params.name },
      { userName: req.params.name },
    ],
  })
    .populate("bugs", [
      "bugName",
      "issues",
      "priority",
      "timeEstimate",
      "dateDue",
      "dateCreated",
      "assigned",
      "isActive",
    ])
    .then((users) => res.status(200).json({ users: users }));
});

// PATCH /:id
router.patch("/:id", (req, res) => {
  //Find bug by id and update
  User.findByIdAndUpdate(objectId(req.params.id), req.body, { new: true })
    .populate("bugs", [
      "bugName",
      "issues",
      "priority",
      "timeEstimate",
      "dateDue",
      "dateCreated",
      "assigned",
      "isActive",
    ])
    .then((user) => {
      res.json({ data: user });
    });
});

// POST /users Write the route to create an user:
router.post("/", (req, res) => {
  User.create(req.body).then((user) => res.status(201).json({ user: user }));
});

// Write the route to update an user
router.patch("/:userId/bugs/:bugsId", (req, res) => {
  Bug.findByIdAndUpdate(
    objectId(req.params.bugsId),
    { user: objectId(req.params.userId) },
    { new: true }
  )
    .populate("user", ["userName", "firstName", "lastName"])
    .then((bug) => {
      console.log(bug);
      User.findByIdAndUpdate(
        objectId(req.params.userId),
        { $push: { bugs: objectId(req.params.bugsId) } },
        { new: true }
      )
        .populate("bugs", [
          "bugName",
          "issues",
          "priority",
          "timeEstimate",
          "dateDue",
          "dateCreated",
          "assigned",
          "isActive",
        ])
        .then((user) => res.status(200).json({ user: user }));
    });
});

router.get("/", (req, res) => {
  const data = User.find({}).populate("bugs");

  res.json({ data: data });
});

// DELETE /:id
router.delete("/:id", (req, res) => {
  //Find bug by id and delete
  User.findByIdAndDelete(objectId(req.params.id)).then((user) => {
    res.json({ data: user });
  });
});

module.exports = router;
