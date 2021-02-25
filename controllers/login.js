const User = require('../models/user');
const createToken = require('../auth/createToken');

module.exports = async (req, res) => {
  try {
    const { username, password } = req.body; 

    if (!username || !password) return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });

    const { password: passwordDB, ...userWithoutPassword } = await User.findUser(username);

    if (!userWithoutPassword || passwordDB !== password) return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });

    const token = createToken(userWithoutPassword);

    return res.status(200).json({ message: 'Login efetuado com sucesso', token });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ message: 'Erro interno', error: e });
  }
};
