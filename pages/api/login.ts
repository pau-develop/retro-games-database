import { createToken, hashCompare } from "database/authentication";
import connectDB from "database/connectDB";
import User from "database/User";
import { JwtPayload } from "jsonwebtoken";
import { NextApiRequest, NextApiResponse } from "next";

const login = async (request: NextApiRequest, response: NextApiResponse) => {
  await connectDB("retro-games");
  const user = request.body;
  const result = await User.find({ userName: user.userName });
  if (result.length <= 0) return response.status(403).json({});
  const dbUser = result[0];
  const passwordValidation = await hashCompare(user.password, dbUser.password);
  if (passwordValidation) {
    const payload: JwtPayload = {
      _id: dbUser._id,
      userName: dbUser.userName,
      email: dbUser.email,
      verified: dbUser.verified,
    };
    const token = createToken(payload);
    return response.status(200).json({ token: token });
  }

  return response
    .status(403)
    .json({ message: "Incorrect user name or password" });
};

export default login;
