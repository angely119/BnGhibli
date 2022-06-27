// AUTH ROUTES
const router = require('express').Router();
const { User } = require('../db');
const verifyToken = require('../auth/verifyToken');
module.exports = router;

// POST /auth/login
router.post('/login', async (req, res, next) => {
  try {
    res.send({ token: await User.authenticate(req.body)});
    // Takes in the user object from req.body
    // body: { username: x, password: y }
    // Sends back res: {token: token}
  } catch (err) {
    next(err)
  }
})

// POST /auth/signup
router.post('/signup', async (req, res, next) => {
  try {
    const user = await User.create(req.body)
    // Takes in the user object from req.body
    // body: { username: x, password: y }
    res.send({token: await user.generateToken()})
    // Sends back res: {token: token}
  } catch (err) {
    if (err.name === 'SequelizeUniqueConstraintError') {
      res.status(401).send('User already exists')
    } else {
      next(err)
    }
  }
})

// GET /auth/user
router.get('/user', verifyToken, async (req, res, next) => {
  try {
    res.send(req.user);
  } catch (ex) {
    next(ex)
  }
})
