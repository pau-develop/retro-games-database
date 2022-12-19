import AccountStyled from "./AccountStyled";
import AccountSection from "../AccountSection/AccountSection";
import AccountInfo from "../AccountInfo/AccountInfo";
import MainWrap from "../MainWrap/MainWrap";

const Account = (): JSX.Element => {
  return (
    <MainWrap>
      <AccountStyled>
        <AccountSection title="Account Info">
          <AccountInfo />
        </AccountSection>
      </AccountStyled>
    </MainWrap>
  );
};

export default Account;
