import UserDropDown from "@/components/UserDropDown/UserDropDown";
import { render, screen } from "@testing-library/react";

describe("Given a UserDropDown component", () => {
  describe("When instantiated", () => {
    test("It should render a list with two items", () => {
      render(<UserDropDown action={() => null} type={"guest"} />);
      const elements = screen.getAllByRole("listitem");
      expect(elements.length).toEqual(2);
    });
  });
});
