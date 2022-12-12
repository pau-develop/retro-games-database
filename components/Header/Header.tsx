import Link from "next/link";
import { RootState } from "store/store";
import HeaderStyled from "./HeaderStyled";
import { useSelector } from "react-redux";
import { IUser } from "interfaces/interfaces";
import { useState } from "react";
import UserDropDown from "../UserDropDown/UserDropDown";

const Header = (): JSX.Element => {
  // const user = useSelector<RootState>((state) => state.user) as IUser;
  // console.log(user);
  const [accountDropDown, setAccountDropDown] = useState(false);
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">RETRO GAMES DATABASE</h1>
      <nav className="header__navigation">
        <ul>
          <li>
            <Link href="/home">Home</Link>
          </li>

          <li onClick={() => setAccountDropDown(!accountDropDown)}>
            <span>Guest</span>
            {accountDropDown && <UserDropDown />}
          </li>
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
