import styled from "styled-components";

const MainWrapStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  height: 100%;
  width: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: auto auto;
  background-color: ${(props) => props.theme.fourthColor};
`;

export default MainWrapStyled;
