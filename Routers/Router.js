const express = require("express");
const app = require("..");
const { route } = require("..");
const routes = express.Router();

const productController = require("../Controllers/ProductController");
routes.get("/", () => {
  console.log("hshit");
});
const AuthenticteUser = require("../Middleware/Middleware");

routes.post(
  "/add-product",
  AuthenticteUser.authenticateUser,
  productController.addProducts
);
routes.post(
  "/update-product",
  AuthenticteUser.authenticateUser,
  productController.updateProducts
);
routes.post(
  "/delete-product",
  AuthenticteUser.authenticateUser,
  productController.deleteProduct
);

routes.get(
  "/get-product",
  AuthenticteUser.authenticateUser,
  productController.getProducts
);

routes.get(
  "/get-all-product",
  AuthenticteUser.authenticateUser,
  productController.getAllProducts
);
module.exports = routes;
