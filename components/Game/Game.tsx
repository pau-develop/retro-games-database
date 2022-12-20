import GameInfo from "../GameInfo/GameInfo";
import GameScreenshot from "../GameScreenshot/GameScreenshot";
import ImageGallery from "../ImageGallery/ImageGallery";
import MainWrap from "../MainWrap/MainWrap";
import GameStyled from "./GameStyled";
import { useState } from "react";

const game = {
  system: "Sega Mega Drive",
  title: "Virtua Racing",
  publisher: "SEGA",
  release: "18/03/1994",
  releasePrice: "9800¥",
  developer: ["Sega AM2", "Sega AM4", "Sega CS"],
  genre: ["Racing", "Sports"],
  players: "1-2",
  screenshots: [
    "/virtua01.png",
    "/virtua02.png",
    "/virtua03.png",
    "/virtua04.png",
    "/virtua05.png",
  ],
};

const Game = (): JSX.Element => {
  const [gallery, setGallery] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleImageClick = (screenshots: string[], currentIndex: number) => {
    setGallery(screenshots);
    setCurrentIndex(currentIndex);
  };

  const handleImageClose = () => {
    console.log("hola");
    setGallery([]);
  };

  return (
    <MainWrap>
      <GameStyled className="game">
        <h1 className="game-info__title">{game.title}</h1>
        <GameInfo game={game} />
        <GameScreenshot
          screenshots={game.screenshots}
          action={handleImageClick}
        />
      </GameStyled>
      <>
        {gallery.length > 0 && (
          <ImageGallery
            screenshots={gallery}
            currentIndex={currentIndex}
            action={handleImageClose}
          />
        )}
      </>
    </MainWrap>
  );
};

export default Game;
