import bcrypt from "bcryptjs";

const hashPass = (pass: string) => {
  const salt = 10;
  return bcrypt.hash(pass, salt);
};

export const hashCompare = (text: string, hash: string) =>
  bcrypt.compare(text, hash);

export default hashPass;
