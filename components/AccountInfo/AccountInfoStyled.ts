import styled from "styled-components";

const AccountInfoStyled = styled.div`
  display: flex;
  width: 100%;
  ul {
    flex: 1;
    list-style: none;
    li {
      height: 50px;
      display: flex;

      align-items: center;
      input {
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.primaryColor};
        border: none;
        border-radius: 5px;
        padding: 10px;
      }
      input:focus {
        outline: 2px solid ${(props) => props.theme.secondaryColor};
      }
      input::placeholder {
        color: ${(props) => props.theme.fontColor};
      }
    }
  }
`;

export default AccountInfoStyled;
