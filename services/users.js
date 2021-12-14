const jwt = require('jsonwebtoken');
const { User } = require('../models');

/* Aqui temos nossa chave privada, é com ela que os dados do seu usuário serão encriptados.
  Em projetos reais, tenha cautela com essa chave, pois, quem tiver acesso a ela conseguirá gerar tokens manualmente
  e se passar por qualquer user do seu sistema.
*/
const secret = 'seusecretdetoken';

/*
  Criamos uma config básica para o nosso JWT onde:
  expiresIn -> Significa o tempo em que esse token será válido.
  algorithm -> Algoritmo que você irá usar para assinar sua mensagem (Lembra que falamos do HMAC-SHA256 lá no começo?)
*/
const jwtConfig = {
  expiresIn: '15m',
  algorithm: 'HS256',
};

const findUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 401, message: 'É necessário usuário e senha para fazer login' }
  );

  // const userSearch = await User.findOne({ where: { username } });
  const userSearch = await User.findOne({ where: { username } });

  if (!userSearch || userSearch.password !== password) return (
    { status: 401, message: 'Usuário não existe ou senha inválida' }
  );

  /* Separamos a senha do resto, pois a senha de uma pessoa usuária **nunca deve ser incluída no token**, utilizamos um rest parameter aqui e também trocamos o nome da chave password, pois já recebemos um parâmetro com esse nome */
  const { password: passBD, ...userWithoutPassword } = userSearch.dataValues;

  /* Aqui é quando assinamos de fato nossa mensagem com a nossa "chave secreta", mensagem essa que contém um ou mais dados que você queira colocar dentro de "data". */
  const token = jwt.sign({ data: userWithoutPassword }, secret, jwtConfig);

  /* Por fim nós devolvemos essa informação ao usuário. */
  return { status: 200, message: token };
};

const createUserService = async (username, password) => {
  if (!username || !password) return (
    { status: 500, message: 'Erro ao salvar o usuário no banco' }
  );

  await User.create({ username, password });

  return ({ status: 201, message: 'Novo usuário cadastrado com sucesso!' });
};

module.exports = { findUserService, createUserService };
