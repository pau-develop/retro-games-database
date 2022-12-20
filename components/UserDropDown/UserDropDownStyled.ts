import styled from "styled-components";

const UserDropDownStyled = styled.ul`
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.backgroundColor};
  border: 2px solid ${(props) => props.theme.altFontColor};
  border-radius: 10px;
  right: 0%;
  top: 105%;
  padding: 10px;
  list-style: none;

  li {
    text-align: center;
    width: 100px;
  }
  a:-webkit-any-link {
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    text-decoration: none;
  }
  @media (max-width: 720px) {
    position: fixed;
    border-radius: 10px 0 0 10px;
    top: 6.5%;
    width: 49.5%;
    li {
      color: ${(props) => props.theme.fontColor};
      width: 100%;
      padding: 5%;
      text-align: left;
    }

    li:hover {
      cursor: pointer;
    }
  }
`;

export default UserDropDownStyled;
