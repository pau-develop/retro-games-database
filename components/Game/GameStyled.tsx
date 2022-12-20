import styled from "styled-components";

const GameStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.altFontColor};
  h1 {
    width: 100%;
    text-align: center;
  }
`;

export default GameStyled;
