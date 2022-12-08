import { useEffect, useRef, useState } from "react";
import FormSectionStyled from "./FormSectionStyled";
import { IUserInput } from "../../interfaces/interfaces";
import {
  revalidatePassword,
  validateEmail,
  validateName,
  validatePassword,
} from "./FormSectionFunctions";

interface FormSectionProps {
  text: string;
  id: string;
  text2?: string;
  id2?: string;
  message?: string;
  actionNext?: (input: string) => void;
  actionBack?: () => void;
  actionSubmit?: () => void;
  currentForm?: number;
  userData?: IUserInput;
  formType: "register" | "login";
}

const FormSection = ({
  text,
  id,
  text2,
  id2,
  message,
  actionNext,
  actionBack,
  actionSubmit,
  currentForm,
  userData,
  formType,
}: FormSectionProps): JSX.Element => {
  const buttonContent = formType === "login" ? "Login" : "Next";
  const [alertMessage, setAlertMessage] = useState<string[]>(new Array());
  const [botAlertMessage, setBotAlertMessage] = useState<string[]>(new Array());
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentForm === 0 && userData!.email !== "")
      inputRef.current!.value = userData!.email;
    if (currentForm === 1 && userData!.password !== "")
      inputRef.current!.value = userData!.password;
    if (currentForm === 1 && userData!.rePassword !== "")
      if (inputRef2.current !== null)
        inputRef2.current.value = userData!.rePassword;
    if (currentForm === 2 && userData!.userName !== "")
      inputRef.current!.value = userData!.userName;
    inputRef.current!.focus();
  }, []);

  const validateEmailField = () => {
    const validation = validateEmail(inputRef.current!);
    if (typeof validation !== "number") return setAlertMessage(validation);
    else return actionNext!(inputRef.current!.value);
  };

  const validateNameField = () => {
    const validation = validateName(inputRef.current!);
    if (typeof validation !== "number") setAlertMessage(validation);
    else return actionNext!(inputRef.current!.value);
  };

  const validatePasswordField = () => {
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

  const validateLoginInfo = () => {
    const validation = validateName(inputRef.current!);
    if (typeof validation !== "number") setAlertMessage(validation);
    else {
      setAlertMessage([""]);
      const validation = validatePassword(inputRef2.current!);
      if (typeof validation !== "number") setBotAlertMessage(validation);
      else {
        actionSubmit!();
      }
    }
  };

  const handleSubmission = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (formType === "register") {
      if (currentForm === 0) validateEmailField();
      if (currentForm === 1) validatePasswordField();
      if (currentForm === 2) validateNameField();
      return;
    }
    if (formType === "login") {
      validateLoginInfo();
    }
  };

  return (
    <FormSectionStyled className="form-section">
      <div className="form-section__text-wrap">
        <h3 className="form-section__text">{message}</h3>
      </div>
      <div className="form-section__label-wrap">
        <label className="form-section__label" htmlFor={id}>
          <input
            className="form-section__input"
            id={id}
            placeholder={text}
            ref={inputRef}
            autoComplete={"off"}
            type={currentForm === 1 ? "password" : "text"}
          />
          <div className="form-section__alert-wrap">
            {alertMessage.length !== 0 &&
              alertMessage.map((alert, index) => (
                <span key={index}>{alert}</span>
              ))}
          </div>
        </label>
        {text2 !== undefined && (
          <label className="form-section__label" htmlFor={id2}>
            <input
              className="form-section__input"
              id={id2}
              placeholder={text2}
              ref={inputRef2}
              autoComplete={"off"}
              type="password"
            />
          </label>
        )}
        <div className="form-section__alert-wrap">
          {botAlertMessage.length !== 0 &&
            botAlertMessage.map((alert) => <span key={alert}>{alert}</span>)}
        </div>
      </div>
      <div className="form-section__button-wrap">
        <button onClick={(event) => handleSubmission(event)}>
          {currentForm === 2 ? "Submit" : buttonContent}
        </button>
        <button
          className={currentForm === 0 ? "form-button--disabled" : undefined}
          onClick={() => actionBack!()}
        >
          Go back
        </button>
      </div>
    </FormSectionStyled>
  );
};

export default FormSection;
