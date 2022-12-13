import Account from "@/components/Account/Account";
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

describe("Given an Account component", () => {
  describe("When instantiated", () => {
    test("It should render an Account Info section", () => {
      render(<Account />, { wrapper: Wrapper });
      const heading = screen.getByRole("heading", { name: "Account Info" });
      expect(heading).toBeInTheDocument();
    });
  });
});
