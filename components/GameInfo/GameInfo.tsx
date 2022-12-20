import GameInfoStyled from "./GameInfoStyled";

interface GameInfoProps {
  game: any;
}

const GameInfo = ({ game }: GameInfoProps): JSX.Element => {
  return (
    <GameInfoStyled className="game-info">
      <ul className="game-info__items">
        <li>
          <span>System</span>
          <span>{game.system}</span>
        </li>
        <li>
          <span>Publisher</span>
          <span>{game.publisher}</span>
        </li>
        <li>
          <span>Release</span>
          <span>{game.release}</span>
        </li>
        <li>
          <span>Developer</span>
          <div>
            {game.developer.map((dev: string) => (
              <span>{dev}</span>
            ))}
          </div>
        </li>
        <li>
          <span>Genre</span>
          <div>
            {game.genre.map((genre: string) => (
              <span>{genre}</span>
            ))}
          </div>
        </li>
      </ul>
    </GameInfoStyled>
  );
};

export default GameInfo;
