import Link from "next/link";

import HeaderStyled from "./HeaderStyled";

import React, { useEffect, useState } from "react";
import UserDropDown from "../UserDropDown/UserDropDown";
import { getElementPos, shouldRenderDropDown } from "./HeaderFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faUser } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "store/store";
import { useSelector, useDispatch } from "react-redux";
import { IUser } from "../../interfaces/interfaces";
import { decodeToken } from "../../database/authentication";
import { loginUserAction } from "../../store/actions";
const caretIcon = <FontAwesomeIcon icon={faCaretDown} />;
const userIcon = <FontAwesomeIcon icon={faUser} />;

const initialDropDownPosition = {
  top: 0,
  bot: 0,
  left: 0,
  right: 0,
};

const Header = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector<RootState>((state) => state.user) as IUser;
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState(
    initialDropDownPosition
  );

  useEffect(() => {
    checkForToken();
  }, []);

  const checkForToken = () => {
    const token = localStorage.getItem("token");
    if (token === null) return;
    const user = decodeToken(token);
    dispatch(loginUserAction(user));
  };

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
          {user.userName === "" ? (
            <li
              onMouseLeave={(event) => handleMouseLeave(event)}
              onMouseEnter={(event) => getElementPosition(event)}
            >
              Guest<i>{caretIcon}</i>
            </li>
          ) : (
            <li
              onMouseLeave={(event) => handleMouseLeave(event)}
              onMouseEnter={(event) => getElementPosition(event)}
            >
              Account<i>{userIcon}</i>
            </li>
          )}
        </ul>
        {accountDropDown && (
          <UserDropDown
            action={(shouldRender) => setAccountDropDown(shouldRender)}
            type={user.userName !== "" ? "user" : "guest"}
          />
        )}
      </nav>
    </HeaderStyled>
  );
};

export default Header;
