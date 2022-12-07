import { useState } from "react";
import FormSection from "../FormSection/FormSection";
import FormStyled from "./FormStyled";

const initialData = {
  userName: "",
  password: "",
  email: "",
};

const Form = (): JSX.Element => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [userData, setUserData] = useState(initialData);

  const handleNext = (input: string) => {
    if (currentForm === 0) {
      setUserData({ ...userData, email: input });
      return setCurrentForm(currentForm + 1);
    }
    if (currentForm === 1) {
      setUserData({ ...userData, password: input });
      return setCurrentForm(currentForm + 1);
    }
    if (currentForm === 2) {
      setUserData({ ...userData, userName: input });
    }
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
          actionNext={handleNext}
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
          actionNext={handleNext}
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
          actionNext={handleNext}
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
