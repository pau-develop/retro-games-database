import UserDropDown from "@/components/UserDropDown/UserDropDown";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";

const mockUserLogout = jest.fn();

jest.mock("../../hooks/useUserAPI", () => ({
  __esModule: true,
  ...jest.requireActual("../../hooks/useUserAPI"),
  default: () => ({
    userLogout: () => mockUserLogout(),
  }),
}));

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

let Wrapper: ({ children }: WrapperProps) => JSX.Element;

beforeEach(() => {
  Wrapper = ({ children }: WrapperProps): JSX.Element => {
    return <Provider store={store}>{children}</Provider>;
  };
});

describe("Given a UserDropDown component", () => {
  describe("When instantiated", () => {
    test("It should render a list with two items", () => {
      render(
        <UserDropDown
          action={() => null}
          type={"guest"}
          actionClose={() => null}
        />,
        {
          wrapper: Wrapper,
        }
      );
      const elements = screen.getAllByRole("listitem");
      expect(elements.length).toEqual(2);
    });
  });

  describe("When nav item 'Logout' is pressed", () => {
    test("userLogout function should be called", () => {
      render(
        <UserDropDown
          action={() => null}
          type={"user"}
          actionClose={() => null}
        />,
        {
          wrapper: Wrapper,
        }
      );
      const logoutElements = screen.getAllByRole("listitem");

      fireEvent.click(logoutElements[1]);
      expect(mockUserLogout).toHaveBeenCalled();
    });
  });
});
