import styled from "styled-components";

const AccountInfoStyled = styled.div`
  display: flex;
  @media (max-width: 720px) {
    flex-direction: column;
  }
  width: 100%;
  .account-info {
    &__birth {
      border-radius: 5px;
      width: 50%;
      padding: 10px;
      color: ${(props) => props.theme.fontColor};
      background-color: ${(props) => props.theme.primaryColor};
      border: none;
      color-scheme: dark;
    }
    &__birth:focus {
      outline: none;
    }
    &__countries {
      width: 50%;
      border-radius: 5px;
      background-color: ${(props) => props.theme.primaryColor};
      border: none;
      padding: 10px;
      color: ${(props) => props.theme.fontColor};
    }
    &__countries:focus {
      outline: none;
    }
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
    }
    &__item-name {
      width: 30%;
      text-align: left;
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
    &__button--updated {
      border: none;
      font-family: ${(props) => props.theme.font};
      margin-left: 5%;
      width: 15%;
      height: 30px;
      color: green;
      background-color: transparent;
      font-weight: 900;
      pointer-events: none;
      cursor: default;
    }
    &__alerts {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.alertFontColor};
      font-size: 0.7rem;
      span {
        width: 100%;
      }
    }

    &__verification {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      span:first-child {
        width: 30%;
      }
    }
    &__unverified {
      background-color: ${(props) => props.theme.primaryColor};
      border: none;
      border-radius: 5px;
      padding: 10px;
      font-size: 0.8rem;
      width: 50%;
      color: ${(props) => props.theme.failFontColor};
      font-weight: 700;
      text-align: center;
    }
    &__verified {
      background-color: ${(props) => props.theme.primaryColor};
      border: none;
      font-size: 0.8rem;
      border-radius: 5px;
      width: 50%;
      color: ${(props) => props.theme.passFontColor};
      font-weight: 700;
      text-align: center;
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
      text-align: center;
    }
    &__card {
      height: 100%;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 720px) {
        margin-top: 20px;
        width: 100%;
      }
    }
    &__card-buttons {
      min-height: 50px;
      width: 50%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      input[type="color"] {
        padding: 0;
        margin: 0;
        border: none;
        height: 30px;
        width: 25%;
        background-color: ${(props) => props.theme.thirdColor};
      }
      @media (max-width: 720px) {
        margin-top: 20px;
        width: 100%;
      }
    }
    &__card-button {
      border: none;
      font-family: ${(props) => props.theme.font};

      width: 25%;
      height: 30px;
      color: ${(props) => props.theme.fontColor};
      background: ${(props) => props.theme.thirdColor};
    }
    &__color-button {
    }
  }
`;

export default AccountInfoStyled;
