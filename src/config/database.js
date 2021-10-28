module.exports = {
  development: {
    username: "root",
    password: "example",
    database: "highfive",
    host: "localhost",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "example",
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: "example",
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};