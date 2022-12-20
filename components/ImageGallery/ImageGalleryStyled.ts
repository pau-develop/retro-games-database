import styled from "styled-components";

const ImageGalleryStyled = styled.div`
  width: 100%;
  height: 100%;
  transform: translate(-20px, -20px);
  position: absolute;
  background-color: #000000bb;
  display: flex;
  flex-direction: column;
  align-items: center;
  .image-gallery {
    &__close {
      width: 100%;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      height: 10%;
      i {
        width: 15%;
        text-align: center;
        color: ${(props) => props.theme.thirdColor};
        font-size: 3rem;
      }
      i:hover {
        cursor: pointer;
      }
    }
    &__wrap {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 80%;
      ul {
        width: 70%;
        height: 100%;
        li {
          height: 100%;
          display: flex;
          img {
            margin: auto auto;
            width: 90%;
            image-rendering: pixelated;
          }
        }
      }
      i {
        text-align: center;
        font-size: 3rem;
        width: 15%;
        color: ${(props) => props.theme.thirdColor};
      }
      i:hover {
        cursor: pointer;
      }
    }
    &__page {
      height: 10%;
      color: ${(props) => props.theme.fontColor};
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
`;

export default ImageGalleryStyled;
