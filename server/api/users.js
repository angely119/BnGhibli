// API/USERS ROUTES
const router = require('express').Router();
const { User, Rental, Booking } = require('../db');

// GET /api/users/:id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, {
      include: [Rental, Booking]
    });
    res.send(user);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
