import { MongoClient } from "mongodb";
import mongoose from "mongoose";

const client = new MongoClient(process.env.MONGODB_URI as string, {});

const connectDB = async () => {
  const myClient = await client.connect();
  await mongoose.connect(process.env.MONGODB_URI as string);
  return myClient;
};

export default connectDB;
