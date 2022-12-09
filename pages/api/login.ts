import connectDB from "database/connectDB";
import User from "database/User";
import { NextApiRequest, NextApiResponse } from "next";

const login = async (request: NextApiRequest, response: NextApiResponse) => {
  const client = await connectDB();
  const user = request.body;
  const result = await User.find({ userName: user.userName });
  if (result.length <= 0) return response.status(403).json({});
  //compare passwords
};

export default login;
