const jwt = require('jsonwebtoken');

module.exports = (secret) => (req, res, next) => {
  if (!req.user) return res.status(500).end();

  const jwtConfig = {
    expiresIn: '15m',
    algorithm: 'HS256'
  }

  const token = jwt.sign({ data: req.user }, secret, jwtConfig)

  res.status(200).json({ newToken: token })
}