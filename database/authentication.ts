import bcrypt from "bcryptjs";
import { IUser } from "interfaces/interfaces";
import jwt, { JwtPayload } from "jsonwebtoken";

export const hashPass = (pass: string) => {
  const salt = 10;
  return bcrypt.hash(pass, salt);
};

export const hashCompare = (text: string, hash: string) =>
  bcrypt.compare(text, hash);

export const createToken = (payload: JwtPayload) =>
  jwt.sign(payload, process.env.SECRET as string);

export const decodeToken = (token: string) => {
  const result = jwt.decode(token) as IUser;

  const user: IUser = {
    userName: result.userName,
    email: result.email,
    verified: result.verified,
    token: token,
  };
  return user;
};
