import { verifyToken } from "database/authentication";
import connectDB from "database/connectDB";
import User from "database/User";
import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const updateName = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  await connectDB("retro-games");
  const newName = request.body;
  const headers = request.headers;
  const token = headers.authorization?.slice(7, headers.authoritzation?.length);
  const tokenInfo = (await verifyToken(token as string)) as JwtPayload;
  try {
    const updatedUser = await User.findOneAndUpdate(
      { _id: tokenInfo._id },
      { $set: { userName: newName } }
    );
    return response.status(200).json({ message: "user name updated!" });
  } catch (error) {
    return response.status(403).json({ message: "somethings went wrong" });
  }
};

export default updateName;
