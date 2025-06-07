import { dbConfig } from "./config";

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb+srv://${dbConfig.dbUsername}:${dbConfig.dbPassword}@backenddb.jtlqzbb.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log("✅ Connected to MongoDB")
  } catch (error) {
    console.error("❌ Failed to connect to MongoDB", error);
  }
};

export default connectDB;