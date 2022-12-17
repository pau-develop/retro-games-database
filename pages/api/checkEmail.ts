import connectDB from "database/connectDB";
import { User } from "database/Models";
import { NextApiRequest, NextApiResponse } from "next";

const checkEmail = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  await connectDB("retro-games");
  const email = request.body;
  const result = await User.find({ email: email });
  if (result.length > 0) response.status(403).json({ state: false });
  else response.status(200).json({ state: true });
};

export default checkEmail;
