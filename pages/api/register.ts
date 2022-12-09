import connectDB from "database/connectDB";
import hashPass from "database/hashPass";
import User from "database/User";
import mongoose from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (request: NextApiRequest, response: NextApiResponse) => {
  const client = await connectDB();
  const newUser = request.body;
  newUser.password = await hashPass(newUser.password);
  const result = await User.create({
    userName: newUser.userName,
    password: newUser.password,
    email: newUser.email,
    verified: false,
  });
  console.log("RESULT", result);
  response.json({ result });
};

export default register;
