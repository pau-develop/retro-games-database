import { verifyToken } from "database/authentication";
import connectDB from "database/connectDB";
import User from "database/User";
import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const updateCountry = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  await connectDB("retro-games");
  const newCountry = request.body;
  const headers = request.headers;
  const token = headers.authorization?.slice(7, headers.authoritzation?.length);
  const tokenInfo = (await verifyToken(token as string)) as JwtPayload;
  try {
    await User.findOneAndUpdate(
      { _id: tokenInfo._id },
      { $set: { country: newCountry } }
    );
    return response.status(200).json({ message: "email updated" });
  } catch (error) {
    return response.status(403).json({ message: "somethings went wrong" });
  }
};

export default updateCountry;
