import RegisterFormPassword from "@/components/Form/RegisterFormPassword";
import { fireEvent, render, renderHook, screen } from "@testing-library/react";
import useUserAPI from "../../hooks/useUserAPI";

describe("Given a RegisterFormPassword component", () => {
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
    test("It should render an input box with the placeholder text 'Password'", () => {
      render(
        <RegisterFormPassword
          actionBack={() => null}
          actionNext={() => null}
          userData={userDataEmpty}
        />
      );
      const inputElement = screen.getByPlaceholderText("Password");
      const inputElement2 = screen.getByPlaceholderText("Repeat password");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement2).toBeInTheDocument();
    });

    test("if the userData received as props is not empty, is should fill the input box with userData", () => {
      render(
        <RegisterFormPassword
          actionBack={() => null}
          actionNext={() => null}
          userData={userData}
        />
      );
      const inputElement = screen.getByPlaceholderText("Password");
      const inputElement2 = screen.getByPlaceholderText("Repeat password");
      expect(inputElement).toBeInTheDocument();
      expect(inputElement2).toBeInTheDocument();
    });
  });

  describe("When password field is left empy", () => {
    test("It should display an error message", () => {
      render(
        <RegisterFormPassword
          actionBack={() => null}
          actionNext={() => null}
          userData={userDataEmpty}
        />
      );
      const inputElement = screen.getByPlaceholderText("Password");
      const nextButton = screen.getByRole("button", { name: "Next" });

      fireEvent.click(nextButton);

      const alertMessage = screen.getByText("⚠ Password field is mandatory");
    });
  });

  describe("When input is not a valid password", () => {
    test("It should display an error message", () => {
      render(
        <RegisterFormPassword
          actionBack={() => null}
          actionNext={() => null}
          userData={userDataEmpty}
        />
      );
      const inputElement = screen.getByPlaceholderText("Password");
      const nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(inputElement, {
        target: { value: "!" },
      });
      fireEvent.click(nextButton);

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

  describe("When input is a valid password", () => {
    test("If repeat password box is filled with a different value, it should render an error message", () => {
      render(
        <RegisterFormPassword
          actionBack={() => null}
          actionNext={() => null}
          userData={userDataEmpty}
        />
      );
      const inputElement = screen.getByPlaceholderText("Password");
      const inputElement2 = screen.getByPlaceholderText("Repeat password");
      const nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(inputElement, {
        target: { value: "ValidPass1" },
      });
      fireEvent.change(inputElement2, {
        target: { value: "ValidPass2" },
      });
      fireEvent.click(nextButton);
      const alertMessage = screen.getByText("⚠ Passwords do not match");
      expect(alertMessage).toBeInTheDocument();
    });
  });
});
