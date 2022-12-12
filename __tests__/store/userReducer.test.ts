import { IUser } from "../../interfaces/interfaces";
import { loginUserAction } from "../../store/actions";
import userReducer from "../../store/userReducer";
import { mockUser } from "../../mocks/testMocks";

describe("Given a userReducer", () => {
  describe("When called with a loginUser action", () => {
    test("It should replace the store user state with the user received as payload", () => {
      const user: IUser = mockUser;

      const action = loginUserAction(user);
      const result = userReducer(user, action);

      expect(result).toStrictEqual(user);
    });
  });
  describe("When its called with an unknown action", () => {
    test("It should return its current state", () => {
      const user: IUser = mockUser;

      const action = loginUserAction(user);
      const result = userReducer(user, action);

      expect(result).toStrictEqual(user);

      const unknownAction = {
        type: "unknown",
      };
      const newResult = userReducer(user, unknownAction);

      expect(newResult).toStrictEqual(user);
    });
  });
});
