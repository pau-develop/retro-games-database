import bcrypt from "bcryptjs";

const hashPass = (pass: string) => {
  const salt = 10;
  return bcrypt.hash(pass, salt);
};

export default hashPass;
