const Review = require("../models/Review.model");

module.exports.reviewsController = {
    addReview: (req, res) => {
        Review.create({
            text: req.body.text,
            email: req.body.email,
            about: req.body.about,
        }).then((data) => {
            res.json(data);
        });
    },
    getReviewsByBook: (req, res) => {
        Review.find({ about: req.params.id })
            .populate({ path: "about", populate: { path: "author", model: "Author" } })
            .populate({ path: "about", populate: { path: "genre", model: "Genre" } })
            .then((data) => {
                res.json(data);
            });
    },
    deleteReview: (req, res) => {
        Review.findByIdAndDelete(req.params.id).then((data) => {
            res.json(data);
        });
    },
};
