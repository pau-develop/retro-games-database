import Form from "@/components/Form/Form";
import { render, screen } from "@testing-library/react";

describe("Given a Form component", () => {
  describe("When instantiated", () => {
    test("It should render four input boxes with label", () => {
      render(<Form />);
      const inputs = screen.getAllByRole("textbox");
      const password = screen.getByLabelText("Password");
      const repassword = screen.getByLabelText("Repeat password");
      expect(inputs.length).toEqual(2);
      expect(password).toBeInTheDocument;
      expect(repassword).toBeInTheDocument;
    });
  });
});
