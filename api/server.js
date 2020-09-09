const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routes = require('./routes');
const authMiddleware = require('../middlewares/authMiddleware');


const db = 'mongodb://localhost:27017'; //coloque sua URL do MongoDB aqui
const port = process.env.PORT || 8080;

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();
apiRoutes.post('/api/login', routes.login);
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/products', authMiddleware, routes.createProducts);

app.use(apiRoutes);

app.listen(port);
console.log('conectado na porta ' + port);
