const { Router } = require('express')
const { genresController } = require('../controllers/genres.controller')

const router = Router()

router.post('/genres', genresController.addGenre)
router.get('/genres', genresController.getGenres)
router.delete('/genres/:id', genresController.deleteGenre)

module.exports = router 