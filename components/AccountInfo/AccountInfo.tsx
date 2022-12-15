import useUserAPI from "../../hooks/useUserAPI";
import { IUser } from "../../interfaces/interfaces";
import { useEffect, useRef, useState } from "react";
import { validateEmail, validateName } from "../Form/FormFunctions";
import AccountInfoStyled from "./AccountInfoStyled";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import useFlags from "../../hooks/useFlags";

const AccountInfo = (): JSX.Element => {
  const [countries, setCountries] = useState<any[]>(new Array());
  const user = useSelector<RootState>((state) => state.user) as IUser;
  const [topButton, setTopButton] = useState<number>(0);
  const [botButton, setBotButton] = useState<number>(0);
  const { checkName, checkEmail, updateName, updateEmail, getLoggedUser } =
    useUserAPI();
  const [nameAlertMessage, setNameAlertMessage] = useState<string[]>(
    new Array()
  );
  const [emailAlertMessage, setEmailAlertMessage] = useState<string[]>(
    new Array()
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getLoggedUser();
  }, [getLoggedUser]);

  useEffect(() => {
    const fetchCountries = async () => {
      const data = await fetch("https://restcountries.com/v3.1/all");
      const countries = await data.json();
      setCountries(countries);
    };
    fetchCountries();
  }, []);

  const validateNameField = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const validation = validateName(nameRef.current!);
    if (typeof validation !== "number") {
      setTopButton(0);
      return setNameAlertMessage(validation);
    }
    const result = await checkName(nameRef.current!.value);
    if (result) {
      const response = await updateName(nameRef.current!.value);
      if (response) {
        nameRef.current!.value = "";
        setTopButton(2);
        setNameAlertMessage([""]);
        return getLoggedUser();
      }
      return setNameAlertMessage(["⚠ Something went wrong"]);
    }

    setTopButton(0);
    return setNameAlertMessage(["⚠ User name already taken"]);
  };

  const validateEmailField = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const validation = validateEmail(emailRef.current!);
    if (typeof validation !== "number") {
      setBotButton(0);
      return setEmailAlertMessage(validation);
    }
    const result = await checkEmail(emailRef.current!.value);
    if (result) {
      const response = await updateEmail(emailRef.current!.value);
      if (response) {
        emailRef.current!.value = "";
        setBotButton(2);
        setEmailAlertMessage([""]);
        return getLoggedUser();
      }
      return setNameAlertMessage(["⚠ Something went wrong"]);
    }

    setEmailAlertMessage(["⚠ Email already taken"]);
    return setBotButton(0);
  };

  const checkContent = (inputBox: "name" | "email") => {
    if (inputBox === "name") {
      if (nameRef.current!.value !== "") {
        setNameAlertMessage([""]);
        return setTopButton(1);
      }
      setEmailAlertMessage([""]);
      return setTopButton(0);
    }
    if (emailRef.current!.value !== "") return setBotButton(1);
    return setBotButton(0);
  };

  return (
    <AccountInfoStyled className="account-info">
      <ul className="account-info__list">
        <li className="account-info__list-item">
          <span>User name</span>
          <div className="account-info__input">
            <input
              ref={nameRef}
              placeholder={user.userName}
              onChange={() => checkContent("name")}
            ></input>
            <div className="account-info__alerts">
              {nameAlertMessage.map((alert) => (
                <span key={alert}>{alert}</span>
              ))}
            </div>
          </div>
          {topButton === 0 && (
            <button
              className="account-info__button--disabled"
              onClick={validateNameField}
            >
              Update
            </button>
          )}
          {topButton === 1 && (
            <button
              className="account-info__button"
              onClick={validateNameField}
            >
              Update
            </button>
          )}
          {topButton === 2 && (
            <button
              className="account-info__button--updated"
              onClick={validateNameField}
            >
              Updated!
            </button>
          )}
        </li>
        <li className="account-info__list-item">
          <span>Email</span>
          <div className="account-info__input">
            <input
              ref={emailRef}
              placeholder={user.email}
              onChange={() => checkContent("email")}
            ></input>
            <div className="account-info__alerts">
              {emailAlertMessage.map((alert) => (
                <span key={alert}>{alert}</span>
              ))}
            </div>
          </div>
          {botButton === 0 && (
            <button
              className="account-info__button--disabled"
              onClick={validateEmailField}
            >
              Update
            </button>
          )}
          {botButton === 1 && (
            <button
              className="account-info__button"
              onClick={validateEmailField}
            >
              Update
            </button>
          )}
          {botButton === 2 && (
            <button
              className="account-info__button--updated"
              onClick={validateEmailField}
            >
              Updated!
            </button>
          )}
        </li>
        <li className="account-info__list-item">
          <span>Country</span>
          <select className="account-info__countries">
            {countries !== undefined &&
              countries.map((country: any, index) => {
                return (
                  <option value={country.name.common} key={index}>
                    {country.name.common}
                  </option>
                );
              })}
          </select>
        </li>

        <li className="account-info__list-item">
          <span>Birth date</span>
          <input className="account-info__birth" type="date" />
        </li>
        <li className="account-info__list-item">
          <div className="account-info__verification">
            {user.verified ? (
              <span className="account-info__verified">✔ Account verified</span>
            ) : (
              <>
                <span className="account-info__unverified">
                  ❗ Not verified
                </span>
                <p className="account-info__verification-process">
                  {`You will need to verify your account to be able to post.
                  Click on send to receive a verification email.`}
                </p>
                <button className="account-info__verify-button">Send</button>
              </>
            )}
          </div>
        </li>
      </ul>
    </AccountInfoStyled>
  );
};

export default AccountInfo;
