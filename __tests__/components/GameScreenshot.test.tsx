import GameScreenshot from "@/components/GameScreenshot/GameScreenshot";
import { fireEvent, getByTestId, render, screen } from "@testing-library/react";

const screenshots = [
  "/virtua01.png",
  "/virtua02.png",
  "/virtua03.png",
  "/virtua04.png",
  "/virtua05.png",
];

describe("Given a GameScreenshot component", () => {
  describe("When instantiated", () => {
    test("It should render three images from the array received as props", () => {
      render(<GameScreenshot screenshots={screenshots} action={() => null} />);
      const imageElement = screen.getByAltText("/virtua01.png");
      const imageElement2 = screen.getByAltText("/virtua02.png");
      const imageElement3 = screen.getByAltText("/virtua03.png");

      expect(imageElement).toBeInTheDocument();
      expect(imageElement2).toBeInTheDocument();
      expect(imageElement3).toBeInTheDocument();
    });
  });

  describe("When 'next' button is pressed", () => {
    test("It should shift one position of the array of images shown ", () => {
      render(<GameScreenshot screenshots={screenshots} action={() => null} />);

      const buttonNext = screen.getByTestId("next-icon");
      fireEvent.click(buttonNext);
      const imageElement4 = screen.getByAltText("/virtua04.png");
      expect(imageElement4).toBeInTheDocument();
    });
  });

  describe("When 'back' button is pressed", () => {
    test("It should shift one position of the array of images shown ", () => {
      render(<GameScreenshot screenshots={screenshots} action={() => null} />);

      const buttonNext = screen.getByTestId("next-icon");
      fireEvent.click(buttonNext);
      const imageElement4 = screen.getByAltText("/virtua04.png");
      expect(imageElement4).toBeInTheDocument();
      const buttonBack = screen.getByTestId("back-icon");
      fireEvent.click(buttonBack);
      const imageElement = screen.getByAltText("/virtua01.png");
      expect(imageElement).toBeInTheDocument();
    });
  });

  describe("When clicking on an image", () => {
    test("it should call the action received as props (handled by parent)", () => {
      const mockAction = jest.fn();
      render(<GameScreenshot screenshots={screenshots} action={mockAction} />);
      const imageElement = screen.getByAltText("/virtua01.png");
      const imageElement2 = screen.getByAltText("/virtua02.png");
      const imageElement3 = screen.getByAltText("/virtua03.png");
      fireEvent.click(imageElement);
      fireEvent.click(imageElement2);
      fireEvent.click(imageElement3);
      expect(mockAction).toHaveBeenCalled();
    });

    test("And it should do the same for mobile displays", () => {
      window.innerWidth = 500;
      const mockAction = jest.fn();
      render(<GameScreenshot screenshots={screenshots} action={mockAction} />);
      const imageElement = screen.getByAltText("/virtua02.png");
      fireEvent.click(imageElement);
      expect(mockAction).toHaveBeenCalled();
    });
  });
});
