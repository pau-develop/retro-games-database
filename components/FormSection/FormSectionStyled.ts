import styled from "styled-components";

const FormSectionStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #3bb909;
  label {
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #3ec209;
  }
  input {
    color: #3bb909;
    padding: 15px;
    margin: 15px;
    background-color: #102510;
    border: none;
  }
  input:focus {
    outline: none;
  }
  div {
    width: 100%;
    button {
      border-color: #3bb909;
      background-color: transparent;
      color: #3bb909;
      width: 40%;
      padding: 5%;
      margin: 5%;
    }
  }
`;

export default FormSectionStyled;
