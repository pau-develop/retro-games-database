import { IUser } from "interfaces/interfaces";
import AccountInfoStyled from "./AccountInfoStyled";

interface AccountInfoProps {
  user: IUser;
}

const AccountInfo = ({ user }: AccountInfoProps): JSX.Element => {
  return (
    <AccountInfoStyled>
      <ul>
        <li>User name</li>
        <li>Email</li>
        <li>Location</li>
        <li>Languages</li>
      </ul>
      <ul>
        <li>
          <input placeholder={user.userName}></input>
        </li>
        <li>
          <input placeholder={user.email}></input>
        </li>
        <li>Pending</li>
        <li>Pending</li>
      </ul>
    </AccountInfoStyled>
  );
};

export default AccountInfo;
