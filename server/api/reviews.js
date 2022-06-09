// API/REVIEWS ROUTES
const router = require('express').Router();
const { User, Rental, Booking, Review } = require('../db');


// GET /api/reviews
router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: req.query, //  req.query: { rating: 5, userId: 3 } and returns all if no req.query
      include: [User, Rental]
    });
    res.send(reviews);
  } catch (error) {
    next(error);
  }
});

// GET /api/reviews/:id - Returns a review
router.get('/:id', async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id, {
      include: [User, Rental]
    });
    res.send(review);
  } catch (error) {
    next(error);
  }
});

// POST /api/reviews - Creates a review for a rental
router.post('/', async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    // req.body includes rentalId
    // can set user and rental in req.body
    res.send(await newReview.reload({
      include: [User, Rental]
    })); // sends back the new Booking including guest and rental
  } catch (error) {
    next(error);
  }
});

// PUT /api/reviews/:id - Edits a review
router.put('/:id', async (req, res, next) => {
  try {
    const review = await Review.findByPk(req.params.id);
    await review.set(req.body); // Can update user and rental in req.body
    await review.save();
    res.send(await review.reload({
      include: [User, Rental]
    }));
    //sends back review including the user and rental
  } catch (error) {
    next(error);
  }
});

// DELETE /api/reviews/:id - Removes a review
router.delete('/:id', async (req, res, next) => {
  try {
    await Review.destroy({where: {id: req.params.id}});
    res.sendStatus(204);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
