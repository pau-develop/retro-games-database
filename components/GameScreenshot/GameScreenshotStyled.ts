import styled from "styled-components";

const GameScreenshotStyled = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.fontColor};
  align-items: center;
  width: 100%;
  .game-screenshot {
    &__title {
      width: 100%;
      padding: 10px;
      text-align: center;
    }
    &__wrap {
      padding: 20px 0;
      @media (max-width: 720px) {
        padding: 0;
      }
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      ul {
        height: 200px;
        width: 80%;
        display: flex;
        align-items: center;
        list-style: none;
        li {
          height: 100%;
          margin: 20px;
          flex: 1.5;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            width: 100%;
            image-rendering: pixelated;
          }
          img:hover {
            cursor: pointer;
          }
        }
        li:nth-child(2) {
          flex: 1.75;
        }
      }
      i {
        color: ${(props) => props.theme.fontColor};
        text-align: center;
        background-color: transparent;
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 10%;
        font-size: 3rem;
      }

      i:hover {
        color: ${(props) => props.theme.altFontColor};
        cursor: pointer;
      }
    }

    &__button-right {
      background-color: transparent;
      flex: 1;
      height: 40%;
      margin-right: 50px;
    }
  }
`;

export default GameScreenshotStyled;
