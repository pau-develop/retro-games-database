import React, { useRef, useState } from "react";
import { validateName, validatePassword } from "./FormFunctions";
import FormSectionStyled from "./FormSectionStyled";

interface LoginFormInputsProps {
  actionSubmit: (input: string, input2: string) => Promise<void>;
}

const LoginFormInputs = ({
  actionSubmit,
}: LoginFormInputsProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const [alertMessage, setAlertMessage] = useState<string[]>(new Array());
  const [botAlertMessage, setBotAlertMessage] = useState<string[]>(new Array());

  const validateLoginInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const validation = validateName(inputRef.current!);
    if (typeof validation !== "number") setAlertMessage(validation);
    else {
      setAlertMessage([""]);
      const validation = validatePassword(inputRef2.current!);
      if (typeof validation !== "number") setBotAlertMessage(validation);
      else {
        actionSubmit!(inputRef.current!.value, inputRef2.current!.value);
      }
    }
  };

  return (
    <FormSectionStyled>
      <div className="form-section__text-wrap">
        <h3 className="form-section__text">Login</h3>
      </div>
      <div className="form-section__label-wrap">
        <label className="form-section__label" htmlFor="username">
          <input
            className="form-section__input"
            id="username"
            placeholder="User name"
            ref={inputRef}
            autoComplete={"off"}
            type="text"
          />
          <div className="form-section__alert-wrap">
            {alertMessage.length !== 0 &&
              alertMessage.map((alert, index) => (
                <span key={index}>{alert}</span>
              ))}
          </div>
        </label>

        <label className="form-section__label" htmlFor="password">
          <input
            className="form-section__input"
            id="password"
            placeholder="Password"
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
        <button onClick={(event) => validateLoginInfo(event)}>Login</button>
      </div>
    </FormSectionStyled>
  );
};
export default LoginFormInputs;