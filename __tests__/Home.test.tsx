import { render, screen } from "@testing-library/react";
import Home from "../components/Home/Home";

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home />);

    const heading = screen.getByRole("heading", {
      name: "Hello",
    });

    expect(heading).toBeInTheDocument();
  });
});
