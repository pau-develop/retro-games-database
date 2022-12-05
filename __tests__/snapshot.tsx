import { render } from "@testing-library/react";
import Home from "../components/Home/Home";

it("renders homepage unchanged", () => {
  const { container } = render(<Home />);
  expect(container).toMatchSnapshot();
});
