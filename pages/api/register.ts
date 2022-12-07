import connectDB from "database/connectDB";
import hashPass from "database/hashPass";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (request: NextApiRequest, response: NextApiResponse) => {
  const client = await connectDB();
  const db = client.db("retro-games");
  const newUser = request.body;
  newUser.password = await hashPass(newUser.password);
  const result = await db.collection("users").insertOne({
    userName: newUser.userName,
    password: newUser.password,
    email: newUser.email,
  });
  response.json({ result });
};

export default register;
