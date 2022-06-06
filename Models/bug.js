const mongoose = require('./../connection')

const bugSchema = new mongoose.Schema({
    bugName: String,
    issues: String,
    priority: Number,
    timeEstimate: Number,
    dateDue: Date,
    createdDate: Date,
    assigned: String,
})

module.exports = mongoose.model('Bug', bugSchema)