const { Router } = require('express')
const { reviewsController } = require('../controllers/reviews.controller')

const router = Router()

router.post('/reviews', reviewsController.addReview)
router.get('/reviews/:id', reviewsController.getReviewsByBook)
router.delete('/reviews/:id', reviewsController.deleteReview)

module.exports = router