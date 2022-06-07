const mongoose = require('./../db/connection.js')

const bugSchema = new mongoose.Schema({
	bugName: String,
	issues: String,
	priority: Number,
	timeEstimate: Number,
	dateDue: Date,
	dateCreated: Date,
	assigned: String,
	isActive: true
})

module.exports = mongoose.model('Bug', bugSchema)
