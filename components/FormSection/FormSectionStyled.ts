import styled from "styled-components";

const FormSectionStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3bb909;
  height: 500px;
  .form-section {
    &__text-wrap {
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
    }
    &__label {
      width: 100%;
      display: flex;
      flex-direction: column;
      color: #3ec209;
    }
    &__input {
      color: #3bb909;
      padding: 15px;
      margin: 15px 0;
      background-color: #102510;
      border: none;
    }
    &__input:focus {
      outline: 1px solid #3bb909;
    }
    &__input::placeholder {
      color: #86a681;
    }
    &__button-wrap {
      flex: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 100%;
      button {
        border-color: #3bb909;
        background-color: transparent;
        color: #3bb909;
        width: 100%;
        height: 40%;
      }
      button:last-child {
        width: 75%;
        height: 30%;
      }
      .form-button--disabled {
        visibility: hidden;
      }
    }
  }
`;

export default FormSectionStyled;
