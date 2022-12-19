import styled from "styled-components";

const GameInfoStyled = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.fourthColor};
  color: ${(props) => props.theme.fontColor};
  width: 400px;
  max-width: 100%;
  .game-info {
    &__title {
      width: 100%;
      padding: 10px;
      text-align: center;

      border-bottom: none;
    }
    &__items {
      width: 100%;
      li {
        margin: 10px;
        display: flex;
        > span {
          border-radius: 10px;
          padding: 10px;
          flex: 1;
        }
        > span:last-child {
          text-align: center;
          background-color: ${(props) => props.theme.primaryColor};
        }
        div {
          text-align: center;
          border-radius: 10px;
          background-color: ${(props) => props.theme.primaryColor};
          padding: 10px;
          flex: 1;
          display: flex;
          flex-direction: column;
          span {
            padding: 0;
          }
        }
      }
      li:last-child {
        border: none;
      }
    }
  }
`;

export default GameInfoStyled;
