import LoginForm from "@/components/Form/LoginForm";
import { fireEvent, render, screen } from "@testing-library/react";

const mockUserLogin = jest.fn().mockReturnValue(false);

jest.mock("../../hooks/useUserAPI", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUserAPI"),
  default: () => ({
    userLogin: () => mockUserLogin(),
  }),
}));

describe("Given a LoginForm component", () => {
  describe("When instantiated", () => {
    test("It should render a heading with the text 'Login'", () => {
      render(<LoginForm />);
      const heading = screen.getByRole("heading", { name: "Login" });

      expect(heading).toBeInTheDocument();
    });

    test("It should render an input box for user name and another for password'", () => {
      render(<LoginForm />);
      const inputElement = screen.getByPlaceholderText("User name");
      const inputElement2 = screen.getByPlaceholderText("Password");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement2).toBeInTheDocument();
    });
  });

  describe("When user name field is left empy", () => {
    test("It should display an error message", () => {
      render(<LoginForm />);
      const inputElement = screen.getByPlaceholderText("User name");
      const loginButton = screen.getByRole("button", { name: "Login" });

      fireEvent.click(loginButton);

      const alertMessage = screen.getByText("⚠ user name field is mandatory");
    });
  });

  describe("When input is not a valid user name", () => {
    test("It should display an error message", () => {
      render(<LoginForm />);
      const inputElement = screen.getByPlaceholderText("User name");
      const Login = screen.getByRole("button", { name: "Login" });
      fireEvent.change(inputElement, {
        target: { value: "!" },
      });
      fireEvent.click(Login);
      let alertMessage = screen.getByText("⚠ Must be 3-15 characters long");
      expect(alertMessage).toBeInTheDocument();
      alertMessage = screen.getByText("⚠ Only letters and numbers allowed");
      expect(alertMessage).toBeInTheDocument();
    });
  });

  describe("When input is not a valid password", () => {
    test("It should display an error message", () => {
      render(<LoginForm />);
      const inputElement = screen.getByPlaceholderText("User name");
      const inputElement2 = screen.getByPlaceholderText("Password");
      const loginButton = screen.getByRole("button", { name: "Login" });
      fireEvent.change(inputElement, {
        target: { value: "user" },
      });
      fireEvent.change(inputElement2, {
        target: { value: "!" },
      });
      fireEvent.click(loginButton);

      let alertMessage = screen.getByText("⚠ Must be 5-15 characters long");
      expect(alertMessage).toBeInTheDocument();
      alertMessage = screen.getByText("⚠ Must contain one number");
      expect(alertMessage).toBeInTheDocument();
      alertMessage = screen.getByText(
        "⚠ Must contain one lower case character"
      );
      expect(alertMessage).toBeInTheDocument();
    });
  });

  describe("When both password and user name are correct", () => {
    test("The userLoginFunction should be called", () => {
      render(<LoginForm />);
      const inputElement = screen.getByPlaceholderText("User name");
      const inputElement2 = screen.getByPlaceholderText("Password");
      const loginButton = screen.getByRole("button", { name: "Login" });
      fireEvent.change(inputElement, {
        target: { value: "user" },
      });
      fireEvent.change(inputElement2, {
        target: { value: "Password1" },
      });
      fireEvent.click(loginButton);
      expect(mockUserLogin).toHaveBeenCalled();
    });
  });
});
