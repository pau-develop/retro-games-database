import { IUser } from "interfaces/interfaces";
import UserCardStyled from "./UserCardStyled";

interface UserCardProps {
  user: IUser;
  countries: any;
}

const styles = {
  card: {
    backgroundImage: "url('/bgtest01.webp')",
  },
};

const UserCard = ({ user, countries }: UserCardProps): JSX.Element => {
  console.log(countries);
  const country = countries.filter(
    (country: any) => country.name.common === user.country
  );

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
            alt={country[0] && `${country[0].name.common}'s flag`}
          />
          {user.country !== "" ? user.country : "Unknown location"}
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
