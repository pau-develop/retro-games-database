import { useRouter } from "next/router";
import { useState, useCallback, useEffect } from "react";
import RegisterFormEmail from "./RegisterFormEmail";
import RegisterFormPassword from "./RegisterFormPassword";
import FormStyled from "./FormStyled";
import RegisterFormName from "./RegisterFormName";

const initialData = {
  userName: "",
  password: "",
  rePassword: "",
  email: "",
};

const RegisterForm = (): JSX.Element => {
  const router = useRouter();
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
        return setCurrentForm(currentForm + 1);
      }
    },
    [currentForm]
  );

  const handleGoBack = useCallback(() => {
    setCurrentForm(currentForm - 1);
  }, [currentForm]);

  const handleSubmit = useCallback(async () => {
    const result = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(userData),
    });
    if (result.status === 200) router.push("/home");
  }, [userData]);

  return (
    <FormStyled>
      {currentForm === 0 && (
        <RegisterFormEmail actionNext={handleNext} userData={userData} />
      )}
      {currentForm === 1 && (
        <RegisterFormPassword
          actionNext={handleNext}
          actionBack={handleGoBack}
          userData={userData}
        />
      )}
      {currentForm === 2 && (
        <RegisterFormName
          actionNext={handleNext}
          actionBack={handleGoBack}
          userData={userData}
        />
      )}
      {currentForm === 3 && <span>Submitting...</span>}
      {currentForm < 3 && <span>{`${currentForm + 1}/3`}</span>}
    </FormStyled>
  );
};

export default RegisterForm;
