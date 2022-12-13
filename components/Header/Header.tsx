import Link from "next/link";

import HeaderStyled from "./HeaderStyled";

import React, { useEffect, useRef, useState } from "react";
import UserDropDown from "../UserDropDown/UserDropDown";
import { getElementPos, shouldRenderDropDown } from "./HeaderFunctions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import { RootState } from "../../store/store";
import { useSelector, useDispatch } from "react-redux";
import { IUser } from "../../interfaces/interfaces";
import { decodeToken } from "../../database/authentication";
import { loginUserAction } from "../../store/actions";
import useWidth from "hooks/useWidth";
import NavDropDown from "../NavDropDown/NavDropDown";
const hamburgerIcon = <FontAwesomeIcon icon={faBars} />;
const userIcon = <FontAwesomeIcon icon={faUser} />;

const initialDropDownPosition = {
  top: 0,
  bot: 0,
  left: 0,
  right: 0,
};

const Header = (): JSX.Element => {
  const [mobileDisplay, setMobileDisplay] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector<RootState>((state) => state.user) as IUser;
  const [accountDropDown, setAccountDropDown] = useState(false);
  const [mobileAccountDropDown, setMobileAccountDropDown] = useState(false);
  const [navDropDown, setNavDropDown] = useState(false);
  const [dropDownPosition, setDropDownPosition] = useState(
    initialDropDownPosition
  );
  const windowWidth = useWidth();

  useEffect(() => {
    if (checkForToken(localStorage)) return;
    checkForToken(sessionStorage);
  }, []);

  useEffect(() => {
    if (windowWidth > 720 && navDropDown) setNavDropDown(false);
  }, [windowWidth]);

  const checkForToken = (storage: Storage) => {
    const token = storage.getItem("token");
    if (token === null) return false;
    const user = decodeToken(token);
    dispatch(loginUserAction(user));
    return true;
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
    <>
      <HeaderStyled className="header">
        {windowWidth <= 720 ? (
          <>
            <i onClick={() => setNavDropDown(!navDropDown)}>{hamburgerIcon}</i>
            <h1 className="header__title">RETRO GAMES DATABASE</h1>
            <i onClick={() => setMobileAccountDropDown(!mobileAccountDropDown)}>
              {userIcon}
            </i>
          </>
        ) : (
          <>
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
                    Guest<i>{userIcon}</i>
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
                  actionClose={() => setAccountDropDown(false)}
                  action={(shouldRender) => setAccountDropDown(shouldRender)}
                  type={user.userName !== "" ? "user" : "guest"}
                />
              )}
            </nav>
          </>
        )}
      </HeaderStyled>

      {mobileAccountDropDown && (
        <UserDropDown
          actionClose={() => setMobileAccountDropDown(false)}
          action={(shouldRender) => setAccountDropDown(shouldRender)}
          type={user.userName !== "" ? "user" : "guest"}
        />
      )}
      {navDropDown && <NavDropDown actionClose={() => setNavDropDown(false)} />}
    </>
  );
};

export default Header;
