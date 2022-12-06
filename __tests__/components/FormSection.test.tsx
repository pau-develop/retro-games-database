import FormSection from "@/components/FormSection/FormSection";
import { render, screen } from "@testing-library/react";

describe("Given a FormSection component", () => {
  describe("When instantiated", () => {
    test("It should render a label and input box with the id and placeholder received as props", () => {
      const textProp = "test text";
      const idProp = "mock-id";
      render(
        <FormSection
          text={textProp}
          id={idProp}
          currentForm={0}
          actionNext={() => null}
          actionBack={() => null}
          actionSubmit={() => null}
        />
      );
      const inputBox = screen.getByPlaceholderText(textProp);
      expect(inputBox).toBeInTheDocument();
    });
  });
});
