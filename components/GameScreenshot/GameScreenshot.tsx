import GameScreenshotStyled from "./GameScreenshotStyled";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";
import useWidth from "hooks/useWidth";
const leftIcon = <FontAwesomeIcon icon={faCircleChevronLeft} />;
const rightIcon = <FontAwesomeIcon icon={faCircleChevronRight} />;

interface GameScreenshotProps {
  screenshots: string[];
}

const GameScreenshot = ({ screenshots }: GameScreenshotProps) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleIncrement = () => {
    currentIndex < screenshots.length - 1 && setCurrentIndex(currentIndex + 1);
  };

  const handleDecrement = () => {
    currentIndex > 0 && setCurrentIndex(currentIndex - 1);
  };

  const windowWidth = useWidth() as number;

  return (
    <GameScreenshotStyled className="game-screenshot">
      <div className="game-screenshot__wrap">
        <i onClick={() => handleDecrement()}>{leftIcon}</i>

        {windowWidth > 720 ? (
          <ul>
            <li>
              {screenshots
                .filter((screenshot, index) => index === currentIndex - 1)
                .map((screenshot, index) => (
                  <img src={screenshot} />
                ))}
            </li>
            <li>
              {screenshots
                .filter((screenshot, index) => index === currentIndex)
                .map((screenshot, index) => (
                  <img src={screenshot} />
                ))}
            </li>
            <li>
              {screenshots
                .filter((screenshot, index) => index === currentIndex + 1)
                .map((screenshot, index) => (
                  <img src={screenshot} />
                ))}
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              {screenshots
                .filter((screenshot, index) => index === currentIndex)
                .map((screenshot, index) => (
                  <img src={screenshot} />
                ))}
            </li>
          </ul>
        )}

        <i onClick={() => handleIncrement()}>{rightIcon}</i>
      </div>
      <span>{`${currentIndex + 1}/${screenshots.length}`}</span>
    </GameScreenshotStyled>
  );
};

export default GameScreenshot;
