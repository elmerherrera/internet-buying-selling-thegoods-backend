require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = new Sequelize('ecommerce_db', 'root', process.env.MYSQL_PW , {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize;