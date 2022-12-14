import styled from "styled-components";

const FormSectionStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.fontColor};
  height: 500px;
  .form-section {
    &__text-wrap {
      display: flex;
      flex-direction: column;
      text-align: center;
      h3 {
        color: ${(props) => props.theme.altFontColor};
      }
      flex: 1;
      display: flex;
      p {
        margin: auto auto;
      }
    }
    &__label-wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      width: 100%;
      flex: 2;
    }
    &__alert-wrap {
      display: flex;
      flex-direction: column;
      font-size: 0.8rem;
      span {
        color: ${(props) => props.theme.alertFontColor};
      }
    }
    &__label {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
    &__input {
      color: ${(props) => props.theme.fontColor};
      padding: 15px;
      margin: 15px 0;
      background-color: ${(props) => props.theme.backgroundAltColor};
      border: none;
      border-radius: 10px;
    }
    &__input:focus {
      outline: 2px solid ${(props) => props.theme.fontColor};
    }
    &__input::placeholder {
      color: ${(props) => props.theme.fontColor};
    }
    &__button-wrap {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      button {
        border-radius: 10px;
        border-color: ${(props) => props.theme.fontColor};
        background-color: transparent;
        color: ${(props) => props.theme.altFontColor};
        width: 100%;
        height: 25%;
      }
      button:last-child {
        width: 75%;
        height: 20%;
      }
      button:hover {
        cursor: pointer;
        color: ${(props) => props.theme.borderColor};
        border-color: ${(props) => props.theme.borderColor};
      }
      .form-button--disabled {
        visibility: hidden;
      }
    }
    &__checkbox {
      margin-top: 10px;
      width: 100%;
      font-size: 0.8rem;
      display: flex;
      justify-content: flex-start;
      margin-left: 20px;
      align-items: center;
      span {
        padding-left: 10px;
        color: ${(props) => props.theme.fontColor};
      }
      input:checked {
        background-color: ${(props) => props.theme.backgroundAltColor};
      }
    }
  }
`;

export default FormSectionStyled;
