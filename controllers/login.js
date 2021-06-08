const { findUser } = require('../models/user');

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) return res.status(401).json(
      { message: 'É necessário usuário e senha para fazer login' }
    );

    const user = await findUser(username);

    if (!user || user.password !== password) return res.status(401).json(
      { message: 'Usuário não existe ou senha inválida' }
    );

    return res.status(200).json(
      { message: 'Login efetuado com sucesso' }
    );
  } catch (e) {
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
}

module.exports = { login };
