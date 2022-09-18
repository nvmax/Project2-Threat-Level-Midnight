const Sequelize = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: '98.240.157.41',
    dialect: 'mysql',
    port: 3306,
  }
);

module.exports = sequelize;
