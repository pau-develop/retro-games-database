import styled from "styled-components";

const HeaderStyled = styled.div`
  border-bottom: 2px solid ${(props) => props.theme.altFontColor};
  width: 100%;
  height: 6%;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.fontColor};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  @media (max-width: 720px) {
    height: 6%;
    color: ${(props) => props.theme.altFontColor};
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
      color: ${(props) => props.theme.altFontColor};
      padding: 0 20px;
      margin: 0;

      @media (max-width: 720px) {
        font-size: 1.2rem;
      }
    }
    &__navigation {
      padding: 0;
      margin: 0;

      ul {
        display: flex;
        list-style: none;
        li {
          color: ${(props) => props.theme.altFontColor};
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
          background-color: ${(props) => props.theme.backgroundAltColor};
          color: ${(props) => props.theme.borderColor};
          cursor: pointer;
        }
      }
      a:-webkit-any-link {
        color: ${(props) => props.theme.altFontColor};

        cursor: pointer;
        text-decoration: none;
      }
      a:hover {
        background-color: ${(props) => props.theme.backgroundAltColor};
        color: ${(props) => props.theme.borderColor};
        cursor: pointer;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;

export default HeaderStyled;
