// API/RENTALS ROUTES
const router = require('express').Router();
const Sequelize = require('sequelize');
const { User, Rental, Booking, Review } = require('../db');

// GET /api/rentals/
router.get('/', async (req, res, next) => {
  // req.query: {	"location": "spirit realm"}
  try {
    if (req.query.location) {
      const searchRentals = await Rental.findAll({
        where: {
          location: {
            [Sequelize.Op.or] : {
              name: {
                [Sequelize.Op.match] : req.query.location
              },
              address: {
                [Sequelize.Op.match] : req.query.location
              }
            }
          }
        },
        include: ['host', Booking, Review]
      });
      res.send(searchRentals);
    } else {
      const rentals = await Rental.findAll({
        include: ['host', Booking, Review]
      });
      res.send(rentals);
    }
  } catch (error) {
    next(error);
  }
});

// GET /api/rentals/:id
router.get('/:id', async (req, res, next) => {
  try {
    const rental = await Rental.findByPk(req.params.id, {
      include: ['host', Booking, Review]
    });
    res.send(rental);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
