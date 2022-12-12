import {
  createToken,
  hashCompare,
  hashPass,
} from "../../database/authentication";
import { JwtPayload } from "jsonwebtoken";

const mockSignature = jest.fn().mockReturnValue("#");
const mockVerification = jest.fn().mockReturnValue(true);

jest.mock("jsonwebtoken", () => ({
  sign: (payload: JwtPayload) => mockSignature(payload),
  verify: (token: string) => mockVerification(token),
}));

describe("Given a hashPass function", () => {
  describe("When instantiated with a string as an argument", () => {
    test("Then it should return a promise with a string that is a hash of the argument provided", async () => {
      const password = "admin";
      const hashStart = "$2a$10$";

      const result = await hashPass(password);

      expect(result.startsWith(hashStart)).toBe(true);
      expect(result.length > 10).toBe(true);
    });
  });
});

describe("Given a hasCompare function", () => {
  describe("When called a password and a string", () => {
    test("Then it should return false if the password doesn't match the second string", async () => {
      const password = "admin";

      const result = await hashCompare(password, password);

      expect(result).toBe(false);
    });

    test("Then it should return true if the password matches the second string, being it the correct hash", async () => {
      const password = "admin";
      const hash = await hashPass(password);

      const result = await hashCompare(password, hash);

      expect(result).toBe(true);
    });
  });
});

describe("Given a createToken function", () => {
  describe("When called with a payload as an argument", () => {
    test("Then it should call jwt and return its returned value", () => {
      const mockToken: JwtPayload = {
        id: "1234",
        name: "aaa",
      };

      const returnedValue = createToken(mockToken);

      expect(mockSignature).toHaveBeenCalledWith(mockToken);
      expect(returnedValue).toBe("#");
    });
  });
});
