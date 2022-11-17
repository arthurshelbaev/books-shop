const { Router } = require('express')
const { booksController } = require('../controllers/books.controller')

const router = Router()

router.post('/books', booksController.addBook)
router.get('/books', booksController.getBooks)
router.get('/books/:id', booksController.getBook)
router.get('/books/genre', booksController.getBooksByGenre)
router.delete('/books/:id', booksController.deleteBook)
router.patch('/books/:id', booksController.updateBook)

module.exports = router