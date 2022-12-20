import ImageGallery from "@/components/ImageGallery/ImageGallery";
import { fireEvent, render, screen } from "@testing-library/react";

const screenshots = [
  "/virtua01.png",
  "/virtua02.png",
  "/virtua03.png",
  "/virtua04.png",
  "/virtua05.png",
];

describe("Given a ImageGallery component", () => {
  describe("When instantiated", () => {
    test("It should render one of the images received as props", () => {
      render(
        <ImageGallery
          screenshots={screenshots}
          currentIndex={0}
          action={() => null}
        />
      );
      const imageElement = screen.getByAltText("/virtua01.png");
      expect(imageElement).toBeInTheDocument();
    });
  });

  describe("When 'next' button is pressed", () => {
    test("The next image from the array should be rendered", () => {
      render(
        <ImageGallery
          screenshots={screenshots}
          currentIndex={0}
          action={() => null}
        />
      );
      const imageElement = screen.getByAltText("/virtua01.png");
      expect(imageElement).toBeInTheDocument();
      const buttonElement = screen.getByTestId("next-icon");
      fireEvent.click(buttonElement);
      const imageElement2 = screen.getByAltText("/virtua02.png");
    });
  });

  describe("When 'back' button is pressed", () => {
    test("The previous image from the array should be rendered", () => {
      render(
        <ImageGallery
          screenshots={screenshots}
          currentIndex={0}
          action={() => null}
        />
      );
      const buttonElement = screen.getByTestId("next-icon");
      fireEvent.click(buttonElement);
      const imageElement2 = screen.getByAltText("/virtua02.png");
      const backButtonElement = screen.getByTestId("back-icon");
      fireEvent.click(backButtonElement);
      const imageElement = screen.getByAltText("/virtua01.png");
      expect(imageElement).toBeInTheDocument();
    });
  });
});
