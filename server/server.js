import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js"; // இதைப் புதிதாகச் சேர்க்கவும்

dotenv.config();

// Connect to Database
connectDB(); // இதைச் சேர்க்கவும்

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Techno Ecom Server is running ! 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Techno Ecom Server is running on port ${PORT}`);
});