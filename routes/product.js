import express from "express";
import ProductController from "../controllers/product.js";
const productRouter = express.Router();

const productController = new ProductController();

productRouter.get("/", productController.getAllProducts)
productRouter.get("/:id", productController.getProductDetail);
productRouter.post("/", productController.createProduct);
productRouter.put("/:id", productController.updateProduct);
productRouter.delete("/:id", productController.deleleProduct);

export default productRouter;