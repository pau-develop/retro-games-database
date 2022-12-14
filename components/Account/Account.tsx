import AccountStyled from "./AccountStyled";
import AccountSection from "../AccountSection/AccountSection";
import AccountInfo from "../AccountInfo/AccountInfo";

const Account = (): JSX.Element => {
  return (
    <AccountStyled>
      <AccountSection title="Account Info">
        <AccountInfo />
      </AccountSection>
    </AccountStyled>
  );
};

export default Account;
