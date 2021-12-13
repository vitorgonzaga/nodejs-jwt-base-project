// const { findUser, insertUser } = require('../models/users');
const { User } = require('../models');

const findUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 401, message: 'É necessário usuário e senha para fazer login' }
  );

  // const userSearch = await findUser(username);
  const userSearch = await User.findOne({ where: { username } });

  if (!userSearch || userSearch.password !== password) return (
    { status: 401, message: 'Usuário não existe ou senha inválida' }
  );

  return ({ status: 200, message: 'Login efetuado com sucesso' })
};

const createUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 500, message: 'Erro ao salvar o usuário no banco' }
  );

  // await insertUser(username, password);
  await User.create({ username, password });

  return ({ status: 201, message: 'Novo usuário cadastrado com sucesso!' });
};

module.exports = { findUserService, createUserService };
