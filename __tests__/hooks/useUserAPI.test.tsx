import { renderHook } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import useUserAPI from "../../hooks/useUserAPI";
import { mockUser } from "../../mocks/testMocks";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

jest.mock("../../database/authentication", () => ({
  ...jest.requireActual("../../database/authentication"),

  decodeToken: () => jest.fn().mockReturnValue({ mockUser }),
}));

afterEach(() => {
  jest.clearAllMocks();
});

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

  test("If everything is correct, it will update the store state, the local storage and the session storage", async () => {
    const {
      result: {
        current: { userLogin },
      },
    } = renderHook(useUserAPI, {
      wrapper: Wrapper,
    });
    global.fetch = jest.fn().mockResolvedValue({
      status: 200,
      json: jest.fn().mockReturnValue({ token: "12345" }),
    });
    const result = await userLogin("test", "Test1", true);
    const sessionToken = sessionStorage.getItem("token");
    const localToken = localStorage.getItem("token");
    expect(sessionToken).not.toBeNull();
    expect(localToken).not.toBeNull();
  });

  describe("When its function userLogout is called", () => {
    test("It should remove the token from localStorage and sessionStorage", () => {
      window.localStorage.setItem("token", "12345");
      window.sessionStorage.setItem("token", "12345");
      const {
        result: {
          current: { userLogout },
        },
      } = renderHook(useUserAPI, {
        wrapper: Wrapper,
      });
      userLogout();
      const localToken = localStorage.getItem("token");
      const sessionToken = sessionStorage.getItem("token");

      expect(localToken).toBeNull();
      expect(sessionToken).toBeNull();
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
