import FormSectionStyled from "./FormSectionStyled";

interface FormSectionProps {
  text: string;
  id: string;
  text2?: string;
  id2?: string;
  message?: string;
  actionNext: (id: string) => void;
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
  return (
    <FormSectionStyled className="form-section">
      <div className="form-section__text-wrap">
        <p className="form-section__text">{message}</p>
      </div>
      <div className="form-section__label-wrap">
        <label className="form-section__label" htmlFor={id}>
          <input className="form-section__input" id={id} placeholder={text} />
        </label>
        {text2 !== undefined && (
          <label className="form-section__label" htmlFor={id2}>
            <input
              className="form-section__input"
              id={id2}
              placeholder={text2}
            />
          </label>
        )}
      </div>
      <div className="form-section__button-wrap">
        <button
          onClick={
            currentForm !== 2 ? () => actionNext(id) : () => actionSubmit()
          }
        >
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
