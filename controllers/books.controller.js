const Book = require('../models/Book.model')

module.exports.booksController = {
    addBook: (req, res) => {
        Book.create({
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre
        }).then((data) => {
            res.json(`Добавлена книга: ${data}`)
        })
    },
    getBooks: (req, res) => {
        Book.find().populate("author genre", {name: 1}).then((data) => {
            res.json(data)
        })
    },
    getBook: (req, res) => {
        Book.findById(req.params.id).populate("author genre", {name: 1}).then((data) => {
            res.json(data)
        })
    },
    getBooksByGenre: (req, res) => {
        Book.find({genre: req.params.id}).populate("author genre", {name: 1}).then((data) => {
            res.json(data)
        })
    },
    deleteBook: (req, res) => {
        Book.findByIdAndDelete(req.params.id).then(() => {
            res.json(`Книга ${req.params.name}удалена`)
        })
    },
    updateBook: (req, res) => {
        Book.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            author: req.body.author,
            genre: req.body.genre
        }, { new: true }).then((data) => {
            res.json(`Книга ${data.name} обновлена.`)
        })
    }
}