import RegisterFormName from "@/components/Form/RegisterFormName";
import { fireEvent, render, screen } from "@testing-library/react";

const mockCheckName = jest.fn().mockReturnValue(false);

jest.mock("../../hooks/useUserAPI", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUserAPI"),
  default: () => ({
    checkName: () => mockCheckName(),
  }),
}));

describe("Given a RegisterFormName component", () => {
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
    test("It should render an input box with the placeholder text 'User name'", () => {
      render(
        <RegisterFormName
          actionNext={() => null}
          userData={userDataEmpty}
          actionBack={() => null}
        />
      );
      const inputElement = screen.getByPlaceholderText("User name");
      expect(inputElement).toBeInTheDocument();
    });

    test("If the userData received as props is not empty, it should fill the inputBox with userData", () => {
      render(
        <RegisterFormName
          actionNext={() => null}
          userData={userData}
          actionBack={() => null}
        />
      );
      const expectedValue = userData.userName;
      const inputElement = screen.getByRole("textbox");
    });
  });

  describe("If name field is left empy", () => {
    test("It should display an error message", () => {
      render(
        <RegisterFormName
          actionNext={() => null}
          userData={userDataEmpty}
          actionBack={() => null}
        />
      );
      const inputElement = screen.getByPlaceholderText("User name");
      const submitButton = screen.getByRole("button", { name: "Submit" });

      fireEvent.click(submitButton);

      const alertMessage = screen.getByText("⚠ User name field is mandatory");
    });
  });

  describe("When input is not a valid user name", () => {
    test("It should display an error message", () => {
      render(
        <RegisterFormName
          actionNext={() => null}
          userData={userDataEmpty}
          actionBack={() => null}
        />
      );
      const inputElement = screen.getByPlaceholderText("User name");
      const submitButton = screen.getByRole("button", { name: "Submit" });
      fireEvent.change(inputElement, {
        target: { value: "!" },
      });
      fireEvent.click(submitButton);
      let alertMessage = screen.getByText("⚠ Must be 3-15 characters long");
      expect(alertMessage).toBeInTheDocument();
      alertMessage = screen.getByText("⚠ Only letters and numbers allowed");
      expect(alertMessage).toBeInTheDocument();
    });
  });

  describe("When input is a valid user name", () => {
    test("If user name exists on the DB, an error message should be displayed", async () => {
      render(
        <RegisterFormName
          actionNext={() => null}
          userData={userDataEmpty}
          actionBack={() => null}
        />
      );
      const inputElement = screen.getByPlaceholderText("User name");
      const submitButton = screen.getByRole("button", { name: "Submit" });
      fireEvent.change(inputElement, {
        target: { value: "User123" },
      });

      fireEvent.click(submitButton);

      expect(mockCheckName).toHaveBeenCalled();
    });
  });
});
