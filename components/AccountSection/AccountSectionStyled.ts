import styled from "styled-components";
const AccountSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: auto auto;
  background-color: ${(props) => props.theme.fourthColor};
  .account-section {
    &__title {
      display: inline;
      padding: 20px;
      width: 100%;
      border-bottom: none;
      border-radius: 10px 10px 0 0;
      h2 {
        text-align: center;
      }
      @media (max-width: 720px) {
        padding: 10px 10px 0 10px;
      }
    }
    &__info {
      padding: 0 40px;

      width: 100%;
      display: flex;
      @media (max-width: 720px) {
        padding: 15px;
      }
    }
  }
`;

export default AccountSectionStyled;
