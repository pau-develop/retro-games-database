import GameInfo from "../GameInfo/GameInfo";
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
  };

  return (
    <MainWrap>
      <GameStyled className="game">
        <GameInfo game={game} />
      </GameStyled>
    </MainWrap>
  );
};

export default Game;
