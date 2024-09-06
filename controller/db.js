
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'j_hamad83',
    password: 'Afpc1967#',
    database: 'supermarkt_db'
  });
  
  // اتصال بقاعدة البيانات
  db.connect((err) => {
    if (err) {
      throw err;
    }
    console.log('Connected to MySQL database');
  });
  module.exports = db;