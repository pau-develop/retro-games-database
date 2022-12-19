import Link from "next/link";
import NavDropDownSyled from "./NavDropDownStyled";

interface NavDropDownProps {
  actionClose: () => void;
}

const NavDropDown = ({ actionClose }: NavDropDownProps): JSX.Element => {
  return (
    <NavDropDownSyled>
      <>
        <li>
          <Link href="/game" onClick={actionClose}>
            Game
          </Link>
        </li>
      </>
    </NavDropDownSyled>
  );
};

export default NavDropDown;
