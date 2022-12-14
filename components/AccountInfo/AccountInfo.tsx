import useUserAPI from "../../hooks/useUserAPI";
import { IUser } from "../../interfaces/interfaces";
import { useEffect, useRef, useState } from "react";
import { validateEmail, validateName } from "../Form/FormFunctions";
import AccountInfoStyled from "./AccountInfoStyled";
import { useSelector } from "react-redux";
import { RootState } from "store/store";

const AccountInfo = (): JSX.Element => {
  const user = useSelector<RootState>((state) => state.user) as IUser;
  const [topButton, setTopButton] = useState(true);
  const [botButton, setBotButton] = useState(true);
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

  const validateNameField = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const validation = validateName(nameRef.current!);
    if (typeof validation !== "number") {
      setTopButton(false);
      return setNameAlertMessage(validation);
    }
    const result = await checkName(nameRef.current!.value);
    if (result) {
      const response = await updateName(nameRef.current!.value);
      if (response) {
        nameRef.current!.value = "";
        setTopButton(false);
        setNameAlertMessage([""]);
        return getLoggedUser();
      }
      return setNameAlertMessage(["⚠ Something went wrong"]);
    }

    setTopButton(false);
    return setNameAlertMessage(["⚠ User name already taken"]);
  };

  const validateEmailField = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const validation = validateEmail(emailRef.current!);
    if (typeof validation !== "number") {
      setBotButton(false);
      return setEmailAlertMessage(validation);
    }
    const result = await checkEmail(emailRef.current!.value);
    if (result) {
      const response = await updateEmail(emailRef.current!.value);
      if (response) {
        emailRef.current!.value = "";
        setBotButton(false);
        setEmailAlertMessage([""]);
        return getLoggedUser();
      }
      return setNameAlertMessage(["⚠ Something went wrong"]);
    }

    setEmailAlertMessage(["⚠ Email already taken"]);
    return setBotButton(false);
  };

  const checkContent = (inputBox: "name" | "email") => {
    if (inputBox === "name") {
      if (nameRef.current!.value !== "") {
        setNameAlertMessage([""]);
        return setTopButton(true);
      }
      setEmailAlertMessage([""]);
      return setTopButton(false);
    }
    if (emailRef.current!.value !== "") return setBotButton(true);
    return setBotButton(false);
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
          <button
            className={
              topButton
                ? "account-info__button"
                : "account-info__button--disabled"
            }
            onClick={validateNameField}
          >
            Update
          </button>
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
          <button
            className={
              botButton
                ? "account-info__button"
                : "account-info__button--disabled"
            }
            onClick={validateEmailField}
          >
            Update
          </button>
        </li>
        <li className="account-info__list-item">
          <span>Location</span>
        </li>
        <li className="account-info__list-item">
          <span>Languages</span>
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
