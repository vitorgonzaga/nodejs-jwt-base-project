require('dotenv').config();

module.exports = {
  development: {
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: 'jwt_exercise',
    host: process.env.SQL_HOST,
    dialect: 'mysql',
  },
  test: {
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: 'jwt_exercise',
    host: process.env.SQL_HOST,
    dialect: 'mysql',
  },
  production: {
    username: process.env.SQL_USERNAME,
    password: process.env.SQL_PASSWORD,
    database: 'jwt_exercise',
    host: process.env.SQL_HOST,
    dialect: 'mysql',
  },
};