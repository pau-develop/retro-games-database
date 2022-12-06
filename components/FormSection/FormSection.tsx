import { useRef, useState } from "react";
import FormSectionStyled from "./FormSectionStyled";

interface FormSectionProps {
  text: string;
  id: string;
  text2?: string;
  id2?: string;
  message?: string;
  actionNext: () => void;
  actionBack: () => void;
  actionSubmit: () => void;
  currentForm: number;
}

const FormSection = ({
  text,
  id,
  message,
  text2,
  id2,
  actionNext,
  actionBack,
  actionSubmit,
  currentForm,
}: FormSectionProps): JSX.Element => {
  const [alertMessage, setAlertMessage] = useState<string[]>(new Array());
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const emailRegex = new RegExp(
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  );
  const passwordRegex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,8}$/);
  const validateEmail = () => {
    if (emailRegex.test(inputRef.current!.value)) actionNext();
    else setAlertMessage(["⚠ That is not a valid email address"]);
  };

  const validatePassword = () => {
    console.log(inputRef.current!.value);
  };

  const validateName = () => {
    console.log(inputRef.current!.value);
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
        <p className="form-section__text">{message}</p>
      </div>
      <div className="form-section__label-wrap">
        <label className="form-section__label" htmlFor={id}>
          <input
            className="form-section__input"
            id={id}
            placeholder={text}
            ref={inputRef}
            autoComplete={"off"}
          />
          {alertMessage.length !== 0 && <span>{alertMessage}</span>}
        </label>
        {text2 !== undefined && (
          <label className="form-section__label" htmlFor={id2}>
            <input
              className="form-section__input"
              id={id2}
              placeholder={text2}
              ref={inputRef2}
              autoComplete={"off"}
            />
          </label>
        )}
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
