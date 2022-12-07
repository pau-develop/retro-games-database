import { useRef, useState } from "react";
import FormSectionStyled from "./FormSectionStyled";

interface FormSectionProps {
  text: string;
  id: string;
  text2?: string;
  id2?: string;
  message?: string;
  actionNext: (input: string) => void;
  actionBack: () => void;
  actionSubmit: () => void;
  currentForm: number;
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
}: FormSectionProps): JSX.Element => {
  const [alertMessage, setAlertMessage] = useState<string[]>(new Array());
  const [botAlertMessage, setBotAlertMessage] = useState<string | undefined>(
    undefined
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const emailRegex = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const passwordRegex = new RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{5,15}$/);
  const userNameRegex = new RegExp(/^[a-zA-Z0-9]{3,15}$/);

  const validateEmail = () => {
    if (inputRef.current!.value.length === 0) {
      inputRef.current!.focus();
      inputRef.current!.value = "";
      return setAlertMessage(["⚠ Email field is mandatory"]);
    } else if (emailRegex.test(inputRef.current!.value))
      return actionNext(inputRef.current!.value);

    inputRef.current!.value = "";
    return setAlertMessage(["⚠ That is not a valid email address"]);
  };

  const revalidatePassword = () => {
    if (inputRef.current!.value === inputRef2.current!.value)
      return actionNext(inputRef.current!.value);

    inputRef2.current!.focus();
    inputRef2.current!.value = "";
    setBotAlertMessage("⚠ Passwords do not match");
  };

  const validatePassword = () => {
    let strings = new Array();
    if (inputRef.current!.value.length === 0) {
      inputRef.current!.value = "";
      inputRef2.current!.value = "";
      return setAlertMessage(["⚠ Password field is mandatory"]);
    }
    if (
      inputRef.current!.value.length < 4 ||
      inputRef.current!.value.length > 14
    )
      strings = ["⚠ Must be 5-15 characters long"];
    if (!/\d/.test(inputRef.current!.value))
      strings = [...strings, "⚠ Must contain one number"];
    if (!/[A-Z]/.test(inputRef.current!.value))
      strings = [...strings, "⚠ Must contain one upper case character"];
    if (!/[a-z]/.test(inputRef.current!.value))
      strings = [...strings, "⚠ Must contain one lower case character"];

    if (passwordRegex.test(inputRef.current!.value)) {
      setAlertMessage([""]);
      return revalidatePassword();
    }

    inputRef.current!.focus();
    inputRef.current!.value = "";
    inputRef2.current!.value = "";
    setAlertMessage(strings);
  };

  const validateName = () => {
    let strings = new Array();
    if (inputRef.current!.value.length === 0) {
      inputRef.current!.value = "";
      return setAlertMessage(["⚠ user name field is mandatory"]);
    }

    if (
      inputRef.current!.value.length < 2 ||
      inputRef.current!.value.length > 14
    )
      strings = ["⚠ Must be 3-15 characters long"];

    if (/[!@#$%^&*(),.?":{}|<>]/.test(inputRef.current!.value))
      strings = [...strings, "⚠ Only letters and numbers allowed"];

    if (userNameRegex.test(inputRef.current!.value))
      return actionNext(inputRef.current!.value);

    inputRef.current!.focus();
    inputRef.current!.value = "";
    setAlertMessage(strings);
  };

  const handleSubmission = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    currentForm === 0 && validateEmail();
    currentForm === 1 && validatePassword();
    currentForm === 2 && validateName();
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
          {botAlertMessage !== undefined && <span>{botAlertMessage}</span>}
        </div>
      </div>
      <div className="form-section__button-wrap">
        <button onClick={(event) => handleSubmission(event)}>
          {currentForm === 2 ? "Submit" : "Next"}
        </button>
        <button
          className={currentForm === 0 ? "form-button--disabled" : undefined}
          onClick={() => actionBack()}
        >
          Go back
        </button>
      </div>
    </FormSectionStyled>
  );
};

export default FormSection;
