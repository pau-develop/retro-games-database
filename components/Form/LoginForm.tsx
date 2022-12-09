import { useCallback, useEffect, useState } from "react";
import FormSection from "../FormSection/FormSection";
import FormStyled from "./FormStyled";

const initialData = {
  userName: "",
  password: "",
  rePassword: "",
  email: "",
};

const LoginForm = (): JSX.Element => {
  const [userData, setUserData] = useState(initialData);

  useEffect(() => {
    if (userData.userName !== "" && userData.password !== "") handleSubmit();
  });

  const handleUserData = (input: string, input2: string) => {
    console.log(input, input2);
    setUserData({ ...userData, userName: input, password: input2 });
  };

  const handleSubmit = useCallback(async () => {
    // const result = await fetch("/api/login", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // });
  }, [userData]);

  return (
    <FormStyled>
      <FormSection
        text={"User name"}
        id={"username"}
        message={"Enter user information"}
        text2={"Password"}
        id2={"password"}
        currentForm={0}
        formType="login"
        userData={userData}
        actionLogin={handleUserData}
      />
    </FormStyled>
  );
};

export default LoginForm;
