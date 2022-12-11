import RegisterFormEmail from "@/components/Form/RegisterFormEmail";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import useUserAPI from "../../hooks/useUserAPI";

const mockCheckEmail = jest.fn().mockReturnValue(false);

jest.mock("../../hooks/useUserAPI", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUserAPI"),
  default: () => ({
    checkEmail: () => mockCheckEmail(),
  }),
}));

describe("Given a RegisterFormEmail component", () => {
  const userDataEmpty = {
    userName: "",
    password: "",
    rePassword: "",
    email: "",
  };
  const userData = {
    userName: "user",
    password: "password",
    rePassword: "password",
    email: "fake@test.com",
  };
  describe("When instantiated", () => {
    test("It should render an input box with the placeholder text 'Email'", () => {
      render(
        <RegisterFormEmail actionNext={() => null} userData={userDataEmpty} />
      );
      const inputElement = screen.getByPlaceholderText("Email");
      expect(inputElement).toBeInTheDocument();
    });

    test("If the userData received as props is not empty, it should fill the inputBox with userData", () => {
      render(<RegisterFormEmail actionNext={() => null} userData={userData} />);
      const expectedValue = userData.email;
      const inputElement = screen.getByRole("textbox");
    });
  });

  describe("When email field is left empy", () => {
    test("It should display an error message", () => {
      render(
        <RegisterFormEmail actionNext={() => null} userData={userDataEmpty} />
      );
      const inputElement = screen.getByPlaceholderText("Email");
      const nextButton = screen.getByRole("button", { name: "Next" });

      fireEvent.click(nextButton);

      const alertMessage = screen.getByText("⚠ Email field is mandatory");
    });
  });

  describe("When input is not a valid email", () => {
    test("It should display an error message", () => {
      render(
        <RegisterFormEmail actionNext={() => null} userData={userDataEmpty} />
      );
      const inputElement = screen.getByPlaceholderText("Email");
      const nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(inputElement, {
        target: { value: "not a valid email" },
      });
      fireEvent.click(nextButton);

      const alertMessage = screen.getByText(
        "⚠ That is not a valid email address"
      );
    });
  });

  describe("When input is a valid email", () => {
    test("If email exists on the DB, an error message should be displayed", async () => {
      render(
        <RegisterFormEmail actionNext={() => null} userData={userDataEmpty} />
      );
      const inputElement = screen.getByPlaceholderText("Email");
      const nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(inputElement, {
        target: { value: "valid@email.com" },
      });

      fireEvent.click(nextButton);

      expect(mockCheckEmail).toHaveBeenCalled();
    });
  });
});
