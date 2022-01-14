const jwt = require('jsonwebtoken');
const userModel = require('../../models/User');

const secret = process.env.API_SECRET;

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ error: 'Token não encontrado' });
  try {
    const decoded = jwt.verify(authorization, secret);
    // o decoded irá retornar o objeto payload:

    /*
          "data": {
            "id": 3,
            "username": "italssodj",
            "password": "senha123"
          },
          "iat": 1642185022,
          "exp": 1642789822
        }
    */

        // -----------------------------------------------------------------------
    // const {username} = decoded.data;
    // const user = await userModel.findAll({ attributes: { username: username } });
    // Se o usuário não for encontrado no banco retorna erro
    // if (!user) return res.status(401).json({ message: 'Erro ao procurar usuário do token' })
    // Se foi encontrado armazena numa variável e chama o proximo middleware
    // -----------------------------------------------------------------------

    req.user = decoded.data; // cria um atributo "user" dentro do objeto req para armazenar o payload "decodado"
    // chama o próximo middleware,
    next();
  } catch(error) {
    return res.status(401).json({ message: error.message })
  }
};