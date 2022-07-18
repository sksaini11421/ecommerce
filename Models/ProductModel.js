const db = require("../MySql/Db");
const dbFUnc = require("../MySql/DbFunction");

exports.addProducts = async (p_name, p_type, created_at) => {
  return new Promise((resolve, reject) => {
    const query = `INSERT INTO products(product_name,product_type,created_at) VALUES(?,?,?)`;
    db.query(query, [p_name, p_type, created_at], (error, result, fields) => {
      if (error) {
        dbFUnc.connectionRelease;
        reject(error);
      } else {
        // dbFUnc.checkConnection();
        resolve(result);
      }
    });
  });
};

exports.getProducts = async (p_id) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM products where product_id=?`;
    db.query(query, [p_id], (error, result, fields) => {
      if (error) {
        dbFUnc.connectionRelease;
        reject(error);
      } else {
        // dbFUnc.checkConnection();
        resolve(result);
      }
    });
  });
};

exports.updateProducts = async (p_name, p_type, updated_at, p_id) => {
  return new Promise((resolve, reject) => {
    const query = `UPDATE products set product_name=?,product_type=?,updated_at=? where product_id=?`;
    db.query(
      query,
      [p_name, p_type, updated_at, p_id],
      (error, result, fields) => {
        if (error) {
          dbFUnc.connectionRelease;
          reject(error);
        } else {
          // dbFUnc.checkConnection();
          resolve(result);
        }
      }
    );
  });
};

exports.deleteProduct = async (p_id) => {
  return new Promise((resolve, reject) => {
    const query = `DELETE FROM products WHERE product_id = ?`;
    db.query(query, [p_id], (error, result, fields) => {
      if (error) {
        dbFUnc.connectionRelease;
        reject(error);
      } else {
        // dbFUnc.checkConnection();
        resolve(result);
      }
    });
  });
};
