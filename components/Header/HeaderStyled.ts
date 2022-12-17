import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  height: 6%;
  position: relative;
  background-color: ${(props) => props.theme.primaryColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 720px) {
    height: 6%;
    color: ${(props) => props.theme.fontColor};
    width: 100%;
    padding: 0 15px;
    margin: 0;
    border: none;
    border-radius: 0;
    i:hover {
      cursor: pointer;
    }
  }
  .header {
    &__title {
      padding: 0 20px;
      margin: 0;
      color: ${(props) => props.theme.fontColor};
      @media (max-width: 720px) {
        font-size: 1.2rem;
      }
    }
    &__navigation {
      padding: 0;
      margin: 0;
      color: ${(props) => props.theme.fontColor};
      ul {
        display: flex;
        list-style: none;
        li {
          display: flex;
          justify-content: space-around;
          background-color: transparent;
          border-radius: 5px;
          width: 100px;
          padding: 10px;
          margin: 0 5px;
          position: relative;
          text-align: center;
        }
        li:hover {
          background-color: ${(props) => props.theme.secondaryColor};
          cursor: pointer;
        }
      }
      a:-webkit-any-link {
        color: ${(props) => props.theme.fontColor};
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;

export default HeaderStyled;
