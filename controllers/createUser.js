const User = require('../models/user');

module.exports = async (req, res) => {
  const { username, password } = req.body; 
  
  if (!username || !password) res.status(500).json({ message: 'Erro ao salvar o usuário no banco' });;
  
  await User.registerUser(username, password);
  
  res.status(201).json({ message: 'Novo usuário cadastrado com sucesso!' });
};
