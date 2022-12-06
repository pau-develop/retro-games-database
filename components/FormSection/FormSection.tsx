import FormSectionStyled from "./FormSectionStyled";

interface FormSectionProps {
  text: string;
  id: string;
  text2?: string;
  id2?: string;
  message?: string;
}

const FormSection = ({
  text,
  id,
  message,
  text2,
  id2,
}: FormSectionProps): JSX.Element => {
  return (
    <FormSectionStyled>
      <p>{message}</p>
      <label htmlFor={id}>
        <input id={id} placeholder={text} />
      </label>
      {text2 !== undefined && (
        <label htmlFor={id2}>
          <input id={id2} placeholder={text2} />
        </label>
      )}
      <div>
        <button>Go back</button>
        <button>Accept</button>
      </div>
    </FormSectionStyled>
  );
};

export default FormSection;
