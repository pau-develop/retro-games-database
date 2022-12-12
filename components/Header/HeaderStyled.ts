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
  padding: 1%;
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
          margin: 10px;
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
