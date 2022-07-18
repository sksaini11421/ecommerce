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
routes.post("/update-product", productController.updateProducts);
routes.post("/delete-product", productController.deleteProduct);

routes.get("/get-product", productController.getProducts);

module.exports = routes;
