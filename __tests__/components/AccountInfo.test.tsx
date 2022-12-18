import AccountInfo from "@/components/AccountInfo/AccountInfo";
import { fireEvent, render, screen } from "@testing-library/react";
import { mockUser } from "../../mocks/testMocks";
import { Provider } from "react-redux";
import { store } from "../../store/store";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
  global.fetch = jest.fn().mockReturnValue({
    status: 200,
    json: jest.fn().mockReturnValue({ user: mockUser }),
  });
});

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

describe("Given an AccountInfo component", () => {
  describe("When instantiated", () => {
    test("It should render a list with user info", () => {
      render(<AccountInfo />, { wrapper: Wrapper });
      const listElement = screen.getAllByRole("list");
      expect(listElement[0]).toBeInTheDocument();
    });
  });

  describe("When text is entered in the email or user name input box", () => {
    test("It should activate the 'Update' button", () => {
      render(<AccountInfo />, { wrapper: Wrapper });
      const nameInputElement = screen.getByPlaceholderText(mockUser.userName);
      const emailInputElement = screen.getByPlaceholderText(mockUser.email);
      expect(nameInputElement).toBeInTheDocument();
      expect(emailInputElement).toBeInTheDocument();
      fireEvent.change(nameInputElement, { target: { value: "asd" } });
      fireEvent.change(emailInputElement, { target: { value: "asd" } });
      const updateButton = screen.getAllByRole("button", { name: "Update" });
      expect(updateButton[0].className).toBe("account-info__button");
      expect(updateButton[1].className).toBe("account-info__button");
    });

    test("When text is erased and we are left with an empty string, the 'Update' button should be disabled", () => {
      render(<AccountInfo />, { wrapper: Wrapper });
      const nameInputElement = screen.getByPlaceholderText(mockUser.userName);
      const emailInputElement = screen.getByPlaceholderText(mockUser.email);
      fireEvent.change(nameInputElement, { target: { value: "asd" } });
      fireEvent.change(emailInputElement, { target: { value: "asd" } });
      const updateButton = screen.getAllByRole("button", { name: "Update" });
      expect(updateButton[0].className).toBe("account-info__button");
      expect(updateButton[1].className).toBe("account-info__button");
      fireEvent.change(nameInputElement, { target: { value: "" } });
      fireEvent.change(emailInputElement, { target: { value: "" } });
      const newButtons = screen.getAllByRole("button", { name: "Update" });
      expect(newButtons[0].className).toBe("account-info__button--disabled");
      expect(newButtons[1].className).toBe("account-info__button--disabled");
    });
  });

  describe("When a new user name is entered and update button is pressed", () => {
    test("If user name is correct and available it should call the getLoggedUser function to update the info in component", () => {
      render(<AccountInfo />, { wrapper: Wrapper });
      const nameInputElement = screen.getByPlaceholderText(mockUser.userName);
      fireEvent.change(nameInputElement, {
        target: { value: "validUserName" },
      });
      const updateButton = screen.getAllByRole("button", { name: "Update" });
      fireEvent.click(updateButton[0]);
    });

    test("If user name is invalid, update button should be disabled and an alert message should appear", () => {
      render(<AccountInfo />, { wrapper: Wrapper });
      const nameInputElement = screen.getByPlaceholderText(mockUser.userName);
      fireEvent.change(nameInputElement, {
        target: { value: "invaliD!!!" },
      });
      const updateButton = screen.getAllByRole("button", { name: "Update" });
      fireEvent.click(updateButton[0]);
      const newButtons = screen.getAllByRole("button", { name: "Update" });
      expect(newButtons[0].className).toBe("account-info__button--disabled");
    });
  });

  describe("When a new email is entered and update button is pressed", () => {
    test("If email is correct and available it should call the getLoggedUser function to update the info in component", () => {
      render(<AccountInfo />, { wrapper: Wrapper });
      const emailInputElement = screen.getByPlaceholderText(mockUser.email);
      fireEvent.change(emailInputElement, {
        target: { value: "an@email.net" },
      });
      const updateButton = screen.getAllByRole("button", { name: "Update" });
      fireEvent.click(updateButton[1]);
    });

    test("If email is invalid, update button should be disabled and an alert message should appear", () => {
      render(<AccountInfo />, { wrapper: Wrapper });
      const emailInputElement = screen.getByPlaceholderText(mockUser.email);
      fireEvent.change(emailInputElement, {
        target: { value: "invaliD!!!" },
      });
      const updateButton = screen.getAllByRole("button", { name: "Update" });
      fireEvent.click(updateButton[1]);
      const newButtons = screen.getAllByRole("button", { name: "Update" });
      expect(newButtons[0].className).toBe("account-info__button--disabled");
    });
  });
});
