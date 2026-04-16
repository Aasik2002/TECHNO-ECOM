import express from "express";
// Import both functions from the controller
import { registerUser, authUser } from "../controllers/userController.js";

const router = express.Router();

// Define Route for Registration
router.post("/register", registerUser);

// Define Route for Login
router.post("/login", authUser);

export default router;