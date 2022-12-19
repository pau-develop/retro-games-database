import { verifyToken } from "database/authentication";
import connectDB from "database/connectDB";
import { User } from "database/Models";
import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const updateCard = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  await connectDB("retro-games");
  const newCard = request.body;
  const headers = request.headers;
  const token = headers.authorization?.slice(7, headers.authoritzation?.length);
  const tokenInfo = (await verifyToken(token as string)) as JwtPayload;
  try {
    const myUser = await User.findOneAndUpdate(
      { _id: tokenInfo._id },
      { $set: { card: newCard } }
    );
    return response.status(200).json({ message: "card updated" });
  } catch (error) {
    return response.status(403).json({ message: "something went wrong" });
  }
};

export default updateCard;
