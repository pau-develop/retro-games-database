import styled from "styled-components";

const NavDropDownSyled = styled.ul`
  position: fixed;
  border-radius: 0 10px 10px 0;
  top: 6.5%;
  width: 49.5%;
  padding: 10px;
  background-color: ${(props) => props.theme.backgroundAltColor};
  a:-webkit-any-link {
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    text-decoration: none;
  }
  li {
    color: ${(props) => props.theme.fontColor};
    width: 100%;
    padding: 5%;
    text-align: right;
  }

  li:hover {
    cursor: pointer;
  }
`;

export default NavDropDownSyled;
