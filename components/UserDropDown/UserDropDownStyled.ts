import styled from "styled-components";

const UserDropDownStyled = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.primaryColor};
  border-radius: 10px;
  right: 0%;
  top: 150%;
  padding: 5px;
  li {
    text-align: center;
    width: 100px;
  }
`;

export default UserDropDownStyled;
