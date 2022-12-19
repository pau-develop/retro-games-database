import styled from "styled-components";

const MainWrapStyled = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: auto auto;
  background-color: ${(props) => props.theme.fourthColor};
`;

export default MainWrapStyled;
