// USER MODEL
const Sequelize = require('sequelize');
const db = require('../database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  profileImageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://pbs.twimg.com/media/EZKcz5aUEAEWm6R?format=jpg&name=360x360'
  },
  bio: {
    type: Sequelize.TEXT
  }
});

module.exports = User;

// CLASS METHOD TO AUTHENTICATE PASSWORD & GENERATE TOKEN
User.authenticate = async ({username, password}) => {
  const user = await this.findOne({where: { username }});
  const passwordMatch = await bcrypt.compare(password, user.password); //compares user-entered password with hashedpassword in database
  if (!user || !passwordMatch) { // If user or password does not match throw error
    const error = Error('Incorrect username/password');
    error.status = 401;
    throw error;
  } // else return signed token
    return jwt.sign({userId: user.id}, process.env.JWT);
};

// CLASS METHOD TO VERIFY TOKEN
User.findByToken = async (token) => {
  try {
    const { userId } = jwt.verify(token, process.env.JWT); //verifies and decodes token
    const user = await User.findByPk(userId);
    if (!user) {
      throw error;
    } // else return the user found
    return user;
  } catch (err) {
    const error = Error('bad credentials');
    error.status = 401;
    throw error;
  }
};

// HOOKS TO HASH PASSWORD
const SALT_ROUNDS = 5;
const hashPassword = async (user) => {
  // When password is created or changed, hash it
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};
// Call hashPassword in hooks
User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate(users => Promise.all(users.map(hashPassword)));

