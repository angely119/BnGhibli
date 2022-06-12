// USERS MODEL
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

// INSTANCE METHOD TO GENERATE TOKEN
User.prototype.generateToken = function () {
  return jwt.sign({ userId: this.id }, process.env.JWT);
};

// CLASS METHOD TO AUTHENTICATE PASSWORD & GENERATE TOKEN
User.authenticate = async function ({username, password}) {
  const user = await this.findOne({ where: { username } });
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!user || !passwordMatch) {
    const error = Error('Incorrect username/password');
    error.status = 401;
    throw error;
  }
  return user.generateToken();
};

// CLASS METHOD TO VERIFY TOKEN
User.findByToken = async (token) => {
  try {
    const { userId } = jwt.verify(token, process.env.JWT);
    const user = await User.findByPk(userId);
    if (!user) {
      throw error;
    }
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
  if (user.changed('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
};

User.beforeCreate(hashPassword);
User.beforeUpdate(hashPassword);
User.beforeBulkCreate(users => Promise.all(users.map(hashPassword)));

