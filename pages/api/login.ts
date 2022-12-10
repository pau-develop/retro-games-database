import { createToken, hashCompare } from "database/authentication";
import connectDB from "database/connectDB";
import User from "database/User";
import { NextApiRequest, NextApiResponse } from "next";

const login = async (request: NextApiRequest, response: NextApiResponse) => {
  const client = await connectDB();
  const user = request.body;
  const result = await User.find({ userName: user.userName });
  if (result.length <= 0) return response.status(403).json({});
  //compare passwords
  const passwordValidation = await hashCompare(
    user.password,
    result[0].password
  );
  if (passwordValidation) {
    const token = createToken(user.password);
    return response.status(200).json({ token: token });
  }

  return response
    .status(403)
    .json({ message: "Incorrect user name or password" });
};

export default login;
