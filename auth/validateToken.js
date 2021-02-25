const jwt = require('jsonwebtoken');

const secret = 'nosso segredo do jwt';

const validateToken = (token) => {
  try {
    return jwt.verify(token, secret);
  } catch (_e) {
    return null;
  }
}

module.exports = validateToken;