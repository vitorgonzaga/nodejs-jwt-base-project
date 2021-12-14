const jwt = require('jsonwebtoken');

const segredo = 'seusecretdetoken';

const validateJWT = async (req, res, next) => {
  /* Aquele token gerado anteriormente virá através do header Authorization para todas as rotas que queremos que seja autenticada. */
  const token = req.headers.authorization;

  /* Caso o token não seja informado, simplesmente retornamos 401 - não autorizado. */
  if (!token) {
    return res.status(401).json({ error: 'Token não encontrado ou informado' });
  }

  try {
    /* Através o método verify, podemos validar e decodificar o nosso JWT. */
    const decoded = jwt.verify(token, segredo);
    const user = decoded.data.username;

    if (!user)
      return res
        .status(401)
        .json({ message: 'Erro ao procurar usuario do token.' });

    req.user = user;

    /* Por fim chamamos o próximo middleware, que no nosso caso é a própria rota de produtos. */
    next();
  } catch (_err) {
    return res.status(401).json({ message: 'Erro: Seu token é inválido.' });
  }
};

module.exports = { validateJWT };