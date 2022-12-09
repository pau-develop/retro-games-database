import connectDB from "database/connectDB";
import User from "database/User";
import { NextApiRequest, NextApiResponse } from "next";

const checkEmail = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const client = await connectDB();
  const email = request.body;
  const result = await User.find({ email: email });
  if (result.length > 0) response.status(403).json({ state: false });
  else response.status(200).json({ state: true });
};

export default checkEmail;
