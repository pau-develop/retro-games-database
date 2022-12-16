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
  text-shadow: 2px 2px #000;
  font-weight: 700;
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
        padding: 5px 0;
      }
      li:first-child {
        padding: 0;
        font-size: 1.5rem;
      }
    }
    &__right-side {
      height: 150px;
      width: 128px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      img {
        align-self: flex-end;
        border: 1px solid white;
        width: 75%;
        height: 75%;
      }
      span {
        text-align: right;
      }
    }
  }
`;
export default UserCardStyled;
