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
  border: 2px solid ${(props) => props.theme.secondaryColor};
  border-radius: 20px;
  padding: 20px;
  ul {
    padding: 20px 0;
    list-style: none;
    display: grid;
    grid-template-columns: 33% 33% 33%;
    @media (max-width: 720px) {
      grid-template-columns: 100%;
    }
    li {
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
  }
`;

export default CardGalleryStyled;
