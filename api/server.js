const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const auth = require('../middlewares/auth');

const db = process.env.MONGODB_URL
const port = process.env.PORT || 3000;
const JWT_SECRET = 'sshhhhhitsasecret'

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

const app = express();
const authMiddleware = auth(JWT_SECRET)

app.use(express.json());

const apiRoutes = express.Router();
apiRoutes.get('/posts', routes.getPosts);
apiRoutes.post('/users', routes.createUsers);
apiRoutes.post('/products', authMiddleware, routes.createProduct);
apiRoutes.post('/login', routes.login(JWT_SECRET));
apiRoutes.post('/renew', authMiddleware, routes.renewToken(JWT_SECRET));

app.use('/api', apiRoutes);

app.listen(port);
console.log(`Ouvindo na porta ${port}`);
