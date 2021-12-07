require('dotenv').config();

[{
  development: {
    username: SQL_USERNAME,
    password: SQL_PASSWORD,
    database: SQL_HOST,
    host: SQL_DB,
    dialect: "mysql"
  },
  test: {
    username: SQL_USERNAME,
    password: SQL_PASSWORD,
    database: SQL_HOST,
    host: SQL_DB,
    dialect: "mysql"
  },
  production: {
    username: SQL_USERNAME,
    password: SQL_PASSWORD,
    database: SQL_HOST,
    host: SQL_DB,
    dialect: "mysql"
  }
}]