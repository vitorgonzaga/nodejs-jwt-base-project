const express = require('express');
const bodyParser = require('body-parser');

const login = require('./controllers/posts');
const getPosts = require('./controllers/posts');
const createUsers = require('./controllers/posts');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/login', login);
app.get('/api/posts', getPosts);
app.post('/api/users', createUsers);

const PORT = 3000;

app.listen(PORT, () => console.log(`Conectado na porta ${PORT}`));

