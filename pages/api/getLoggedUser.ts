import { verifyToken } from "database/authentication";
import connectDB from "database/connectDB";
import { User } from "database/Models";
import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const getLoggedUser = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  await connectDB("retro-games");
  const headers = request.headers;
  const token = headers.authorization?.slice(7, headers.authoritzation?.length);
  const tokenInfo = (await verifyToken(token as string)) as JwtPayload;
  const result = await User.find({ _id: tokenInfo._id });
  return response.status(200).json({ user: result[0] });
};

export default getLoggedUser;
