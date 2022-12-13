import { IUser } from "interfaces/interfaces";
import AccountSectionStyled from "./AccountSectionStyled";

interface AccountSectionProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

const AccountSection = ({ title, children }: AccountSectionProps) => {
  return (
    <AccountSectionStyled className="account-section">
      <div className="account-section__title">
        <h2>{title}</h2>
      </div>
      <div className="account-section__info">{children}</div>
    </AccountSectionStyled>
  );
};

export default AccountSection;
