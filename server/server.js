import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();
const app = express();

app.get("/", (req, res) => {
  res.send("Techno Ecom Server is running ! ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Techno Ecom Server is running on port ${PORT}`);
});