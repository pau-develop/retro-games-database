import GameInfo from "../GameInfo/GameInfo";
import GameScreenshot from "../GameScreenshot/GameScreenshot";
import MainWrap from "../MainWrap/MainWrap";
import GameStyled from "./GameStyled";

const Game = (): JSX.Element => {
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

  return (
    <MainWrap>
      <GameStyled className="game">
        <h1 className="game-info__title">{game.title}</h1>
        <GameInfo game={game} />
        <GameScreenshot screenshots={game.screenshots} />
      </GameStyled>
    </MainWrap>
  );
};

export default Game;
