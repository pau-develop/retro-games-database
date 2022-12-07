import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string, {});

const connectDB = async () => {
  const myClient = await client.connect();
  return myClient;
};

export default connectDB;
