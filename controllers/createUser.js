const { registerUser } = require('../models/user');

const createUser = async (req, res) => {
  const { username, password } = req.body;

  if (!username) res.status(500).json({ message: 'Erro ao salvar o usuário no banco' });;

  await registerUser(username, password);

  res.status(201).json({ message: 'Novo usuário cadastrado com sucesso!' });
};

module.exports = { createUser };
