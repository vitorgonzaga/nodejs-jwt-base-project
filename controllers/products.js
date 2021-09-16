const createProduct = (req, res) => {
    console.log(req.user)
    if (!req.body.title || !req.body.price) return res.status(400).json(
        { message: 'Produto sem título e/ou preço' }
    );

    return res.status(201).json(
        { message: 'Produto fake criado com sucesso', data: req.body }
    );
};

module.exports = { createProduct };