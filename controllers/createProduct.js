module.exports = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) return res.status(422).json({ message: 'Missing name or price' });

  res.status(201)
    .json({ message: 'Produto fake criado com sucesso', data: req.body });
}