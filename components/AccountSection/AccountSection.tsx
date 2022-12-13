import { IUser } from "interfaces/interfaces";
import AccountSectionStyled from "./AccountSectionStyled";

interface AccountSectionProps {
  title: string;
}

const AccountSection = ({ title }: AccountSectionProps) => {
  return (
    <AccountSectionStyled className="account-section">
      <div className="account-section__title">
        <h2>{title}</h2>
      </div>

      <div className="account-section__info"></div>
    </AccountSectionStyled>
  );
};

export default AccountSection;
