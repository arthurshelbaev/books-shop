const mongoose = require('mongoose')

const authorSchema = mongoose.Schema({
    name: String,
    bio: String
})

const Author = mongoose.model("Author", authorSchema)

module.exports = Author