import connectDB from "database/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (request: NextApiRequest, response: NextApiResponse) => {
  const client = await connectDB();
  const db = client.db("retro-games");
  try {
    const newUser = JSON.parse(request.body);
    const result = await db.collection("users").insertOne({
      userName: newUser.userName,
      password: newUser.password,
      email: newUser.email,
    });
    response.json({ result });
  } catch (error) {
    response.json({ error });
  }
};

export default register;
