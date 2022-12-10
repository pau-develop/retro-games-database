import useUserAPI from "hooks/useUserAPI";
import { IUserInput } from "interfaces/interfaces";
import React, { useEffect, useRef, useState } from "react";
import { validateName } from "./FormFunctions";
import FormSectionStyled from "./FormSectionStyled";

interface RegisterFormNameProps {
  actionNext: (input: string) => void;
  actionBack: () => void;
  userData: IUserInput;
}

const RegisterFormName = ({
  actionNext,
  actionBack,
  userData,
}: RegisterFormNameProps) => {
  const [alertMessage, setAlertMessage] = useState<string[]>(new Array());
  const inputRef = useRef<HTMLInputElement>(null);
  const { checkName } = useUserAPI();

  useEffect(() => {
    if (userData!.userName !== "") inputRef.current!.value = userData!.userName;

    inputRef.current!.focus();
  }, []);

  const validateNameField = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const validation = validateName(inputRef.current!);
    if (typeof validation !== "number") return setAlertMessage(validation);
    const result = checkName(inputRef.current!.value);
    return (await result)
      ? actionNext!(inputRef.current!.value)
      : setAlertMessage(["⚠ User name already taken"]);
  };

  return (
    <FormSectionStyled className="form-section">
      <div className="form-section__text-wrap">
        <h3 className="form-section__text">Enter user name</h3>
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
      </div>
      <div className="form-section__button-wrap">
        <button onClick={(event) => validateNameField(event)}>Submit</button>
        <button onClick={() => actionBack()}>Go back</button>
      </div>
    </FormSectionStyled>
  );
};

export default RegisterFormName;
