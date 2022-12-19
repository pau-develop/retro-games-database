import { IUser } from "interfaces/interfaces";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: IUser;
  countries: any;
}

const UserCard = ({ user, countries }: UserCardProps): JSX.Element => {
  const country = countries.filter(
    (country: any) => country.name === user.country
  );
  const styles = {
    card: {
      backgroundImage: `url(${user.card})`,
    },
  };

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
        <li className="user-card__country">
          <img
            src={country[0] && country[0].flags.svg}
            alt={country[0] && `${country[0].name}'s flag`}
          />
          {user.country !== "" ? user.country : "Unknown location"}
        </li>
      </ul>
      <div className="user-card__right-side">
        <img src={user.avatar} alt="profile picture" />
        <span>#000001</span>
      </div>
    </UserCardStyled>
  );
};

export default UserCard;
