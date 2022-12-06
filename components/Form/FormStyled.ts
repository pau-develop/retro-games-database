import styled from "styled-components";

const FormStyled = styled.form`
  width: 500px;
  height: 500px;
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: #3bb909;
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default FormStyled;
