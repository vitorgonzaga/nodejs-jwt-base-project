const Model = require('../models/user');

module.exports = (req, res) => {
  const data = new Model({
    username: req.body.username,
    password: req.body.password,
  });

  data.save().then((doc) => {
    const { password, ...newUser } = doc.toObject()

    res.status(201).json({ message: 'Novo usuário', data: newUser });
  }).catch(err => {
    res.status(500).send('Erro ao salvar o usuário no banco', err);
  });
};
