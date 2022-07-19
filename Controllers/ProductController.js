const productModel = require("../Models/ProductModel");
const moment = require("moment");

exports.addProducts = async (req, res, next) => {
  try {
    const data = req.body;
    const p_name = data.p_name;
    const p_type = data.p_type;
    const created_at = moment().format();
    await productModel.addProducts(p_name, p_type, created_at);
    res.status(200).send({ message: "product added successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    const data = req.body;
    const p_id = data.p_id;
    const pData = await productModel.getProducts(p_id);
    if (pData != "") {
      res.send({
        message: "product Details fetched Successfully!.",
        data: pData[0],
      });
    } else {
      res.send({
        message: "product Not exists!.",
        data: pData[0],
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.getAllProducts = async (req, res, next) => {
  try {
    const data = req.body;
    const pData = await productModel.getAllProducts();
    if (pData != "") {
      res.send({
        message: "Product Details fetched Successfully!.",
        data: pData,
      });
    } else {
      res.send({
        message: "No Products Found!.",
      });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.updateProducts = async (req, res, next) => {
  try {
    const data = req.body;
    const p_id = data.p_id;
    const p_name = data.p_name;
    const p_type = data.p_type;
    const updated_at = moment().format();
    if (p_id && p_name && p_type != "") {
      const pData = await productModel.getProducts(p_id);
      if (pData != "") {
        await productModel.updateProducts(p_name, p_type, updated_at, p_id);
        res.send({ message: "product Details Updated Successfully!." });
      } else {
        res.send({ message: "product not exits" });
      }
    } else {
      res.status(200).send({ message: "product det are required!." });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

exports.deleteProduct = async (req, res, next) => {
  try {
    const data = req.body;
    const p_id = data.p_id;
    if (p_id != "") {
      await productModel.deleteProduct(p_id);
      res.send({ message: "product Deleted Successfully!." });
    } else {
      res.send({ message: "product_id required!." });
    }
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};
