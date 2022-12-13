import { IUser } from "interfaces/interfaces";
import AccountInfoStyled from "./AccountInfoStyled";

interface AccountInfoProps {
  user: IUser;
}

const AccountInfo = ({ user }: AccountInfoProps): JSX.Element => {
  return (
    <AccountInfoStyled>
      <ul>
        <li>
          <span>User name</span>
          <input placeholder={user.userName}></input>
          <button>Change</button>
        </li>
        <li>
          <span>Email</span>
          <input placeholder={user.email}></input>
          <button>Change</button>
        </li>
        <li>
          <span>Location</span>
        </li>
        <li>
          <span>Languages</span>
        </li>
      </ul>
    </AccountInfoStyled>
  );
};

export default AccountInfo;
