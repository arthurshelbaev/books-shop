const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    text: String,
    email: String,
    about: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book"
    }
})

const Review = mongoose.model('Review', reviewSchema)

module.exports = Review 