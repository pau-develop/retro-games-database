import { IUserInput } from "interfaces/interfaces";
import React, { useEffect, useRef, useState } from "react";
import { revalidatePassword, validatePassword } from "./FormFunctions";
import FormSectionStyled from "./FormSectionStyled";

interface RegisterFormPasswordProps {
  actionNext: (input: string) => void;
  actionBack: () => void;
  userData: IUserInput;
}

const RegisterFormPassword = ({
  actionNext,
  actionBack,
  userData,
}: RegisterFormPasswordProps): JSX.Element => {
  const [alertMessage, setAlertMessage] = useState<string[]>(new Array());
  const [botAlertMessage, setBotAlertMessage] = useState<string[]>(new Array());
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userData!.password !== "") {
      inputRef.current!.value = userData!.password;
      inputRef2.current!.value = userData!.password;
    }
    inputRef.current!.focus();
  }, []);

  const validatePasswordField = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const validation = validatePassword(inputRef.current!, inputRef2.current!);
    if (typeof validation !== "number") return setAlertMessage(validation);
    else {
      setAlertMessage([""]);
      const validation = revalidatePassword(
        inputRef.current!,
        inputRef2.current!
      );
      if (typeof validation !== "number") {
        return setBotAlertMessage(validation);
      } else return actionNext!(inputRef.current!.value);
    }
  };

  return (
    <FormSectionStyled className="form-section">
      <div className="form-section__text-wrap">
        <h3 className="form-section__text">Enter password</h3>
      </div>
      <div className="form-section__label-wrap">
        <label className="form-section__label" htmlFor="password">
          <input
            className="form-section__input"
            id="password"
            placeholder="Password"
            ref={inputRef}
            autoComplete={"off"}
            type="password"
          />
          <div className="form-section__alert-wrap">
            {alertMessage.length !== 0 &&
              alertMessage.map((alert, index) => (
                <span key={index}>{alert}</span>
              ))}
          </div>
        </label>

        <label className="form-section__label" htmlFor="repassword">
          <input
            className="form-section__input"
            id="repassword"
            placeholder="Repeat password"
            ref={inputRef2}
            autoComplete={"off"}
            type="password"
          />
        </label>

        <div className="form-section__alert-wrap">
          {botAlertMessage.length !== 0 &&
            botAlertMessage.map((alert) => <span key={alert}>{alert}</span>)}
        </div>
      </div>
      <div className="form-section__button-wrap">
        <button onClick={(event) => validatePasswordField(event)}>Next</button>
        <button onClick={() => actionBack!()}>Go back</button>
      </div>
    </FormSectionStyled>
  );
};

export default RegisterFormPassword;
