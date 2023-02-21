/* eslint-disable import/no-extraneous-dependencies */
const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  host: process.env.MYSQL_HOST,
  database: process.env.MYSQL_DATABASE,
  password: process.env.MYSQL_PASSWORD,
});

module.exports = connection;
