import useUserAPI from "../../hooks/useUserAPI";
import { IUserInput } from "interfaces/interfaces";
import { useEffect, useRef, useState } from "react";
import { validateEmail } from "./FormFunctions";
import FormSectionStyled from "./FormSectionStyled";

interface RegisterFormEmailProps {
  actionNext: (input: string) => void;
  userData: IUserInput;
}

const RegisterFormEmail = ({
  actionNext,
  userData,
}: RegisterFormEmailProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [alertMessage, setAlertMessage] = useState<string[]>(new Array());
  const { checkEmail } = useUserAPI();

  useEffect(() => {
    if (userData!.email !== "") inputRef.current!.value = userData!.email;

    inputRef.current!.focus();
  }, []);

  const validateEmailField = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    const validation = validateEmail(inputRef.current!);
    if (typeof validation !== "number") return setAlertMessage(validation);
    const result = await checkEmail(inputRef.current!.value);
    return result
      ? actionNext!(inputRef.current!.value)
      : setAlertMessage(["⚠ Email already taken"]);
  };

  return (
    <FormSectionStyled className="form-section">
      <div className="form-section__text-wrap">
        <h3 className="form-section__text">Enter a valid email</h3>
      </div>
      <div className="form-section__label-wrap">
        <label className="form-section__label" htmlFor="email">
          <input
            className="form-section__input"
            id="email"
            placeholder="Email"
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
        <button onClick={(event) => validateEmailField(event)}>Next</button>
        <button className="form-button--disabled">Go back</button>
      </div>
    </FormSectionStyled>
  );
};

export default RegisterFormEmail;
