import styled from "styled-components";

const FormStyled = styled.form`
  width: 400px;
  height: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: ${(props) => props.theme.fontColor};
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export default FormStyled;
