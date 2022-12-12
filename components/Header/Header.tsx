import Link from "next/link";
import { RootState } from "store/store";
import HeaderStyled from "./HeaderStyled";
import { useSelector } from "react-redux";
import { IUser } from "interfaces/interfaces";
import React, { useState } from "react";
import UserDropDown from "../UserDropDown/UserDropDown";
import { getElementPos, shouldRenderDropDown } from "./HeaderFunctions";

const initialDropDownPosition = {
  top: 0,
  bot: 0,
  left: 0,
  right: 0,
};

const Header = (): JSX.Element => {
  // const user = useSelector<RootState>((state) => state.user) as IUser;
  // console.log(user);
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState(
    initialDropDownPosition
  );

  const getElementPosition = (event: React.MouseEvent<HTMLElement>) => {
    const element = getElementPos(event);
    setAccountDropDown(true);
    setDropDownPosition(element);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    const result = shouldRenderDropDown(event, dropDownPosition, "top");
    if (!result) return setAccountDropDown(false);
  };

  return (
    <HeaderStyled className="header">
      <h1 className="header__title">RETRO GAMES DATABASE</h1>
      <nav className="header__navigation">
        <ul className="header__list">
          <li>
            <Link href="/home">Home</Link>
          </li>

          <li
            onMouseLeave={(event) => handleMouseLeave(event)}
            onMouseEnter={(event) => getElementPosition(event)}
          >
            Guest
          </li>
        </ul>
        {accountDropDown && (
          <UserDropDown
            action={(shouldRender) => setAccountDropDown(shouldRender)}
          />
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;
