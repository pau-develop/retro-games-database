import useUserAPI from "../../hooks/useUserAPI";
import { IUser } from "../../interfaces/interfaces";
import React, { useEffect, useRef, useState } from "react";
import { validateEmail, validateName } from "../Form/FormFunctions";
import AccountInfoStyled from "./AccountInfoStyled";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import Button from "../Button/Button";
import UserCard from "../UserCard/UserCard";
import CardDesignsGallery from "../CardGallery/CardGallery";
import CardGallery from "../CardGallery/CardGallery";

const AccountInfo = (): JSX.Element => {
  const [countries, setCountries] = useState<any[]>(new Array());
  const [cardGallery, setCardGallery] = useState<number>(0);
  const user = useSelector<RootState>((state) => state.user) as IUser;
  const [topButton, setTopButton] = useState<number>(0);
  const [botButton, setBotButton] = useState<number>(0);
  const {
    checkName,
    checkEmail,
    updateName,
    updateEmail,
    getLoggedUser,
    updateCountry,
  } = useUserAPI();
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

  const handleUpdateCountry = async (country: string) => {
    const result = await updateCountry(country);
    if (result) return getLoggedUser();
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

  const handleCardMenu = (menu: number) => {
    console.log("hi");
    setCardGallery(menu);
  };

  return (
    <AccountInfoStyled className="account-info">
      <ul className="account-info__list">
        <li className="account-info__list-item">
          <span className="account-info__item-name">User name</span>
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
            <Button
              buttonClass="account-info__button--disabled"
              text="Update"
            />
          )}
          {topButton === 1 && (
            <Button
              buttonClass="account-info__button"
              validateAction={validateNameField}
              text="Update"
            />
          )}
          {topButton === 2 && (
            <Button
              buttonClass="account-info__button--updated"
              text="Updated!"
            />
          )}
        </li>
        <li className="account-info__list-item">
          <span className="account-info__item-name">Email</span>
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
            <Button
              buttonClass="account-info__button--disabled"
              text="Update"
            />
          )}
          {botButton === 1 && (
            <Button
              buttonClass="account-info__button"
              validateAction={validateEmailField}
              text="Update"
            />
          )}
          {botButton === 2 && (
            <Button
              buttonClass="account-info__button--updated"
              text="Updated!"
            />
          )}
        </li>
        <li className="account-info__list-item">
          <span className="account-info__item-name">Country</span>
          <select
            className="account-info__countries"
            onChange={(event) => handleUpdateCountry(event.target.value)}
          >
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
          <span className="account-info__item-name">Birth date</span>
          <input className="account-info__birth" type="date" />
        </li>
        <li className="account-info__list-item">
          <div className="account-info__verification">
            <span className="account-info__item-name">Status</span>
            {user.verified ? (
              <span className="account-info__verified">verified</span>
            ) : (
              <>
                <span className="account-info__unverified">not verified</span>
                <Button text="Verify" buttonClass="account-info__button" />
              </>
            )}
          </div>
        </li>
      </ul>
      <section className="account-info__card">
        <UserCard user={user} countries={countries} />
        <div className="account-info__card-buttons">
          <Button
            buttonClass="account-info__card-button"
            text="Card"
            action={() => handleCardMenu(1)}
          />
          <Button
            buttonClass="account-info__card-button"
            text="Avatar"
            action={() => handleCardMenu(2)}
          />
          <input type="color" />
        </div>
      </section>
      {cardGallery !== 0 && <CardGallery action={() => handleCardMenu(0)} />}
    </AccountInfoStyled>
  );
};

export default AccountInfo;
