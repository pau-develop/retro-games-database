import styled from "styled-components";

const HeaderStyled = styled.div`
  position: absolute;
  width: 98%;
  height: 8%;
  border-radius: 10px;
  background-color: ${(props) => props.theme.primaryColor};

  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1%;
  padding: 5px 10px;
  .header {
    &__title {
      padding: 0;
      margin: 0;
      color: ${(props) => props.theme.fontColor};
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
