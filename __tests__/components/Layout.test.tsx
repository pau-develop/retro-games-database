import Layout from "@/components/Layout/Layout";
import { render, screen } from "@testing-library/react";

describe("Given a Layout component", () => {
  describe("When instantiated", () => {
    test("It should render the children component received as props", () => {
      const mockComponent: JSX.Element = <h1>MOCK</h1>;
      render(<Layout children={mockComponent} />);
      const heading = screen.getByRole("heading", { name: "MOCK" });
      expect(heading).toBeInTheDocument();
    });
  });
});
