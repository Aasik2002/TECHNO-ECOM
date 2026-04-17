import express from "express";
import { createProduct, getProducts } from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// பொருட்களைப் பார்க்க எல்லாரையும் அனுமதிப்போம், ஆனால் உருவாக்க அட்மின் மட்டும் தான் முடியும்
router.route("/").get(getProducts).post(protect, admin, createProduct);

export default router;