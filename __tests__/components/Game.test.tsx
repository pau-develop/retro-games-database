import Game from "@/components/Game/Game";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Given a Game component", () => {
  describe("When instantiated", () => {
    test("It should render GameInfo & GameScreenshot component", () => {
      render(<Game />);
      const publisherElement = screen.getByText("Publisher");
      const imageElement = screen.getByAltText("/virtua01.png");
      expect(publisherElement).toBeInTheDocument();
      expect(imageElement).toBeInTheDocument();
    });

    test("When an image is clicked, the ImageGallery component should be rendered", () => {
      render(<Game />);
      const imageElement = screen.getByAltText("/virtua01.png");
      fireEvent.click(imageElement);
      const buttonElement = screen.getByTestId("close-icon");
      expect(buttonElement).toBeInTheDocument();
    });

    test("When 'X' button is clicked in ImageGallery component, the component should not longer be rendered", () => {
      render(<Game />);
      const imageElement = screen.getByAltText("/virtua01.png");
      fireEvent.click(imageElement);
      const buttonElement = screen.getByTestId("close-icon");
      expect(buttonElement).toBeInTheDocument();
      fireEvent.click(buttonElement);
      expect(buttonElement).not.toBeInTheDocument();
    });
  });
});
