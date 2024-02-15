import express from "express";
import {
  getProducts,
  reUpdateProducts,
  updateProducts,
} from "../controllers/productsController.js";

const productsRoutes = express.Router();

productsRoutes.get("/getall", getProducts);
productsRoutes.put("/update/:productId", updateProducts);
productsRoutes.put("/reupdate/:productId", reUpdateProducts);

export default productsRoutes;
