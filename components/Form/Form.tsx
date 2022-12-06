import { useState } from "react";
import FormSection from "../FormSection/FormSection";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const [currentForm, setCurrentForm] = useState<number>(0);

  const handleUserInput = (id: string) => {
    setCurrentForm(currentForm + 1);
  };

  const handleGoBack = () => {
    setCurrentForm(currentForm - 1);
  };

  const handleSubmit = () => {
    console.log("Submited!");
  };

  return (
    <FormStyled>
      {currentForm === 0 && (
        <FormSection
          text={"Email"}
          id={"email"}
          message={"Enter a valid email address"}
          actionNext={handleUserInput}
          actionBack={handleGoBack}
          actionSubmit={handleSubmit}
          currentForm={currentForm}
        />
      )}
      {currentForm === 1 && (
        <FormSection
          text={"Password"}
          id={"password"}
          message={"Choose your password"}
          text2={"Repeat password"}
          id2={"repassword"}
          actionNext={handleUserInput}
          actionBack={handleGoBack}
          actionSubmit={handleSubmit}
          currentForm={currentForm}
        />
      )}
      {currentForm === 2 && (
        <FormSection
          text={"User name"}
          id={"username"}
          message={"Enter your user name"}
          actionNext={handleUserInput}
          actionBack={handleGoBack}
          actionSubmit={handleSubmit}
          currentForm={currentForm}
        />
      )}
      <span>{`${currentForm + 1}/3`}</span>
    </FormStyled>
  );
};

export default Form;
