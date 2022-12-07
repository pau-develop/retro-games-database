import Header from "@/components/Header/Header";
import { render, screen } from "@testing-library/react";

describe("Given a Header component", () => {
  describe("When instantiated", () => {
    test("It should render a heading with the site name", () => {
      render(<Header />);
      const heading = screen.getByRole("heading", {
        name: "RETRO GAMES DATABASE",
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
