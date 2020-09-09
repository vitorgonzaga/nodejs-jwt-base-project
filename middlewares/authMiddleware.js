const jwt = require('jsonwebtoken');

const User = require('../models/user');

const JWT_SECRET = 'shhhhhitsasecret!';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'no token infomred' });
  }

  const payload = jwt.verify(token, JWT_SECRET);

  const user = await User.findOne({ username: payload.username });

  if (!user) {
    return res.status(401).json({ message: 'user not found' });
  }

  req.user = user;

  next();
};