import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import useUserAPI from "../../hooks/useUserAPI";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
});

describe("Given a useAPI hook", () => {
  describe("When its function 'checkEmail' is called", () => {
    test("If the email already exists on the database it should return false", async () => {
      const {
        result: {
          current: { checkEmail },
        },
      } = renderHook(useUserAPI, {
        wrapper: Wrapper,
      });

      global.fetch = jest.fn().mockResolvedValue({
        status: 403,
      });
      const result = await checkEmail("fake@email.com");
      expect(result).toBe(false);
    });
    test("If the email doesn't exists on the database it should return true", async () => {
      const {
        result: {
          current: { checkEmail },
        },
      } = renderHook(useUserAPI, {
        wrapper: Wrapper,
      });
      global.fetch = jest.fn().mockResolvedValue({
        status: 200,
      });
      const result = await checkEmail("fake@email.com");
      expect(result).toBe(true);
    });
  });
  describe("When its function 'checkName' is called", () => {
    test("If the name already exists on the database it should return false", async () => {
      const {
        result: {
          current: { checkName },
        },
      } = renderHook(useUserAPI, {
        wrapper: Wrapper,
      });
      global.fetch = jest.fn().mockResolvedValue({
        status: 403,
      });
      const result = await checkName("fake user name");
      expect(result).toBe(false);
    });
    test("If the name doesn't exists on the database it should return true", async () => {
      const {
        result: {
          current: { checkName },
        },
      } = renderHook(useUserAPI, {
        wrapper: Wrapper,
      });
      global.fetch = jest.fn().mockResolvedValue({
        status: 200,
      });
      const result = await checkName("fake user name");
      expect(result).toBe(true);
    });
  });

  describe("When its function 'userLogin' is called", () => {
    test("If either the user name or password are wrong, it will return false", async () => {
      const {
        result: {
          current: { userLogin },
        },
      } = renderHook(useUserAPI, {
        wrapper: Wrapper,
      });
      global.fetch = jest.fn().mockResolvedValue({
        status: 403,
      });
      const result = await userLogin("test", "Test1", false);
      expect(result).toBe(false);
    });
  });

  describe("When its function 'userRegister' is called", () => {
    const userData = {
      userName: "tester",
      password: "Test1",
      rePassword: "Test1",
      email: "test@test.com",
    };
    test("It will return ", async () => {
      const {
        result: {
          current: { userRegister },
        },
      } = renderHook(useUserAPI, {
        wrapper: Wrapper,
      });
      global.fetch = jest.fn().mockResolvedValue({
        status: 200,
      });
      const result = await userRegister(userData);
      expect(result).toStrictEqual({ status: 200 });
    });
  });
});
