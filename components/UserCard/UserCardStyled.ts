import styled from "styled-components";

const UserCardStyled = styled.div`
  background-color: blue;
  width: 320px;
  height: 190px;
  border-radius: 20px;
  background-position: center;
  padding: 20px;
  image-rendering: pixelated;
  display: flex;
  .user-card {
    &__overlay {
      position: absolute;
      z-index: 2;
      transform: translate(-20px, -20px);
      min-width: 320px;
      min-height: 190px;
      border-radius: 20px;
      background: linear-gradient(
        to bottom,
        rgba(28, 52, 189, 0.5),
        rgba(19, 107, 117, 0.5)
      );
    }
    &__left-side {
      list-style: none;
      width: 152px;
      li {
        padding: 5dpx 0;
      }
    }
    &__right-side {
      width: 128px;
      img {
        border: 1px solid white;
      }
    }
  }
`;
export default UserCardStyled;
