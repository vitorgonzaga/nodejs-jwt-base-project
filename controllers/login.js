const jwt = require('jsonwebtoken');
const User = require('../models/user');

function removePassword ({ password, ...user }) {
  return user
}

module.exports = (secret) => async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) return res.send(401);

    const rawUser = await User.findOne({ username });

    if (!rawUser) res.status(401).json({ message: 'invalid login / password' });

    const user = removePassword(rawUser.toObject())

    const jwtConfig = {
      expiresIn: '15m',
      algorithm: 'HS256'
    }

    const token = jwt.sign({ data: user }, secret, jwtConfig)

    res.status(200).json({ token });
  } catch (err) {
    next(err);
  }
};
