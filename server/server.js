import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js"; // 1. இந்த வரியைச் சேர்க்கவும்!

dotenv.config();

// Connect to Database
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", userRoutes); 

app.get("/", (req, res) => {
  res.send("Techno Ecom Server is running ! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Techno Ecom Server is running on port ${PORT}`);
});