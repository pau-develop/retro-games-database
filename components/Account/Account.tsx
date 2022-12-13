import AccountStyled from "./AccountStyled";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { IUser } from "interfaces/interfaces";
import AccountSection from "../AccountSection/AccountSection";
import AccountInfo from "../AccountInfo/AccountInfo";

const Account = (): JSX.Element => {
  const user = useSelector<RootState>((state) => state.user) as IUser;
  return (
    <AccountStyled>
      <AccountSection title="Account Info">
        <AccountInfo user={user} />
      </AccountSection>
    </AccountStyled>
  );
};

export default Account;
