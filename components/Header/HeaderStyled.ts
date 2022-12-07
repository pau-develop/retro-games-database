import styled from "styled-components";

const HeaderStyled = styled.div`
  width: 100%;
  height: 8%;
  background-color: #000;
  border-bottom: 2px solid #3bb909;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  .header {
    &__title {
      padding: 0;
      margin: 0;
      color: #3bb909;
    }
    &__navigation {
      padding: 0;
      margin: 0;
      color: #3bb909;
      ul {
        display: flex;
        list-style: none;
        li {
          margin: 10px;
        }
      }
      a:-webkit-any-link {
        color: #3bb909;
        cursor: pointer;
        text-decoration: none;
      }
    }
  }
`;

export default HeaderStyled;
