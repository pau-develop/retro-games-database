import styled from "styled-components";
const AccountSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  .account-section {
    &__title {
      display: inline;
      padding: 5px;
      width: 200px;
      border: 2px solid ${(props) => props.theme.secondaryColor};
      border-bottom: none;
      border-radius: 10px 10px 0 0;
      h2 {
        text-align: center;
        background-color: ${(props) => props.theme.primaryColorFade};
      }
    }
    &__info {
      padding: 40px;
      border: 2px solid ${(props) => props.theme.secondaryColor};
      background-color: ${(props) => props.theme.primaryColorFade};
      width: 100%;
      display: flex;
    }
  }
`;

export default AccountSectionStyled;
