const express = require("express");
const app = express();

const med_routes = require("./Routers/Router");
const dbConfig = require("./MySql/DbFunction");

function initilization() {
  setUpDatabase();
  setupBodyParser();
  setUpRoutes();
  setupError404Handler();
  setupErrorHandler();
}

initilization();

function setupBodyParser() {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
}

function setUpDatabase() {
  dbConfig.checkConnection
    .then((data) => {
      console.log(`Database connected ${data}`);
    })
    .catch((err) => {
      console.log(err);
    });
}

function setUpRoutes() {
  app.use("/v1", med_routes);
}

function setupError404Handler() {
  app.use((req, res) => {
    res.status(404).json({
      message: "NOT FOUND",
      status: 404,
    });
  });
}

function setupErrorHandler() {
  app.use((err, req, res, next) => {
    res.status(req.errorStatus || 500).json({
      message: err.message || "Something went wrong. Please try again later",
      status: req.errorStatus || 500,
    });
  });
}

app.listen(3000, () => {
  console.log("server runningon 3000");
});
module.exports = app;
