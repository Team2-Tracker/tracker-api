const Bug = require("../models/bug.js");

const seedData = require("./seedData.json");

Bug.deleteMany({}).then(() => {
  Bug.create(seedData).then((bug) => {
    console.log(bug);
    process.exit();
  });
});
