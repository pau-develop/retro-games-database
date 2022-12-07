import { useState, useCallback, useEffect } from "react";
import FormSection from "../FormSection/FormSection";
import FormStyled from "./FormStyled";

const initialData = {
  userName: "",
  password: "",
  rePassword: "",
  email: "",
};

const Form = (): JSX.Element => {
  const [currentForm, setCurrentForm] = useState<number>(0);
  const [userData, setUserData] = useState(initialData);

  useEffect(() => {
    if (
      userData.userName !== "" &&
      userData.password !== "" &&
      userData.email !== ""
    )
      handleSubmit();
  }, [userData]);

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
      }
    },
    [currentForm]
  );

  const handleGoBack = useCallback(() => {
    setCurrentForm(currentForm - 1);
  }, [currentForm]);

  const handleSubmit = async () => {
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
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
          userData={userData}
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
          userData={userData}
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
          userData={userData}
        />
      )}
      <span>{`${currentForm + 1}/3`}</span>
    </FormStyled>
  );
};

export default Form;
