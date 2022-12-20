import ImageGalleryStyled from "./ImageGalleryStyled";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
const leftIcon = <FontAwesomeIcon icon={faCircleChevronLeft} />;
const rightIcon = <FontAwesomeIcon icon={faCircleChevronRight} />;
const closeIcon = <FontAwesomeIcon icon={faCircleXmark} />;

interface ImageGalleryProps {
  screenshots: string[];
  currentIndex: number;
  action: () => void;
}

const ImageGallery = ({
  screenshots,
  currentIndex,
  action,
}: ImageGalleryProps) => {
  const [gallIndex, setGallIndex] = useState(currentIndex);
  console.log(screenshots, currentIndex);

  const handleIncrement = () => {
    gallIndex < screenshots.length - 1 && setGallIndex(gallIndex + 1);
  };

  const handleDecrement = () => {
    gallIndex > 0 && setGallIndex(gallIndex - 1);
  };

  return (
    <ImageGalleryStyled className="image-gallery">
      <div className="image-gallery__close">
        <i data-testid="close-icon" onClick={() => action()}>
          {closeIcon}
        </i>
      </div>
      <div className="image-gallery__wrap">
        <i data-testid="back-icon" onClick={() => handleDecrement()}>
          {leftIcon}
        </i>
        <ul>
          <li>
            {screenshots
              .filter((screenshot, index) => index === gallIndex)
              .map((screenshot, index) => (
                <img src={screenshot} alt={screenshot} />
              ))}
          </li>
        </ul>
        <i data-testid="next-icon" onClick={() => handleIncrement()}>
          {rightIcon}
        </i>
      </div>
      <span className="image-gallery__page">{`${gallIndex + 1} / ${
        screenshots.length
      }
      `}</span>
    </ImageGalleryStyled>
  );
};

export default ImageGallery;
