import { useState, useCallback } from "react";
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

  const handleNext = useCallback(
    (input: string) => {
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
        return handleSubmit();
      }
    },
    [currentForm]
  );

  const handleGoBack = useCallback(() => {
    setCurrentForm(currentForm - 1);
  }, [currentForm]);

  const handleSubmit = useCallback(async () => {
    await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
  }, [currentForm]);

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
          message={"Enter password"}
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
          message={"Enter a user name"}
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
