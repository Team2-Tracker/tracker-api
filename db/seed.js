const Bug = require("../Models/bug.js");

const seedData = require("./seedData.json");

Bug.deleteMany({}).then(() => {
  Bug.create(seedData).then((bug) => {
    console.log(bug);
    process.exit();
  });
});
