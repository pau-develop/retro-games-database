import connectDB from "database/connectDB";
import hashPass from "database/hashPass";
import User from "database/User";
import useDate from "hooks/useDate";
import { NextApiRequest, NextApiResponse } from "next";

const register = async (request: NextApiRequest, response: NextApiResponse) => {
  await connectDB("retro-games");
  const newUser = request.body;
  newUser.password = await hashPass(newUser.password);
  const creationDate = useDate();
  console.log(creationDate);
  const result = await User.create({
    userName: newUser.userName,
    password: newUser.password,
    email: newUser.email,
    verified: false,
    country: "",
    birthDate: "",
    memberSince: creationDate,
  });

  response.json({ result });
};

export default register;
