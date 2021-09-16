const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const authMiddleware = require('../middlewares/validateJWT')
const port = process.env.PORT || 8080;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRoutes = express.Router();
apiRoutes.post('/api/users', routes.createUsers);
apiRoutes.post('/api/login', routes.login);
apiRoutes.post('/api/products', authMiddleware, routes.products.createProduct)

app.use(apiRoutes);

app.listen(port);
console.log('conectado na porta ' + port);
