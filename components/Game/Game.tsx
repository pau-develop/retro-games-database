import GameStyled from "./GameStyled";

const Game = (): JSX.Element => {
  const game = {
    title: "Virtua Racing",
    publisher: "SEGA",
    release: "18/03/1994",
    releasePrice: "9800¥",
  };

  return (
    <GameStyled className="game">
      <h2>{game.title}</h2>
    </GameStyled>
  );
};

export default Game;
