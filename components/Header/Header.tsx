import Link from "next/link";
import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">RETRO GAMES DATABASE</h1>
      <nav className="header__navigation">
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>

          <li>
            <Link href="/register">Register</Link>
          </li>
          <li>
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
