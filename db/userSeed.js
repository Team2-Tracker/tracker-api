const User = require('../models/user.js')

const seedData = require('./userSeedData.json')

User.deleteMany({}).then(() => {
	User.create(seedData).then((user) => {
		console.log(user)
		process.exit()
	})
})
