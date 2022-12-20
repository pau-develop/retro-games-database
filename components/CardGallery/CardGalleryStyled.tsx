import styled from "styled-components";

const CardGalleryStyled = styled.div`
  position: absolute;
  z-index: 20;
  width: 80vw;
  height: 80vh;
  left: 50%;
  transform: translate(-50%);
  @media (max-width: 720px) {
    width: 90vw;
    height: 90vh;
    left: 50%;
    top: 7.5%;
  }
  background-color: ${(props) => props.theme.fadeColor};
  border: 2px solid ${(props) => props.theme.borderColor};
  border-radius: 20px;
  padding: 20px;
  overflow-y: scroll;
  .card-gallery {
    &__list--card {
      padding: 20px 0;
      list-style: none;
      display: grid;
      grid: auto-flow / 1fr 1fr 1fr;
      @media (max-width: 720px) {
        grid-template-columns: 100%;
      }
    }
    &__list--avatar {
      padding: 20px 0;
      list-style: none;
      display: grid;
      grid: auto-flow / 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
      @media (max-width: 720px) {
        grid: auto-flow / 1fr 1fr 1fr;
      }
    }
    &__item--card {
      display: flex;
      margin: 5px;
      img {
        margin: auto auto;
        border-radius: 20px;
        @media (max-width: 720px) {
          height: 90%;
        }
      }
    }
    &__item--avatar {
      display: flex;
      margin: 5px;
      img {
        margin: auto auto;

        @media (max-width: 720px) {
          height: 90%;
        }
      }
    }
  }
`;

export default CardGalleryStyled;
