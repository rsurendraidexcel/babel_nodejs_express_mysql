// const mysql = require("mysql");
import  mysql from 'mysql';
require('dotenv').config();
const sqlConnection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
      multipleStatements: true
 });
 sqlConnection.connect((err)=> {
      if(!err){
      console.log('Connection Established Successfully');
      } else {
      console.log('Connection Failed!'+ JSON.stringify(err,undefined,2));
      }
 });

 module.exports = sqlConnection;

// module.exports = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   database: process.env.DB_NAME,
//   multipleStatements: true
// })