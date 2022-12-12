import Link from "next/link";
import { useState } from "react";
import { getElementPos, shouldRenderDropDown } from "../Header/HeaderFunctions";
import UserDropDownStyled from "./UserDropDownStyled";

const initialDropDownPosition = {
  top: 0,
  bot: 0,
  left: 0,
  right: 0,
};

interface UserDropDownProps {
  action: (shouldRender: boolean) => void;
}

const UserDropDown = ({ action }: UserDropDownProps): JSX.Element => {
  const [dropDownPosition, setDropDownPosition] = useState(
    initialDropDownPosition
  );
  const getElementPosition = (event: React.MouseEvent<HTMLElement>) => {
    const element = getElementPos(event);
    setDropDownPosition(element);
  };

  const handleMouseLeave = (event: React.MouseEvent<HTMLElement>) => {
    const result = shouldRenderDropDown(event, dropDownPosition, "bot");
    if (!result) return action(false);
  };

  return (
    <UserDropDownStyled
      onMouseLeave={(event) => handleMouseLeave(event)}
      onMouseEnter={(event) => getElementPosition(event)}
    >
      <li>
        <Link href="/register">Register</Link>
      </li>
      <li>
        <Link href="/login">Login</Link>
      </li>
    </UserDropDownStyled>
  );
};

export default UserDropDown;
