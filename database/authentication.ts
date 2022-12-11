import bcrypt from "bcryptjs";
import jwt, { JwtPayload } from "jsonwebtoken";

export const hashPass = (pass: string) => {
  const salt = 10;
  return bcrypt.hash(pass, salt);
};

export const hashCompare = (text: string, hash: string) =>
  bcrypt.compare(text, hash);

export const createToken = (payload: JwtPayload) =>
  jwt.sign(payload, process.env.SECRET as string);
