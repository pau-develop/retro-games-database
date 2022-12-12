import Header from "../../components/Header/Header";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../store/store";
import { mockUser } from "../../mocks/testMocks";

jest.mock("../../database/authentication", () => ({
  ...jest.requireActual("../../database/authentication"),

  decodeToken: () => jest.fn().mockReturnValue({ mockUser }),
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

describe("Given a Header component", () => {
  describe("When instantiated", () => {
    test("It should render a heading with the site name", () => {
      render(<Header />, { wrapper: Wrapper });
      const heading = screen.getByRole("heading", {
        name: "RETRO GAMES DATABASE",
      });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When mouse hovers over the 'Guest' item", () => {
    test("It should render a dropdown menu with items 'register' & 'login'", () => {
      render(<Header />, { wrapper: Wrapper });
      const navItems = screen.getAllByRole("listitem");
      fireEvent.mouseOver(navItems[1]);
      const dropMenu = screen.getByText("Register");
      expect(dropMenu).toBeInTheDocument();
    });
  });

  describe("When mouse stops hovering over the 'Guest' nav item", () => {
    test("It should stop rendering the dropdown menu", () => {
      render(<Header />, { wrapper: Wrapper });
      const navItems = screen.getAllByRole("listitem");
      fireEvent.mouseOver(navItems[1]);
      const dropMenu = screen.getByText("Register");
      expect(dropMenu).toBeInTheDocument();
      fireEvent.mouseLeave(navItems[1]);
      expect(dropMenu).not.toBeInTheDocument();
    });
  });

  describe("When mouse stops hovering over the dropdown menu", () => {
    test("It should stop rendering the dropdown menu", () => {
      render(<Header />, { wrapper: Wrapper });
      const navItems = screen.getAllByRole("listitem");
      fireEvent.mouseOver(navItems[1]);
      const dropMenu = screen.getByText("Register");
      expect(dropMenu).toBeInTheDocument();
      fireEvent.mouseOver(dropMenu);
      fireEvent.mouseLeave(dropMenu);
      expect(dropMenu).not.toBeInTheDocument();
    });
  });

  describe("When token is present in localStorage", () => {
    test("It should update the store state, which would change the 'Guest' navigation item to 'Account'", () => {
      window.localStorage.setItem("token", "12345");
      render(<Header />, { wrapper: Wrapper });
    });
  });
});
