const mongoose = require('./../connection')

const userSchema = new mongoose.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    bugs: String,
})

module.exports = mongoose.model('User', userSchema)