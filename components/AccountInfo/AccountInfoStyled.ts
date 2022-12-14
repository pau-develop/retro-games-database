import styled from "styled-components";

const AccountInfoStyled = styled.div`
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  width: 100%;
  .account-info {
    &__list {
      display: flex;
      flex-direction: column;
      list-style: none;
      width: 50%;
      @media (max-width: 720px) {
        width: 100%;
      }
    }
    &__list-item {
      min-height: 50px;
      display: flex;
      align-items: center;
      span {
        width: 30%;
        text-align: left;
      }
    }
    &__input {
      width: 50%;

      input {
        width: 100%;
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
    &__button {
      border: none;
      font-family: ${(props) => props.theme.font};
      margin-left: 5%;
      width: 15%;
      height: 30px;
      color: ${(props) => props.theme.fontColor};
      background: ${(props) => props.theme.thirdColor};
    }
    &__button:hover {
      cursor: pointer;
    }
    &__button--disabled {
      opacity: 0.2;
      border: none;
      font-family: ${(props) => props.theme.font};
      margin-left: 5%;
      width: 15%;
      height: 30px;
      color: ${(props) => props.theme.fontColor};
      background: ${(props) => props.theme.thirdColor};
      pointer-events: none;
      cursor: default;
    }
    &__alerts {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.altFontColor};
      font-size: 0.7rem;
      span {
        width: 100%;
      }
    }
    &__verified {
      width: 40%;
      color: green;
    }
    &__unverified {
      width: 40%;
      color: red;
    }
    &__verification {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
    }
    &__verify-button {
      border: none;
      font-family: ${(props) => props.theme.font};
      margin-left: 5%;
      width: 15%;
      height: 30px;
      color: ${(props) => props.theme.fontColor};
      background: ${(props) => props.theme.thirdColor};
    }
    &__verify-button:hover {
      cursor: pointer;
    }
    &__verification-process {
      width: 50%;
      font-size: 0.75rem;
    }
  }
`;

export default AccountInfoStyled;
