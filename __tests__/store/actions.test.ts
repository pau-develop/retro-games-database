import { loginUserAction } from "../../store/actions";
describe("Given a loginUserAction", () => {
  describe("When called with a payload", () => {
    test("it should return the payload and the action type", () => {
      const user = {
        _id: "1",
        userName: "user",
        email: "email@test.com",
        token: "12345",
        verified: false,
      };

      const expectedResult = {
        payload: user,
        type: "user@login",
      };
      const result = loginUserAction(user);
      expect(result).toStrictEqual(expectedResult);
    });
  });
});
