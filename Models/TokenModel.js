const db = require("../MySql/Db");
const dbFUnc = require("../MySql/DbFunction");

exports.getAuthenticateDetails = async (auth_token) => {
  return new Promise((resolve, reject) => {
    const query = `SELECT user_id FROM users where auth_token =?`;
    db.query(query, [auth_token], (error, result, fields) => {
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
