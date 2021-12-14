const express = require('express');
const bodyParser = require('body-parser');

const { getAllPosts } = require('./controllers/posts');
const { createUser } = require('./controllers/users');
const { login } = require('./controllers/login');
const { createProduct } = require('./controllers/products');
const { validateJWT } = require('./middlewares/validateJWT');

const app = express();

app.use(bodyParser.json());

app.get('/api/posts', getAllPosts);
app.post('/api/users', createUser);
app.post('/api/login', login);
app.post('/api/products', validateJWT, createProduct);

const PORT = 3000;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));

