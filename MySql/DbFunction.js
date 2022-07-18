const db = require("./Db");

function checkConnection() {
  return new Promise((resolve, reject) => {
    db.getConnection(function (err, connection) {
      if (err) {
        if (connection) connection.release();
        reject(err);
      } else {
        resolve("successfully Connected");
      }
    });
  });
}

function connectionRelease() {
  db.on("release", function (connection) {
    console.log("Connection Release", connection.threadId);
  });
}

module.exports = {
  checkConnection: checkConnection(),
  connectionRelease: connectionRelease(),
};
