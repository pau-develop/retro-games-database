import useUserAPI from "../../hooks/useUserAPI";
import React, { useCallback, useRef, useState } from "react";
import { validateName, validatePassword } from "./FormFunctions";
import FormSectionStyled from "./FormSectionStyled";
import FormStyled from "./FormStyled";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";

const LoginForm = (): JSX.Element => {
  const checkboxRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const { userLogin } = useUserAPI();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const [alertMessage, setAlertMessage] = useState<string[]>(new Array());
  const [botAlertMessage, setBotAlertMessage] = useState<string[]>(new Array());

  const validateLoginInfo = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (inputRef.current!.value === "")
      return setAlertMessage(["⚠ User name field is mandatory"]);
    let validation = validateName(inputRef.current!);
    if (typeof validation !== "number") return setAlertMessage(validation);

    setAlertMessage([""]);
    validation = validatePassword(inputRef2.current!);
    if (typeof validation !== "number") return setBotAlertMessage(validation);

    return handleSubmit(inputRef.current!.value, inputRef2.current!.value);
  };

  const handleSubmit = useCallback(async (input: string, input2: string) => {
    const result = await userLogin(input, input2, checkboxRef.current!.checked);
    if (result) return router.push("/home");
    return setBotAlertMessage(["⚠ Incorrect user name or password"]);
  }, []);

  return (
    <FormStyled>
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
                alertMessage.map((alert) => <span key={alert}>{alert}</span>)}
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
        <div className="form-section__checkbox">
          <input ref={checkboxRef} type="checkbox" />
          <span> Keep me logged</span>
        </div>
        <div className="form-section__button-wrap">
          <button onClick={(event) => validateLoginInfo(event)}>Login</button>
        </div>
      </FormSectionStyled>
    </FormStyled>
  );
};
export default LoginForm;
