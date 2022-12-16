import { IUser } from "interfaces/interfaces";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: IUser;
}

const styles = {
  card: {
    backgroundImage: "url('/bgtest01.webp')",
  },
};

const UserCard = ({ user }: UserCardProps): JSX.Element => {
  console.log(user);
  return (
    <UserCardStyled className="user-card" style={styles.card}>
      <div className="user-card__overlay" />
      <ul className="user-card__left-side">
        <li>
          <span>{user.userName}</span>
        </li>
        <li>
          <span>{user.email}</span>
        </li>
        <li>
          <span>Since {user.memberSince}</span>
        </li>
      </ul>
      <div className="user-card__right-side">
        <img src="/pictest01.webp" alt="profile picture" />
        <span>#000001</span>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
