const Author = require('../models/Author.model')

module.exports.authorsController = {
    addAuthor: (req, res) => {
        Author.create({
            name: req.body.name,
            bio: req.body.bio
        }, () => {
            res.json(`Автор ${req.body.name} добавлен`)
        })
    },
    getAuthors: (req, res) => {
        Author.find().then((data) => {
            res.json(data)
        })
    },
    deleteAuthor: (req, res) => {
        Author.findByIdAndDelete(req.params.id).then((data) => {
            res.json(`Удален автор ${data.name}`)
        })
    }
}