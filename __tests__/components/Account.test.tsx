import Account from "@/components/Account/Account";
import { render, screen } from "@testing-library/react";
import { mockUser } from "../../mocks/testMocks";
import { Provider } from "react-redux";
import { store } from "../../store/store";

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
      global.fetch = jest.fn().mockReturnValue({
        status: 200,
        json: jest.fn().mockReturnValue({ user: mockUser }),
      });
      render(<Account />, { wrapper: Wrapper });
      const heading = screen.getByRole("heading", { name: "Account Info" });
      expect(heading).toBeInTheDocument();
    });
  });
});
