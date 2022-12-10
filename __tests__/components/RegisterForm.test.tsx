import RegisterForm from "@/components/Form/RegisterForm";
import { render, screen, fireEvent, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

describe("Given a RegisterForm component", () => {
  describe("When instantiated", () => {
    test("It should render an input box to enter email", () => {
      render(<RegisterForm />);
      const emailBox = screen.getByPlaceholderText("Email");
      expect(emailBox).toBeInTheDocument();
    });

    test("if input field is left empty or the email entered is invalid, an alert message should appear", () => {
      render(<RegisterForm />);
      const emailBox = screen.getByPlaceholderText("Email");
      const nextButton = screen.getByRole("button", { name: "Next" });
      expect(nextButton).toBeInTheDocument();
      fireEvent.click(nextButton);
      let alertMessage = screen.getByText("⚠ Email field is mandatory");
      expect(alertMessage).toBeInTheDocument();
      fireEvent.change(emailBox, { target: { value: "test-test.com" } });
      fireEvent.click(nextButton);
      alertMessage = screen.getByText("⚠ That is not a valid email address");
      expect(alertMessage).toBeInTheDocument();
    });

    test("if the email is valid, a couple input boxes for password will be rendered", async () => {
      render(<RegisterForm />);
      const emailBox = screen.getByPlaceholderText("Email");
      const nextButton = screen.getByRole("button", { name: "Next" });
      global.fetch = jest.fn().mockResolvedValue({
        status: 200,
        json: jest.fn().mockResolvedValue(""),
      });
      act(async () => {
        fireEvent.change(emailBox, { target: { value: "valid@email.com" } });
        await userEvent.click(nextButton);
      });
      await new Promise((r) => setTimeout(r, 2000));
      const passwordBox = screen.getByPlaceholderText("Password");
      expect(passwordBox).toBeInTheDocument();
    });

    test("Upon entering password, if field is left empty, password is invalid, or passwords do not match, an alert message should appear", () => {
      render(<RegisterForm />);
      const emailBox = screen.getByPlaceholderText("Email");
      let nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(emailBox, { target: { value: "valid@email.com" } });
      fireEvent.click(nextButton);
      const passwordBox = screen.getByPlaceholderText("Password");
      const repeatPasswordBox = screen.getByPlaceholderText("Repeat password");
      expect(repeatPasswordBox).toBeInTheDocument();
      nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.click(nextButton);
      let alertMessage = screen.getByText("⚠ Password field is mandatory");
      fireEvent.change(passwordBox, { target: { value: "!" } });
      fireEvent.click(nextButton);
      alertMessage = screen.getByText("⚠ Must contain one number");
      expect(alertMessage).toBeInTheDocument();
      alertMessage = screen.getByText(
        "⚠ Must contain one upper case character"
      );
      expect(alertMessage).toBeInTheDocument();
      alertMessage = screen.getByText(
        "⚠ Must contain one lower case character"
      );
      expect(alertMessage).toBeInTheDocument();
      fireEvent.change(passwordBox, {
        target: { value: "more than 15 characters" },
      });
      fireEvent.click(nextButton);
      alertMessage = screen.getByText("⚠ Must be 5-15 characters long");
      expect(alertMessage).toBeInTheDocument();
      fireEvent.change(passwordBox, {
        target: { value: "aValidPass1" },
      });
      fireEvent.change(repeatPasswordBox, {
        target: { value: "aValidPass2" },
      });
      fireEvent.click(nextButton);
      alertMessage = screen.getByText("⚠ Passwords do not match");
      expect(alertMessage).toBeInTheDocument();
    });

    test("if the password is valid, an input box for user name will be rendered", () => {
      render(<RegisterForm />);
      const emailBox = screen.getByPlaceholderText("Email");
      let nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(emailBox, { target: { value: "valid@email.com" } });
      fireEvent.click(nextButton);
      const passwordBox = screen.getByPlaceholderText("Password");
      const repeatPasswordBox = screen.getByPlaceholderText("Repeat password");
      fireEvent.change(passwordBox, {
        target: { value: "aValidPass1" },
      });
      fireEvent.change(repeatPasswordBox, {
        target: { value: "aValidPass1" },
      });
      nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.click(nextButton);
      const userNameBox = screen.getByPlaceholderText("User name");
      expect(userNameBox).toBeInTheDocument();
    });

    test("Upon entering user name, if field is left empty or user name is invalid, an alert message should appear", () => {
      render(<RegisterForm />);
      const emailBox = screen.getByPlaceholderText("Email");
      let nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(emailBox, { target: { value: "valid@email.com" } });
      fireEvent.click(nextButton);
      const passwordBox = screen.getByPlaceholderText("Password");
      const repeatPasswordBox = screen.getByPlaceholderText("Repeat password");
      fireEvent.change(passwordBox, {
        target: { value: "aValidPass1" },
      });
      fireEvent.change(repeatPasswordBox, {
        target: { value: "aValidPass1" },
      });
      nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.click(nextButton);
      const userNameBox = screen.getByPlaceholderText("User name");
      nextButton = screen.getByRole("button", { name: "Submit" });
      fireEvent.click(nextButton);
      let alertMessage = screen.getByText("⚠ user name field is mandatory");
      expect(alertMessage).toBeInTheDocument();
      fireEvent.change(userNameBox, {
        target: { value: "way too long user name" },
      });
      fireEvent.click(nextButton);
      fireEvent.change(userNameBox, { target: { value: "!" } });
      fireEvent.click(nextButton);
      alertMessage = screen.getByText("⚠ Must be 3-15 characters long");
      expect(alertMessage).toBeInTheDocument();
      alertMessage = screen.getByText("⚠ Only letters and numbers allowed");
      expect(alertMessage).toBeInTheDocument();
    });

    test("If user name is valid, the user data should be updated", () => {
      render(<RegisterForm />);
      global.fetch = jest.fn().mockResolvedValue({});
      const emailBox = screen.getByPlaceholderText("Email");
      let nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(emailBox, { target: { value: "valid@email.com" } });
      fireEvent.click(nextButton);
      const passwordBox = screen.getByPlaceholderText("Password");
      const repeatPasswordBox = screen.getByPlaceholderText("Repeat password");
      fireEvent.change(passwordBox, {
        target: { value: "aValidPass1" },
      });
      fireEvent.change(repeatPasswordBox, {
        target: { value: "aValidPass1" },
      });
      nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.click(nextButton);
      const userNameBox = screen.getByPlaceholderText("User name");
      nextButton = screen.getByRole("button", { name: "Submit" });
      fireEvent.change(userNameBox, { target: { value: "newUser" } });
      fireEvent.click(nextButton);
    });

    test("Clicking on back button, should bring user to previous input menu", () => {
      render(<RegisterForm />);

      let emailBox = screen.getByPlaceholderText("Email");
      const nextButton = screen.getByRole("button", { name: "Next" });
      fireEvent.change(emailBox, { target: { value: "valid@email.com" } });
      fireEvent.click(nextButton);
      const passwordBox = screen.getByPlaceholderText("Password");
      expect(passwordBox).toBeInTheDocument();
      const backButton = screen.getByRole("button", { name: "Go back" });
      fireEvent.click(backButton);
      emailBox = screen.getByPlaceholderText("Email");
      expect(emailBox).toBeInTheDocument();
    });
  });
});
