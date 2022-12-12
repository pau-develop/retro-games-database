import Link from "next/link";
import { RootState } from "store/store";
import HeaderStyled from "./HeaderStyled";
import { useSelector } from "react-redux";
import { IUser } from "interfaces/interfaces";

const Header = (): JSX.Element => {
  // const user = useSelector<RootState>((state) => state.user) as IUser;
  // console.log(user);
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
