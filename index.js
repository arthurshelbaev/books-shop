const express = require('express')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())

app.use(require('./routes/authors.route'))
app.use(require('./routes/genres.route'))
app.use(require('./routes/books.route'))
app.use(require('./routes/reviews.route'))

mongoose.connect("mongodb+srv://arthurshelbaev:arthur123@cluster0.nkb13ye.mongodb.net/bookShop?retryWrites=true&w=majority",
() => {
    console.log("Server activated")
    app.listen(3000, () => {
        console.log("Host connected")
    })
})