import express from "express";
import { registerUser } from "../controllers/userController.js";

const router = express.Router();

// பயனர் பதிவு செய்யும் முகவரி
router.post("/register", registerUser);

export default router;