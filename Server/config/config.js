import mongoose from "mongoose";

const connect = async () => {
  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URL}/GHR`);
    if (connection) {
      return console.log("MongoDB connected successfully!");
    }
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};
export default connect;
