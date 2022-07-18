const mysql = require("mysql");
module.exports = mysql.createPool({
  connectionLimit: 100,
  host: "localhost",
  database: "ecommerce",
  user: "root",
  password: "root",
});
