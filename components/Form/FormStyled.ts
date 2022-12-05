import styled from "styled-components";

const FormStyled = styled.form`
  width: 300px;
  height: 400px;
  border: 2px solid #3ec209;
  display: flex;
  flex-direction: column;
  align-items: center;
  label {
    color: #3ec209;
    padding: 2%;
  }
  input {
    padding: 2%;
    background-color: #415838;
    border: none;
  }
  input:focus {
    outline: none;
  }
`;

export default FormStyled;
