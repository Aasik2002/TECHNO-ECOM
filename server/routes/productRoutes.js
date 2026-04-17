import express from "express";
import { 
  createProduct, 
  getProducts, 
  getProductById, 
  updateProduct, 
  deleteProduct 
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// 1. எல்லா பொருட்களையும் பார்க்க (GET) மற்றும் புதிய பொருளை உருவாக்க (POST - Admin Only)
router.route("/")
  .get(getProducts)
  .post(protect, admin, createProduct);

// 2. ஒரு குறிப்பிட்ட பொருளைப் பார்க்க (GET), திருத்த (PUT - Admin Only) மற்றும் நீக்க (DELETE - Admin Only)
router.route("/:id")
  .get(getProductById)
  .put(protect, admin, updateProduct)
  .delete(protect, admin, deleteProduct);

export default router;