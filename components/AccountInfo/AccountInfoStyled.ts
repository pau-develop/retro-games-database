import styled from "styled-components";

const AccountInfoStyled = styled.div`
  display: flex;
  width: 100%;
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 50%;
    li {
      height: 50px;
      display: flex;
      align-items: center;
      span {
        width: 30%;
        text-align: left;
      }
      button {
        border: none;
        font-family: ${(props) => props.theme.font};
        margin-left: 5%;
        width: 15%;
        height: 30px;
        color: ${(props) => props.theme.fontColor};
        background: ${(props) => props.theme.thirdColor};
      }
      button:hover {
        cursor: pointer;
      }
      input {
        width: 50%;
        padding: 10px;
        color: ${(props) => props.theme.fontColor};
        background-color: ${(props) => props.theme.primaryColor};
        border: none;
        border-radius: 5px;
      }
      input:focus {
        outline: 2px solid ${(props) => props.theme.secondaryColor};
      }
      input::placeholder {
        color: ${(props) => props.theme.fontColor};
      }
    }
  }
  @media (max-width: 720px) {
    flex-direction: column;
    ul {
      width: 100%;
    }
  }
`;

export default AccountInfoStyled;
