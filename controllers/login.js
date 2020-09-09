const jwt = require('jsonwebtoken');
const User = require('../models/user');

const JWT_SECRET = 'shhhhhitsasecret!';

module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.send(401);

  const user = await User.findOne({ username });

  if (!user) res.status(401).json(false);

  const signOptions = {
    algorithm: 'HS256',
    expiresIn: '15m'
  };

  const { password: _, ...userWithoutPassword } = user.toObject();

  const token = jwt.sign(userWithoutPassword, JWT_SECRET, signOptions);

  res.status(200).json({ token });
};
