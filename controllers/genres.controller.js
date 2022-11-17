const Genre = require('../models/Genre.model')

module.exports.genresController = {
    addGenre: (req, res) => {
        Genre.create({
            name: req.body.name,
            definition: req.body.definition
        }).then((data) => {
            res.json(`Added genre: ${data.name} - ${data.definition}`)
        })
    },
    getGenres: (req, res) => {
        Genre.find().then((data) => {
            res.json(data)
        })
    },
    deleteGenre: (req, res) => {
        Genre.findByIdAndDelete(req.params.id).then((data) => {
            res.json(`Deleted genre: ${data.name} - ${data.definition}`)
        })
    }
}