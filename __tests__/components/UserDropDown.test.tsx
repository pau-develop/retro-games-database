import UserDropDown from "@/components/UserDropDown/UserDropDown";
import { render, screen } from "@testing-library/react";
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
});

describe("Given a UserDropDown component", () => {
  describe("When instantiated", () => {
    test("It should render a list with two items", () => {
      render(<UserDropDown action={() => null} type={"guest"} />, {
        wrapper: Wrapper,
      });
      const elements = screen.getAllByRole("listitem");
      expect(elements.length).toEqual(2);
    });
  });
});
