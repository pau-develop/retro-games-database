import { useState } from "react";
import FormSection from "../FormSection/FormSection";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const [currentForm, setCurrentForm] = useState<number>(0);

  return (
    <FormStyled>
      {currentForm === 0 && (
        <FormSection
          text={"Email"}
          id={"email"}
          message={"Enter a valid email address"}
        />
      )}
      {currentForm === 1 && (
        <FormSection
          text={"Password"}
          id={"password"}
          message={"Choose your password"}
          text2={"Repeat password"}
          id2={"repassword"}
        />
      )}
      {currentForm === 2 && (
        <FormSection
          text={"User name"}
          id={"username"}
          message={"Enter your user name"}
        />
      )}
      <span>{`${currentForm + 1}/3`}</span>
    </FormStyled>
  );
};

export default Form;
