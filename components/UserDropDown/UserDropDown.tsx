import Link from "next/link";
import UserDropDownStyled from "./UserDropDownStyled";

const UserDropDown = (): JSX.Element => {
  return (
    <UserDropDownStyled>
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
