const mysql = require("mysql");
const pool = mysql.createPool({
  connectionLimit: 10,
  password: process.env.DB_PASS,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
});

const db_controller = {
  query(query_string, values) {
    return new Promise((resolve, reject) => {
      pool.query(query_string, values, (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
      });
    });
  },
};

module.exports = db_controller;
