const User = require('../models/user');

module.exports = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) return res.send(401);

  const model = new User();
  
  const user = await model.findUserByName(username);

  if (!user) return res.status(401).json(false);

};
