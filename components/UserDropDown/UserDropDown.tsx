import useUserAPI from "../../hooks/useUserAPI";
import Link from "next/link";
import { useState } from "react";
import { getElementPos, shouldRenderDropDown } from "../Header/HeaderFunctions";
import UserDropDownStyled from "./UserDropDownStyled";
import useWidth from "hooks/useWidth";

const initialDropDownPosition = {
  top: 0,
  bot: 0,
  left: 0,
  right: 0,
};

interface UserDropDownProps {
  action: (shouldRender: boolean) => void;
  actionClose: () => void;
  type: "guest" | "user";
}

const UserDropDown = ({
  action,
  type,
  actionClose,
}: UserDropDownProps): JSX.Element => {
  const windowWidth = useWidth();
  const { userLogout } = useUserAPI();
  const [dropDownPosition, setDropDownPosition] = useState(
    initialDropDownPosition
  );
  const getElementPosition = (event: React.MouseEvent<HTMLElement>) => {
    if (windowWidth > 720) {
      const element = getElementPos(event);
      setDropDownPosition(element);
    }
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    if (windowWidth > 720) {
      const result = shouldRenderDropDown(event, dropDownPosition, "bot");
      if (!result) return action(false);
    }
  };

  const handleLogout = () => {
    userLogout();
    actionClose();
  };

  return (
    <UserDropDownStyled
      onMouseLeave={(event) => handleMouseLeave(event)}
      onMouseEnter={(event) => getElementPosition(event)}
    >
      {type === "user" && (
        <>
          <li>
            <Link onClick={actionClose} href="/account">
              Settings
            </Link>
          </li>
          <li onClick={handleLogout}>Logout</li>
        </>
      )}
      {type === "guest" && (
        <>
          <li>
            <Link onClick={actionClose} href="/register">
              Register
            </Link>
          </li>
          <li>
            <Link onClick={actionClose} href="/login">
              Login
            </Link>
          </li>
        </>
      )}
    </UserDropDownStyled>
  );
};

export default UserDropDown;
