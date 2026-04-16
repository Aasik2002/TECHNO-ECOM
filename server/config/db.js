import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Database Connected: ${conn.connection.host} ✅`);
  } catch (error) {
    console.error(`Error: ${error.message} ❌`);
    process.exit(1); // இணைக்க முடியாவிட்டால் சர்வரை நிறுத்திவிடு
  }
};

export default connectDB;