import connectDB from "database/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (request: NextApiRequest, response: NextApiResponse) => {
  const client = await connectDB();
  const db = client.db("retro-games");
  console.log(request.body);

  const newUser = request.body;
  console.log(newUser);
  const result = await db.collection("users").insertOne({
    userName: newUser.userName,
    password: newUser.password,
    email: newUser.email,
  });
  response.json({ result });
};

export default register;
